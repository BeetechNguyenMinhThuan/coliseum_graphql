import { useTranslation } from "react-i18next";
import { SideBarTournament } from "@/components/SideBar/SideBarTournament.tsx";
import { MyDatePicker } from "@/components/DatePicker/MyDatePicker.tsx";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ROUNDS, GET_USERS } from "@/graphql-client/round/queries.ts";
import {
  CREATE_ROUND,
  DELETE_ROUND,
} from "@/graphql-client/round/mutations.ts";
import { useForm, useController } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Button, Input, Typography } from "@material-tailwind/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  example: string;
  exampleRequired: string;
};

interface IFormInput {
  event_id: number;
  ulid: string;
  round_name: string;
  round_start_at: Date;
  round_type: number;
}

interface FormCreateRoundProps {
  roundInput: IFormInput;
  onFormSubmit: () => void;
  onInputChange: () => void;
}

export function Test() {
  const { t, i18n } = useTranslation();

  const [roundInput, setRoundInput] = useState({
    event_id: 123,
    ulid: "",
    round_name: "",
    round_start_at: new Date(),
    round_type: 1,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 2; // Giả sử mỗi trang có 10 items

  const { loading, error, data, refetch } = useQuery(GET_USERS, {
    variables: { page: currentPage, limit: limit },
  });
  const {
    loading: roundsLoading,
    error: roundsError,
    data: roundsData,
    refetch: roundsRefetch,
  } = useQuery(GET_ROUNDS);

  const [
    createRound,
    { data: rounds, loading: roundLoading, error: roundError },
  ] = useMutation(CREATE_ROUND);

  const [deleteRound] = useMutation(DELETE_ROUND);

  const handlePageChange = async (newPage: number) => {
    setCurrentPage(newPage);
    await refetch({ page: newPage, limit: limit });
  };

  const handleDeleteRound = async (roundId) => {
    await deleteRound({
      variables: { roundId: roundId },
    });
    await roundsRefetch();
  };

  const handleFormSubmit = async (data) => {
    try {
      const submissionData = {
        ...data,
        event_id: 123,
        // round_start_at: data.round_start_at.toISOString(),
        round_type: parseInt(data.round_type), // Chuyển đổi ngày sang chuỗi ISO 8601
      };
      await createRound({
        variables: { input: submissionData },
      });
      await roundsRefetch();
      // ...
    } catch (error) {
      // Xử lý lỗi
      console.log(error);
    }
  };

  const handleInputChange = (name, value) => {
    setRoundInput({ ...roundInput, [name]: value });
  };

  if (loading || roundsLoading)
    return <span className="loading loading-spinner loading-lg"></span>;
  if (error) return <p>Error :(</p>;
  if (data?.getUsersPaginate?.users?.length === 0) {
    return null;
  }

  return (
    <>
      <SideBarTournament />
      <div className="content flex-1">
        {data?.getUsersPaginate?.users?.map((user) => (
          <div key={user.user_id}>{user.name}</div>
        ))}
        <PaginationButtons
          currentPage={currentPage}
          totalPages={data?.getUsersPaginate?.totalPages}
          onPageChange={handlePageChange}
        />

        <h2 className="mb-5 text-center text-2xl font-bold">
          Form Create Round
        </h2>

        <FormCreateRound
          roundInput={roundInput}
          onFormSubmit={handleFormSubmit}
          onInputChange={handleInputChange}
        />
        <RoundList data={roundsData} onDeleteRound={handleDeleteRound} />
      </div>
    </>
  );
}

const PaginationButtons = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="join">
      {pages.map((page) => (
        <button
          key={page}
          disabled={currentPage === page}
          onClick={() => onPageChange(page)}
          className={`btn join-item  ${
            currentPage === page ? "btn-active" : ""
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
const schema = yup
  .object({
    ulid: yup.string().required().max(10),
    round_name: yup.string().required(),
    round_type: yup.string().required(),
  })
  .required();

function FormCreateRound({
  onFormSubmit,
  onInputChange,
}: FormCreateRoundProps) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    onFormSubmit(data);
    reset({
      round_name: "",
      ulid: "",
    });
  };
  return (
    <>
      <form
        action=""
        className="mb-5 grid grid-cols-2 gap-x-3"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3"
            placeholder={undefined}
          >
            Ulid
          </Typography>
          <Input
            crossOrigin={undefined}
            size="lg"
            type="text"
            placeholder="Type here"
            {...register("ulid")}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <p className="text-red-500">{errors.ulid?.message}</p>
        </div>
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3"
            placeholder=""
          >
            Round name
          </Typography>
          <Input
            crossOrigin={undefined}
            size="lg"
            type="text"
            placeholder="Type here"
            {...register("round_name")}
            defaultValue=""
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <p className="text-red-500">{errors.round_name?.message}</p>
        </div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Round Start</span>
          </div>
          <MyDatePicker
            name="round_start_at"
            control={control}
            onInputChangeDate={onInputChange}
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Round Type</span>
          </div>
          <select
            {...register("round_type")}
            className="select select-bordered w-full"
          >
            <option value="1">Active</option>
            <option value="2">Unactive</option>
          </select>
        </label>

        <Button type="submit" className="mx-auto mt-5 w-full" placeholder="">
          Submit
        </Button>
      </form>
      {/*<DevTool control={control} />*/}
    </>
  );
}

function RoundList({ data, onDeleteRound }) {
  return (
    <div>
      <h1>List of Rounds</h1>

      <ul className="mt-2 grid grid-cols-2 gap-6">
        {data.rounds.map((round: any) => (
          <li key={round.round_id}>
            <div className="text-primary-content w-96 bg-amber-300 p-2">
              <div className="card-body">
                <h2 className="card-title">{round.round_name}</h2>
                <p>{round.round_start_at}</p>
                <div className="card-actions justify-end">
                  <button className="btn">
                    {round.round_type == 1 ? "Active" : "UnActive"}
                  </button>
                </div>
                <div
                  className="button inline-block cursor-pointer bg-red-400 p-2 text-white"
                  onClick={() => onDeleteRound(round.round_id)}
                >
                  Remove
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MyInput({ control, ...props }) {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="rounded-md border border-gray-300 p-4"
      {...field}
      {...props}
    />
  );
}
