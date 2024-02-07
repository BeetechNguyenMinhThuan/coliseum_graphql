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
import FormGroup from "@/components/formGroup/FormGroup.tsx";
import i18n from "@/i18n";
import { useNavigate } from "react-router-dom";
import CheckboxCommon from "@/components/checkbox/CheckboxCommon.tsx";

interface IRegisterForm {
  bungo_id: string;
  user_name: string;
  email: string;
  password: string;
  confirm_password: string;
  accept_term?: boolean;
}

// rule validate register
const schema = yup
  .object({
    bungo_id: yup.string().required(),
    user_name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(
      i18n.t("validate.required", {
        field: i18n.t("pages.register.password"),
      }),
    ),
    // .min(3)
    // .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    // .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    // .matches(/\d/, "Password must contain at least one digit")
    // .matches(
    //   /[!@#$%^&*(),.?":{}|<>]/,
    //   "Password must contain at least one special character",
    // ),

    confirm_password: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords must match"),
    accept_term: yup.boolean(),
  })
  .required();

function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { value: showPassword, handleToggleValue: handleShowPassword } =
    useToggleValue(false);
  const { value: showRePassword, handleToggleValue: handleShowRePassword } =
    useToggleValue(false);

  const arrAds = [
    "s-l1200.webp",
    "coke-print-ad.jpg",
    "7_Up_-_You_like_it,_it_likes_you,_1948.jpg",
  ];

  const handleRegister: SubmitHandler<IRegisterForm> = (values) => {
    console.log(values);
  };

  return (
    <>
      <SideBarColiseum />
      <div className="content flex-1">
        <div className="border-black-500 bor min-h-[188px] border-2 border-solid p-2">
          <div className="text-center text-3xl ">
            球ムヘマIDタ碁投ヘツ座性スイオ千夜チ港需チ緒動
          </div>
          <form className="" onSubmit={handleSubmit(handleRegister)}>
            <div className="mt-5 border-2 p-2">
              <FormGroup>
                <LabelCommon
                  className="border-b-2 pb-2 text-xl"
                  htmlFor="user_name"
                  isRequired
                >
                  イオ千夜チ港需チ緒動(Username)
                  (座性スイオ千夜チ港需チ緒動-ID座性スイオ千夜チ港需チ緒動)
                </LabelCommon>
                <InputCommon
                  control={control}
                  name="user_name"
                  type="text"
                  error={errors.user_name?.message}
                  className="h-[35px] w-2/3"
                />
              </FormGroup>
            </div>
            <div className="mt-5 border-2 p-2">
              <FormGroup>
                <LabelCommon
                  className="border-b-2 pb-2 text-xl"
                  htmlFor="bungo_id"
                  isRequired
                >
                  球ムヘマIDタ碁
                  (座性スイオ千夜チ港需チ緒動-ID座性スイオ千夜チ港需チ緒動)
                </LabelCommon>
                <InputCommon
                  control={control}
                  name="bungo_id"
                  type="text"
                  error={errors.bungo_id?.message}
                  className="h-[35px] w-2/3"
                />
              </FormGroup>
            </div>
            <div className="mt-5 border-2 p-2">
              <FormGroup>
                <LabelCommon
                  className="border-b-2 pb-2 text-xl"
                  htmlFor="email"
                  isRequired
                >
                  球ム性スイオ(Email)
                  (座性スイオ千夜チ港需チ緒動-ID座性スイオ千夜チ港需チ緒動)
                </LabelCommon>
                <InputCommon
                  control={control}
                  name="email"
                  type="text"
                  error={errors.email?.message}
                  className="h-[35px] w-2/3"
                />
              </FormGroup>
            </div>
            <div className="mt-5 border-2 p-2">
              <FormGroup>
                <LabelCommon
                  htmlFor="password"
                  isRequired
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
              </FormGroup>
            </div>
            <div className="mt-5 border-2 p-2">
              <FormGroup>
                <LabelCommon
                  htmlFor="confirm_password"
                  isRequired
                  className="border-b-2 pb-2 text-xl"
                >
                  球ムタ碁座性
                </LabelCommon>
                <InputCommon
                  control={control}
                  name="confirm_password"
                  type={showRePassword ? "text" : "password"}
                  error={errors.confirm_password?.message}
                  className="h-[35px] w-2/3"
                >
                  <IconEyeToggle
                    onClick={handleShowRePassword}
                    open={showRePassword}
                  ></IconEyeToggle>
                </InputCommon>
              </FormGroup>
            </div>
            <div className="logo-coli mx-auto w-[350px]">
              <div className="relative h-full">
                <img
                  src="https://lh3.googleusercontent.com/gOyv3_b-31UY4te-HRdRixeC3UQbBYohXV31Wx7Sfiea5_q30_ySJBmkjjY9WxT1R0n-ilI985EK6fynCawi38oRPTCbtvbavm47ZI7YWtZ7E_ExxX0xJh2F34YvEVqPfg=w1280"
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
            <div className="mt-10 border-b-2">
              <ul>
                <li>1港需チ緒動需</li>
                <li>1港需チ緒動需</li>
                <li>1港需チ緒動需</li>
                <li>1港需チ緒動需</li>
                <li>1港需チ緒動需</li>
              </ul>
            </div>
            <div className="">
              <p> 夜チ港需チ緒動需チ 夜チ港需チ緒動需チ</p>
              <p> 夜チ港需チ緒動需チ 夜チ港需チ緒動需チ</p>
              <CheckboxCommon name="accept_term" control={control}>
                夜チ港需チ緒動需チ
              </CheckboxCommon>
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

export default Register;
