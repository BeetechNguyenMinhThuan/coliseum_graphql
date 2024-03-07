import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { SideBarColiseum } from "components/SideBar/SideBarColiseum.tsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function ContactForm() {
  const defaultValue = {
    user_name: "",
    email: "",
    content_request: "",
    user_id: "",
    checkboxes: [],
  };

  const schema = yup.object({
    user_name: yup.string().required("*Vui lòng nhập tên của bạn*"),
    email: yup.string().email("*Email không hợp lệ*"),
    content_request: yup.string().required("*Vui lòng nhập nội dung yêu cầu*"),
    user_id: yup.string(),
    checkboxes: yup
      .array()
      .min(1, "*Chọn ít nhất một ô checkbox*")
      .required("*Chọn ít nhất một ô checkbox*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({ resolver: yupResolver(schema), defaultValues: defaultValue });

  const onSubmit = (data) => {
    console.log(data);
  };

  const CHECKBOXES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Khác"];

  return (
    <>
      <SideBarColiseum />
      <div className="content flex-1">
        <div className="border-black-500 min-h-[188px] border-2 border-l-0 border-solid p-4 ">
          <div className="my-5"></div>
          <div className="px-6">
            <span className="block text-lg">
              ご質問、問題報告、リクエスト、ユーザー削除リクエストなどはこちらのフォームをご利用ください。
              豊後関連 コロッセオ。
            </span>
            <span className="my-2 block text-lg">
              ご返答までに数営業日かかる場合がございますので、あらかじめご了承ください。
            </span>
            <span className="block text-lg"> *必須の質問</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 border-2 px-6">
              <h3 className="border-b-2 py-3 text-xl font-bold">
                リクエストの種類 *
              </h3>
              <div className="my-3 flex flex-col gap-2">
                {CHECKBOXES.map((checkbox, index) => (
                  <div className="form-control" key={index}>
                    <input
                      id={`checkbox${index}`}
                      type="checkbox"
                      {...register("checkboxes")}
                      value={`Checkbox ${index}`}
                    />
                    <label className="mx-3" htmlFor={`checkbox${index}`}>
                      Checkbox {index}
                    </label>
                  </div>
                ))}
              </div>
              {errors && errors.checkboxes && (
                <p className="text-red-500">{errors.checkboxes.message}</p>
              )}
            </div>

            <div className="mb-4 border-2  px-6">
              <h3 className="border-b-2 py-3 text-xl font-bold">
                リクエストの種類 *
              </h3>
              <div className="form-control my-3 ">
                <input
                  className="w-1/2 border-2 p-2 outline-none"
                  placeholder="Nhập tên của bạn"
                  type="text"
                  {...register("user_name")}
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                />
              </div>
              {errors && errors.user_name && (
                <p className="text-red-500">{errors.user_name.message}</p>
              )}
            </div>

            <div className="mb-4 border-2  px-6">
              <h3 className="border-b-2 py-3 text-xl font-bold">
                リクエストの
              </h3>
              <p className="my-2 text-lg font-medium">
                ユーザーの方は、豊後コロシアムにご登録のメールアドレスをご入力ください。
                必須ではありませんが、
                ご提供いただけない場合は、ご返答・ご対応ができない場合がございます。
              </p>
              <div className="form-control my-3 ">
                <input
                  className="w-1/2 border-2 p-2 outline-none"
                  placeholder="Nhập email của bạn"
                  type="text"
                  {...register("email")}
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                />
                {errors && errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="mb-4 border-2  px-6">
              <h3 className="border-b-2 py-3 text-xl font-bold">
                豊後アリーナユーザーID
              </h3>
              <p className="my-2 text-lg font-medium">
                ユーザー登録時にメールが届かない場合は、入力したユーザーIDを入力してください（必須）
                その他のユーザーの場合は、ユーザー ID を入力してください
                (オプション)
              </p>
              <div className="form-control my-3 ">
                <input
                  className="w-1/2 border-2 p-2 outline-none"
                  placeholder="答えを入力してください"
                  type="text"
                  {...register("user_id")}
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4 border-2  px-6">
              <h3 className="border-b-2 py-3 text-xl font-bold">
                リクエスト内容*
              </h3>
              <p className="my-2 text-lg font-medium">
                できるだけ具体的にお知らせください。 登録している場合
                原稿投稿の場合は、出版作品など登録規定に必要な情報をご入力ください。
              </p>
              <div className="form-control my-3 ">
                <textarea
                  className="h-44 w-full border-2 p-2 outline-none"
                  placeholder="答えを入力してください"
                  {...register("content_request")}
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                />
              </div>
              {errors && errors.content_request && (
                <p className="text-red-500">{errors.content_request.message}</p>
              )}
            </div>

            <div className="mb-4 border-2  px-6">
              <h3 className="border-b-2 py-3 text-xl font-bold">
                退会申請時の個人情報の削除について
              </h3>

              <div className="form-control my-3 ">
                <span className="block">
                  ご要望に応じて、以下の情報を削除させていただきます。
                </span>
                <span className="block">
                  その場合、メールにてご本人様確認をさせていただきます。 ※
                </span>
                <span className="block">
                  ご依頼を頂いてから3〜5営業日程度かかる場合がございますので、あらかじめご了承ください。
                </span>
                <p className="my-6">
                  <span className="block">
                    ・ログイン認証に関する情報（メールアドレス、ユーザーID、パスワード）
                  </span>
                  <span className="block">
                    ・著者に関する情報（著者名、プロフィール写真）
                  </span>
                  <span className="block">
                    ・作品情報（作品のジャケット写真、作品）
                  </span>
                </p>
                <p>
                  以下のものは削除対象に含まれません。
                  <span className="block">
                    ・他作品に対して書かれたコメント（非表示になりますがデータは残ります）
                  </span>
                </p>
              </div>
            </div>

            <button type="submit" className="my-4 border-2 px-4 py-2">
              Submit
            </button>
          </form>
        </div>
        <DevTool control={control} />
      </div>
    </>
  );
}
