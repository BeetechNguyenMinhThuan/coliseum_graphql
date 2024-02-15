import { useTranslation } from "react-i18next";
import { SideBarTournament } from "@/components/SideBar/SideBarTournament.tsx";
import { MyDatePicker } from "@/components/DatePicker/MyDatePicker.tsx";
import { useMutation, useQuery } from "@apollo/client";
import { SetStateAction, useEffect, useState } from "react";
import { GET_ROUNDS, GET_USERS } from "@/graphql-client/round/queries.ts";
import Swal from "sweetalert2";
import {
  CREATE_ROUND,
  DELETE_ROUND,
  GET_SINGLE_ROUND,
  UPDATE_ROUND,
} from "@/graphql-client/round/mutations.ts";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { format, parseISO } from "date-fns";
import Radio from "@/components/checkbox/Radio.tsx";
import { CircularPagination } from "@/components/Pagination/Pagination.tsx";
import useAuth from "@/hooks/useAuth.tsx";

interface IFormInput {
  event_id?: number;
  ulid: string;
  round_name: string;
  round_start_at: Date;
  round_type: number;
  is_current: number;
}

interface FormCreateRoundProps {
  onFormSubmit: (data: any) => Promise<void>;
}

export function Test() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 4; // Giả sử mỗi trang có 10 items
  const {
    loading: roundsLoading,
    data: roundsData,
    refetch: roundsRefetch,
  } = useQuery(GET_ROUNDS, {
    variables: { page: currentPage, limit: limit },
  });

  const [
    createRound,
    { data: rounds, loading: roundLoading, error: roundError },
  ] = useMutation(CREATE_ROUND);

  const [deleteRound] = useMutation(DELETE_ROUND);

  const handleDeleteRound = async (roundId: number) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteRound({
            variables: { roundId: roundId },
          });
          await roundsRefetch();
          toast.success("Xoa thanh cong!");
        }
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err);
        toast.error(err.message);
      } else {
        console.log(err);
        toast.error("An unknown error occurred.");
      }
    }
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

  const handlePageChange = async (newPage: number) => {
    setCurrentPage(newPage);
    await roundsRefetch({ page: newPage, limit: limit });
  };
  if (roundsLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <SideBarTournament />
      <div className="content flex-1">
        <h2 className="mb-5 text-center text-2xl font-bold">
          Form Create Round
        </h2>
        <FormCreateRound onFormSubmit={handleFormSubmit} />
        <RoundList
          onDeleteRound={handleDeleteRound}
          data={roundsData}
          currentPage={currentPage}
          onHandlePageChange={handlePageChange}
        />
      </div>
    </>
  );
}

const schema = yup
  .object({
    ulid: yup.string().required().max(10),
    round_name: yup.string().required(),
    round_type: yup.number().required(),
    is_current: yup.number().required(),
    event_id: yup.number(),
    round_start_at: yup.date().required(),
  })
  .required();

function FormCreateRound({ onFormSubmit }: FormCreateRoundProps) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
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
    console.log(data);
    if (!isValid) return;
    await onFormSubmit(data);
    reset({
      round_name: "",
      ulid: "",
      is_current: undefined,
      round_type: 1,
    });
  };
  return (
    <>
      <form
        action=""
        className="mb-5  gap-x-3"
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
            disabled={!watch("ulid")}
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
        <div className="grid grid-cols-3 items-center gap-x-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Round Start</span>
            </div>
            <MyDatePicker name="round_start_at" control={control} />
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
          <div className="">
            <div className="flex gap-10">
              <Radio
                checked={Number(watch("is_current")) == 1}
                name="is_current"
                control={control}
                value={1}
              >
                Current
              </Radio>
              <Radio
                checked={Number(watch("is_current")) == 0}
                name="is_current"
                control={control}
                value={0}
              >
                Not Current
              </Radio>
            </div>
            <p className="mt-2 text-red-500">{errors.is_current?.message}</p>
          </div>
        </div>
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
    </>
  );
}

function FormEditRound(props: any) {
  const { roundId, handleOpen } = props;

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

  const { loading, error, data, refetch } = useQuery(GET_SINGLE_ROUND, {
    variables: { roundId: roundId },
    onCompleted: (result) => {
      const round = result?.round;
      reset({
        ...round,
        round_start_at: parseISO(round?.round_start_at),
      });
    },
  });

  useEffect(() => {
    const errorList = Object.values(errors);
    if (errorList.length > 0) {
      toast.error(errorList[0]?.message, {
        pauseOnHover: false,
      });
    }
  }, [errors]);

  const [updateRound] = useMutation(UPDATE_ROUND, {
    refetchQueries: [GET_ROUNDS, GET_SINGLE_ROUND],
  });

  const onSubmitFormRound: SubmitHandler<IFormInput> = async (data) => {
    if (!isValid) return;
    try {
      await updateRound({
        variables: {
          roundId: roundId,
          input: {
            round_name: data.round_name,
            round_start_at: data.round_start_at,
            ulid: data.ulid,
            round_type: Number(data.round_type),
            is_current: data.is_current,
            event_id: 123,
          },
        },
      });
      toast.success("Sua thanh cong!");
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err);
        toast.error(err.message);
      } else {
        console.log(err);
        toast.error("An unknown error occurred.");
      }
    }
    handleOpen(null);
    reset({
      round_name: "",
      ulid: "",
    });
  };
  return (
    <>
      <form
        action=""
        className="mb-5  gap-x-3"
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
        <div className="grid grid-cols-3 items-center gap-x-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Round Start</span>
            </div>
            <MyDatePicker name="round_start_at" control={control} />
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
          <div className="">
            <div className="flex gap-10">
              <Radio
                checked={Number(watch("is_current")) == 1}
                name="is_current"
                control={control}
                value={1}
              >
                Current
              </Radio>
              <Radio
                checked={Number(watch("is_current")) == 0}
                name="is_current"
                control={control}
                value={0}
              >
                Not Current
              </Radio>
            </div>
            <p className="mt-2 text-red-500">{errors.is_current?.message}</p>
          </div>
        </div>
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

function RoundList(props: any) {
  const { data, onDeleteRound, onHandlePageChange } = props;
  const { user } = useAuth();

  return (
    <div>
      <h1 className="my-10 text-center text-4xl font-bold">List of Rounds</h1>

      <ul className="mt-2 grid grid-cols-2 gap-6">
        {data?.getRoundsPaginate?.rounds.map((round: any) => (
          <li key={round.round_id}>
            <div className="text-primary-content w-96 bg-amber-300 p-2">
              <div className="card-body">
                <h2 className="card-title">{round.round_name}</h2>
                <p>{format(new Date(round.round_start_at), "yyyy.MM.dd")}</p>
                <div className="card-actions justify-end">
                  <button className="btn">
                    {round.round_type == 1 ? "Active" : "UnActive"}
                  </button>
                </div>
                {user.role === "admin" && (
                  <div
                    className="button inline-block cursor-pointer bg-red-400 p-2 text-white"
                    onClick={() => onDeleteRound(round.round_id)}
                  >
                    Remove
                  </div>
                )}
                <ModalEditRound roundId={round.round_id} />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <CircularPagination
        totalPages={data?.getRoundsPaginate?.totalPages}
        onPageChange={onHandlePageChange}
      />
    </div>
  );
}

function ModalEditRound(props: any) {
  const { roundId } = props;
  const [size, setSize] = useState("" || undefined);
  const handleOpen = (value: string | null | SetStateAction<undefined>) =>
    setSize(value);

  return (
    <>
      <Button
        className="ml-3"
        onClick={() => handleOpen("lg")}
        variant="gradient"
        placeholder={undefined}
      >
        Edit
      </Button>
      <Dialog
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        size={size || "md"}
        handler={handleOpen}
        placeholder=""
      >
        <DialogHeader className="justify-between" placeholder={undefined}>
          <h2>Form Edit Round</h2>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
            placeholder={undefined}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </span>
          </Button>
        </DialogHeader>
        <DialogBody placeholder={undefined}>
          <FormEditRound handleOpen={handleOpen} roundId={roundId} />
        </DialogBody>
      </Dialog>
    </>
  );
}
