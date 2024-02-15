import { useTranslation } from "react-i18next";
import { SideBarColiseum } from "components/SideBar/SideBarColiseum.tsx";
import { Advertisement } from "components/Advertisement";
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
    account_id: yup.string().required().email(),
    password: yup.string().required(),
  })
  .required();

function Login() {
  const { t } = useTranslation();
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
      <SideBarColiseum />
      <div className="content flex-1">
        <div className="border-black-500 bor min-h-[188px] border-2 border-solid p-2">
          <div className="text-center text-3xl ">
            球ムヘマIDタ碁投ヘツ座性スイオ千夜チ港需チ緒動
          </div>
          <form className="" onSubmit={handleSubmit(handleLogin)}>
            <div className="mt-5 border-2 p-2">
              <div className="flex flex-col gap-y-3">
                <LabelCommon
                  className="border-b-2 pb-2 text-xl"
                  htmlFor="account_id"
                >
                  球ムヘマIDタ碁
                  (座性スイオ千夜チ港需チ緒動-ID座性スイオ千夜チ港需チ緒動)
                </LabelCommon>
                <InputCommon
                  control={control}
                  name="account_id"
                  type="text"
                  error={errors.account_id?.message}
                  className="h-[35px] w-2/3"
                />
              </div>
            </div>
            <div className="mt-5 border-2 p-2">
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
                  className="h-[35px] w-2/3"
                >
                  <IconEyeToggle
                    onClick={handleShowPassword}
                    open={showPassword}
                  ></IconEyeToggle>
                </InputCommon>
              </div>
            </div>
            <div className="logo-coli mx-auto w-[350px]">
              <div className="relative h-full">
                <img
                  className="h-[450px]"
                  src="https://jwt.io/img/pic_logo.svg"
                  alt=""
                />
                <ButtonCommon
                  className="absolute bottom-[25px] left-1/2 w-full -translate-x-1/2 px-10 text-center  text-2xl font-bold"
                  type="submit"
                >
                  <span className="mx-auto">夜チ港需チ緒動需チ</span>
                </ButtonCommon>
              </div>
            </div>
          </form>
          <div className="mt-10">
            <div className="flex justify-around gap-x-6">
              <ButtonCommon className="px-10 text-2xl" type="button">
                夜チ港需チ緒動需チ
              </ButtonCommon>
              <ButtonCommon className="px-10 text-2xl" type="button">
                夜チ港需チ緒動需チ
              </ButtonCommon>
            </div>
          </div>
        </div>
        <Advertisement>{arrAds}</Advertisement>
      </div>
    </>
  );
}

export default Login;
