import classNames from "@/utils/classNames";

interface AdvertisementProps {
  advertisement: string[];
  className?: string;
}
export const Advertisement = (props: AdvertisementProps) => {
  const { advertisement, className = "" } = props;
  return (
    <section>
      <div className={classNames("flex gap-7", className)}>
        {advertisement?.map((image: string, index: number) => (
          <div key={index}>
            <img
              className="image-ads"
              src={`assets/advertisement/${image}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
};
