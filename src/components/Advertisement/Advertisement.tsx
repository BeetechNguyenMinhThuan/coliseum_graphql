export const Advertisement = ({ children }: any) => {
  return (
    <section>
      <div className="mb-[30px] mt-[30px] flex gap-20">
        {children?.map((image: String, index: number) => (
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
