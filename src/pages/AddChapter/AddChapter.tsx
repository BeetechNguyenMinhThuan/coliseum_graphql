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

interface IAddChapterForm {}

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

function AddChapter() {
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

  const handleAddChapter: SubmitHandler<IAddChapterForm> = (values) => {
    console.log(values);
  };

  return (
    <>
      <SideBarColiseum />
      <div className="content flex-1">
        <div className="border-black-500 bor min-h-[188px] border-2 border-solid p-6">
          <div className="text-center text-3xl font-bold">千夜チ港需チ緒動</div>
          <div className="flex items-center justify-between border-b-2 border-dashed pb-3">
            <div className="flex items-center gap-x-2">
              <span>港需チ</span>
              <h2 className="text-2xl font-bold">
                千夜チ港需チ緒動千夜チ港需チ緒動
              </h2>
            </div>
            <ButtonCommon type="button">緒動千夜</ButtonCommon>
          </div>
          <div className="flex gap-x-5 border-b-2 border-dashed py-3">
            <div className="h-[180px] w-[180px]">
              <img
                className="h-full w-full object-cover"
                src="https://media.istockphoto.com/id/1396814518/vi/vec-to/h%C3%ACnh-%E1%BA%A3nh-s%E1%BA%AFp-t%E1%BB%9Bi-kh%C3%B4ng-c%C3%B3-%E1%BA%A3nh-kh%C3%B4ng-c%C3%B3-h%C3%ACnh-%E1%BA%A3nh-thu-nh%E1%BB%8F-c%C3%B3-s%E1%BA%B5n-h%C3%ACnh-minh-h%E1%BB%8Da-vector.jpg?s=612x612&w=0&k=20&c=MKvRDIIUmHTv2M9_Yls35-XhNeksFerTqqXmjR5vyf8="
                alt=""
              />
            </div>
            <div className="flex w-full flex-col gap-y-4">
              <div className="flex justify-between">
                <div className="flex gap-x-6">
                  <span>千夜チ</span>
                  <h3 className="text-xl">千夜チ 1</h3>
                  <h3 className="text-xl">千夜チ千夜チ千夜チ千夜チ</h3>
                </div>
                <ButtonCommon type="button">千夜チ</ButtonCommon>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-x-6">
                  <span>千夜チ</span>
                  <h3 className="text-xl">千夜チ 1</h3>
                  <h3 className="text-xl">千夜チ千夜チ千夜チ千夜チ</h3>
                </div>
                <ButtonCommon type="button">千夜チ</ButtonCommon>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-x-6">
                  <span>千夜チ</span>
                  <h3 className="text-xl">千夜チ 1</h3>
                  <h3 className="text-xl">千夜チ千夜チ千夜チ千夜チ</h3>
                </div>
                <ButtonCommon type="button">千夜チ</ButtonCommon>
              </div>
            </div>
          </div>
          <div className="py-3">
            <p>千夜チ港需千夜チ港需千夜チ港需</p>
            <p>千夜チ港需千夜チ港需千夜チ港需千夜</p>
            <p>千夜チ港需千夜チ港需千夜チ港需千夜チ港需</p>
          </div>
          <form className="mt-10" onSubmit={handleSubmit(handleAddChapter)}>
            <div className="border-2 px-12 py-2">
              <FormGroup>
                <LabelCommon
                  className="block"
                  isRequired
                  htmlFor="chapter_name"
                >
                  千夜チ港需
                </LabelCommon>
                <InputCommon
                  control={control}
                  name="chapter_name"
                  type="text"
                  placeholder="座性スイオ千夜チ港需チ緒動"
                  error={errors.chapter_name?.message}
                  className="h-[35px] w-2/3"
                />
              </FormGroup>
            </div>
            <div className="mt-5 border-2 px-12 py-2">
              <FormGroup>
                <LabelCommon
                  className="block"
                  isRequired
                  htmlFor="chapter_name"
                >
                  千夜チ港需
                </LabelCommon>
                <TextAreaCommon
                  control={control}
                  name="summary_novel"
                  placeholder="千夜チ港需チ緒動"
                />
              </FormGroup>
              <ButtonCommon type="button">
                <span>千夜チ港</span>
              </ButtonCommon>
            </div>

            <div className="mt-5 flex justify-around">
              <ButtonCommon type="button">
                <span className="text-xl font-bold">千夜チ港千夜チ港</span>
              </ButtonCommon>
              <ButtonCommon type="button">
                <span className="text-xl font-bold">千夜チ港千夜チ港</span>
              </ButtonCommon>
            </div>
          </form>
        </div>
        <Advertisement>{arrAds}</Advertisement>
      </div>
    </>
  );
}

export default AddChapter;
