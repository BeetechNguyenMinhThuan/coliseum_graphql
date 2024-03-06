import { NOTIFYCATION } from "@/graphql-client/content/queries";
import { useQuery } from "@apollo/client";
import { LoadingSpiner } from "../Loading/LoadingSpiner";

export default function NotifyEnvents() {
  const { loading, data, error } = useQuery(NOTIFYCATION, {
    variables: {
      type: 2,
    },
  });
  console.log(data?.contentsNoti);

  return (
    <>
      {loading ? (
        <LoadingSpiner />
      ) : (
        <div>
          {data?.contentsNoti.map((banner, index) => (
            <a key={index} href="" className="h-[190px] w-[880px]">
              <img src={banner?.content_url} alt="" />
            </a>
          ))}
        </div>
      )}
    </>
  );
}
