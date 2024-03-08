import { NOTIFYCATION } from "@/graphql-client/content/queries";
import { useQuery } from "@apollo/client";
import { LoadingSpiner } from "../Loading/LoadingSpiner";
import moment from "moment";

export default function Notifycation() {
  const { loading, data, error } = useQuery(NOTIFYCATION, {
    variables: {
      type: 3,
    },
  });

  const GET_TYPE_NOTIFYCATION_LABE = (type) => {
    switch (type) {
      case 1:
        return "Thông báo";
      case 2:
        return "Sự kiện";
      case 3:
        return "Hệ thông";
      default:
        break;
    }
  };
  return (
    <>
      {loading ? (
        <LoadingSpiner />
      ) : (
        <div>
          {data &&
            data?.contentsNoti.map((notify, index) => (
              <div>
                <div className="">
                  <label
                    className="inline-block w-[220px] border-2 border-b-0 px-3 py-1 text-center"
                    htmlFor=""
                  >
                    {moment(parseInt(notify?.publication_start_at ?? "")).format(
                      "YYYY-MM-DD",
                    )}{" "}
                  </label>
                  <label
                    className="inline-block w-[220px] border-2 border-b-0 border-l-0 px-3 py-1 text-center"
                    htmlFor=""
                  >
                    {GET_TYPE_NOTIFYCATION_LABE(notify?.information_type)}
                  </label>
                </div>
                <label
                  className="block border-2 border-b-0 text-center"
                  htmlFor=""
                >
                  {notify?.title}
                </label>
                <a
                  key={index}
                  href=""
                  className="inline-block h-[190px] w-[880px] border-2"
                >
                  <p>{notify?.content}</p>
                </a>
              </div>
            ))}
        </div>
      )}
    </>
  );
}
