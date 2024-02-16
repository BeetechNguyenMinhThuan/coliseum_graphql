export default function Matchup({ result }: any) {

  return (
    <div className="mt-[20px]">
      <div className="tournament relative flex w-full gap-[220px]">
        <div className="relative sm:min-w-[500px]">
          <div
            className={`player-one relative border-2 ${result.a.vote > result.b.vote ? "after:border-red-600" : ""}`}
          >
            {result.a.vote > result.b.vote && (
              <span className=" absolute right-[-175px] -translate-y-1/2 translate-x-full transform bg-white px-1 text-red-600">
                {result.a.vote} %
              </span>
            )}
            <span>{result.a.name}</span>
          </div>
          <div
            className={`player-two border-b-2 border-l-2 border-r-2 ${result.a < result.b ? "after:border-red-600" : ""}`}
          >
            {result.a.vote < result.b.vote && (
              <span className="absolute right-[-175px] top-[80px] -translate-y-1/2 translate-x-full transform bg-white px-1 text-red-600">
                {result.b.vote} %
              </span>
            )}
            <span>{result.a.name}</span>
          </div>
        </div>
        {/* <div className="progressbar-one border-t-red-700"></div> */}
        <div className="ml-9 flex min-w-[300px] items-center">
          <div
            className={`final-result relative w-full border-2 ${result ? "before:border-red-600" : ""}`}
          >
            {result.a.vote > result.b.vote ? result.a.name : result.b.name}
          </div>
        </div>
      </div>
    </div>

    
  );
}
