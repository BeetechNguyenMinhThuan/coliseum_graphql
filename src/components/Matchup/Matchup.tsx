 export default function Matchup({result}: any) {
  console.log(result);
  
  return (
    <div className="mt-[20px]">
        <div className="w-full tournament flex relative gap-[220px]">
            <div className="sm:min-w-[500px] relative">
                <div className="border-2 first:border-b-0">選歳ーだ平申ゅゆ</div>
                <div className={`border-2 player-one ${result.a > result.b ? "after:border-red-600" : ""}`}>
                  {result.a > result.b && (
                    <span className="top-[30px] absolute right-[-175px] transform translate-x-full -translate-y-1/2 text-red-600 bg-white px-1">
                      {result.a} %
                    </span>
                  )}
                  選歳ーだ平申ゅゆ
                </div>
                <div className={`border-b-2 border-r-2 border-l-2 player-two ${result.a < result.b ? "after:border-red-600" : ""}`}>
                {result.a < result.b && (
                  <span className="absolute right-[-175px] top-[80px] transform translate-x-full -translate-y-1/2 text-red-600 bg-white px-1">
                    {result.b} %
                  </span>
                )}
                  選歳ーだ平申ゅゆ
                </div>
            </div>
          {/* <div className="progressbar-one border-t-red-700"></div> */}
          <div className="min-w-[300px] ml-9 mt-[39px]">
              <div className={`border-2 final-result relative ${result ? "before:border-red-600" : ""}`}>選歳ーだ平申ゅゆ</div>
          </div>
        </div>
    </div>
  )
}
