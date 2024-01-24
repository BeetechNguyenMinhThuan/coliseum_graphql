import { useTranslation } from "react-i18next";
import { SideBarTournament } from "@/components/SideBar/SideBarTournament.tsx";
import { MyDatePicker } from "@/components/DatePicker/MyDatePicker.tsx";
import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
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
import { toast } from "react-toastify";
import { AnyObject } from "@/models/Common.ts";

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
  onFormSubmit: (data: any) => Promise<void>;
  onInputChange: (name: any, value: any) => void;
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
      toast.success("Them thanh cong!");

      // ...
    } catch (error) {
      // Xử lý lỗi
      toast.error(error.message);
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
    formState: { errors, isValid, isSubmitting },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const errorList = Object.values(errors);
    if (errorList.length > 0) {
      toast.error(errorList[0]?.message, {
        pauseOnHover: false,
      });
    }
  }, [errors]);

  const onSubmitFormRound = async (data) => {
    if (!isValid) return;
    await onFormSubmit(data);
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
        onSubmit={handleSubmit(onSubmitFormRound)}
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
          {isSubmitting ? (
            <div className="grid w-full place-items-center overflow-x-scroll rounded-lg lg:overflow-visible">
              <svg
                className="animate-spin text-gray-300"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-900"
                ></path>
              </svg>
            </div>
          ) : (
            "Submit"
          )}
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
