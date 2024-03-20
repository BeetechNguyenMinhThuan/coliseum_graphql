import {
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import LabelCommon from "@/components/label/LabelCommon.tsx";
import InputCommon from "@/components/input/inputCommon.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import ButtonCommon from "@/components/button/ButtonCommon.tsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconEyeToggle from "@/components/icons/IconEyeToggle.tsx";
import useToggleValue from "@/hooks/useToggleValue.tsx";
import { useLazyQuery } from "@apollo/client";
import { LOG_IN } from "@/graphql-client/auth/queries.ts";
import { Navigate, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, saveItemStorage } from "@/utils/localStorageHepler.ts";
import useAuth from "@/hooks/useAuth.tsx";
import { toast } from "react-toastify";

interface ILoginForm {
  account_id: string;
  password: string;
}

const schema = yup
  .object({
    account_id: yup.string().required("Vui lòng nhập tài khoản"),
    password: yup.string().required("Vui lòng nhập mật khẩu"),
  })
  .required();

function LoginModal({ open, handleOpen }) {
  const user = useAuth();

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  const [login, { loading, error, data }] = useLazyQuery(LOG_IN);
  const { value: showPassword, handleToggleValue: handleShowPassword } =
    useToggleValue(false);

  const arrAds = [
    "s-l1200.webp",
    "coke-print-ad.jpg",
    "7_Up_-_You_like_it,_it_likes_you,_1948.jpg",
  ];

  const handleLogin: SubmitHandler<ILoginForm> = async (values) => {
    try {
      const res = await login({ variables: { input: values } });
      if (res.error?.message) {
        toast.error(res.error?.message);
      }
      const token = res.data?.login?.token;
      if (token) {
        saveItemStorage(ACCESS_TOKEN, token);
        handleOpen()
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (user.isAuth) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <Dialog
        placeholder={undefined}
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card placeholder={undefined} className="mx-auto w-full max-w-[24rem]">
          <CardBody placeholder={undefined} className="flex flex-col gap-4">
            <form className="" onSubmit={handleSubmit(handleLogin)}>
              <div className="form-group  p-2">
                <div className="flex flex-col gap-y-3">
                  <LabelCommon
                    className="border-b-2 pb-2 text-xl"
                    htmlFor="account_id"
                  >
                    球ムヘマIDタ碁
                  </LabelCommon>
                  <InputCommon
                    control={control}
                    name="account_id"
                    type="text"
                    error={errors.account_id?.message}
                    className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  "
                  />
                </div>
                <pre>
                  {error?.graphQLErrors.map(({ message }, i) => (
                    <p key={i}>{message}</p>
                  ))}
                </pre>
              </div>
              <div className="form-group mt-5 p-2">
                <div className="flex flex-col gap-y-3">
                  <LabelCommon
                    htmlFor="password"
                    className="border-b-2 pb-2 text-xl"
                  >
                    球ムタ碁
                  </LabelCommon>
                  <InputCommon
                    control={control}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    error={errors.password?.message}
                    className="peer  h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700  transition-all  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  "
                  >
                    <span className="absolute right-0 top-0 flex h-full cursor-pointer items-center px-3">
                      <IconEyeToggle
                        onClick={handleShowPassword}
                        open={showPassword}
                      ></IconEyeToggle>
                    </span>
                  </InputCommon>
                </div>
              </div>
              <ButtonCommon
                className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
              >
                <span className="mx-auto">夜チ港需チ緒動需チ</span>
              </ButtonCommon>
            </form>
          </CardBody>
          <CardFooter placeholder={undefined} className="pt-0">
            <Typography
              placeholder={undefined}
              variant="small"
              className="mt-4 flex justify-center"
            >
              Don&apos;t have an account?
              <Typography
                placeholder={undefined}
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export default LoginModal;
