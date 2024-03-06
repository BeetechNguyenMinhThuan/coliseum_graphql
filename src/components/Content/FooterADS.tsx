import { ADVERTISEMENT } from "@/graphql-client/content/queries";
import { useQuery } from "@apollo/client";
import { LoadingSpiner } from "../Loading/LoadingSpiner";

export default function FooterADS() {
  const { loading, data, error } = useQuery(ADVERTISEMENT, {
    variables: {
      type: 5,
    },
  });


  return (
    <>
      {loading ? (
        <LoadingSpiner />
      ) : (
        <div>
          {data?.contentsAdvertisement.map((ads, index) => (
            <a key={index} href="" className="h-[90px] w-[250px] inline-block">
              <img className="h-full w-full " src={ads?.content_url} alt="" />
            </a>
          ))}
        </div>
      )}
    </>
  );
}
