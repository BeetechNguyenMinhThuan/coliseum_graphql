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
import useToggleValue from "@/hooks/useToggleValue.ts";
import FormGroup from "@/components/formGroup/FormGroup.tsx";
import i18n from "@/i18n";
import { useNavigate } from "react-router-dom";
import CheckboxCommon from "@/components/checkbox/CheckboxCommon.tsx";
import TextAreaCommon from "@/components/textArea/TextAreaCommon.tsx";

interface IUploadNovelForm {}

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

function AddNovel() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({ resolver: yupResolver(schema) });

  const arrAds = [
    "s-l1200.webp",
    "coke-print-ad.jpg",
    "7_Up_-_You_like_it,_it_likes_you,_1948.jpg",
  ];

  const handleUploadNovel: SubmitHandler<IUploadNovelForm> = (values) => {
    console.log(values);
  };

  return (
    <>
      <SideBarColiseum />
      <div className="content flex-1">
        <div className="border-black-500 bor min-h-[188px] border-2 border-solid p-2">
          <div className="text-center text-3xl font-bold">千夜チ港需チ緒動</div>
          <div className="">
            <p>千夜チ港需チ緒動</p>
            <p>千夜チ港需チ緒動</p>
            <p>千夜チ港需チ緒動</p>
            <p>* 千夜チ港需チ緒動</p>
          </div>
          <form className="mt-10" onSubmit={handleSubmit(handleUploadNovel)}>
            <div className="border-2 px-12 py-2">
              <h3 className="mb-5 border-b-2 pb-2 font-bold">千夜チ港需*</h3>
              <FormGroup>
                <InputCommon
                  control={control}
                  name="user_name"
                  type="text"
                  placeholder="座性スイオ千夜チ港需チ緒動"
                  error={errors.user_name?.message}
                  className="h-[35px] w-2/3"
                />
              </FormGroup>
              <div className="mt-4 flex items-center gap-x-7">
                <ButtonCommon className="flex w-fit items-center" type="button">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="rotate-180"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M464 464H48a16 16 0 0 1-14.07-23.62l208-384a16 16 0 0 1 28.14 0l208 384A16 16 0 0 1 464 464z"></path>
                  </svg>
                  <span>千夜チ港需</span>
                </ButtonCommon>
                <span>座性スイオ千夜チ港需チ緒動-</span>
              </div>
              <div className="mt-4 flex items-center gap-x-7">
                <ButtonCommon className="flex w-fit items-center" type="button">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="rotate-180"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M464 464H48a16 16 0 0 1-14.07-23.62l208-384a16 16 0 0 1 28.14 0l208 384A16 16 0 0 1 464 464z"></path>
                  </svg>
                  <span>千夜チ港需夜チ港需チ緒夜チ港需チ緒</span>
                </ButtonCommon>
                <span>座性スイオ千夜チ港需チ緒動-</span>
              </div>
            </div>
            <div className="mt-5 border-2 px-12 py-2">
              <h3 className="mb-5 border-b-2 pb-2 font-bold">千夜チ港需*</h3>
              <TextAreaCommon
                maxLength={400}
                control={control}
                name="summary_novel"
                placeholder="千夜チ港需チ緒動"
              />
            </div>
            <div className="mt-5 border-2 px-12 py-2">
              <h3 className="mb-5 border-b-2 pb-2 font-bold">千夜チ港需*</h3>
              <ButtonCommon className="flex w-fit items-center" type="button">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="rotate-180"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M464 464H48a16 16 0 0 1-14.07-23.62l208-384a16 16 0 0 1 28.14 0l208 384A16 16 0 0 1 464 464z"></path>
                </svg>
                <span>千夜チ港需夜チ港需チ緒夜チ港需チ緒</span>
              </ButtonCommon>
              <span>チ港需チ緒夜チ港需チ</span>
            </div>
            <div className="mt-5 border-2 px-12 py-2">
              <h3 className="mb-5 border-b-2 pb-2 font-bold">千夜チ港需*</h3>
              <ButtonCommon className="flex w-fit items-center" type="button">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="rotate-180"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M464 464H48a16 16 0 0 1-14.07-23.62l208-384a16 16 0 0 1 28.14 0l208 384A16 16 0 0 1 464 464z"></path>
                </svg>
                <span>千夜チ港需夜チ港需チ緒夜チ港需チ緒</span>
              </ButtonCommon>
              <span>チ港需チ緒夜チ港需チ</span>
            </div>
            <div className="mt-5 border-2 px-12 py-2">
              <h3 className="mb-5 border-b-2 pb-2 font-bold">千夜チ港需*</h3>
              <div className="flex gap-x-6">
                <div className="h-[150px] w-[150px]">
                  <img
                    className="h-full w-full object-cover"
                    src="https://media.istockphoto.com/id/1396814518/vi/vec-to/h%C3%ACnh-%E1%BA%A3nh-s%E1%BA%AFp-t%E1%BB%9Bi-kh%C3%B4ng-c%C3%B3-%E1%BA%A3nh-kh%C3%B4ng-c%C3%B3-h%C3%ACnh-%E1%BA%A3nh-thu-nh%E1%BB%8F-c%C3%B3-s%E1%BA%B5n-h%C3%ACnh-minh-h%E1%BB%8Da-vector.jpg?s=612x612&w=0&k=20&c=MKvRDIIUmHTv2M9_Yls35-XhNeksFerTqqXmjR5vyf8="
                    alt=""
                  />
                </div>
                <input type="file" />
              </div>
            </div>
            <ButtonCommon className="mx-auto mt-10" type="submit">
              港需港需
            </ButtonCommon>
          </form>
        </div>
        <Advertisement>{arrAds}</Advertisement>
      </div>
    </>
  );
}

export default AddNovel;
