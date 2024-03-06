import { SLIDE_BANER } from "@/graphql-client/content/queries";
import { useQuery } from "@apollo/client";
import { LoadingSpiner } from "../Loading/LoadingSpiner";

export default function SlideBanner() {
  const { loading, data, error } = useQuery(SLIDE_BANER, {
    variables: {
      type: 1,
    },
  });

  console.log(data?.contentsBanner);

  return (
    <>
      {loading ? (
        <LoadingSpiner />
      ) : (
        <div>
          {data?.contentsBanner.map((banner, index) => (
            <a key={index} href="" className="inline-block h-[200px] w-[610px]">
              <img
                className="h-full w-full object-cover"
                src={banner?.content_url ?? ""}
                alt=""
              />
            </a>
          ))}
        </div>
      )}
    </>
  );
}
