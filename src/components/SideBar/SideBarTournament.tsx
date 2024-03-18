export function SideBarTournament() {
  return (
    <div className="coli-sidebar flex  flex-col px-4">
      <ul className="">
        <li className=" cursor-pointer border-2 border-white px-4 py-3 hover:rounded-[10px] hover:border-gray-300 hover:bg-color2 ">
          Chi tiết giải đấu
        </li>
        <li className="mt-6 cursor-pointer border-2 border-white px-4 py-3 hover:rounded-[10px] hover:border-gray-300 hover:bg-color2 ">
          Danh sách người tham gia
        </li>
        <li className="mt-6 cursor-pointer border-2 border-white px-4 py-3 hover:rounded-[10px] hover:border-gray-300 hover:bg-color2 ">
          Tourament
        </li>
        <li className="mt-6 cursor-pointer border-2 border-white px-4 py-3 hover:rounded-[10px] hover:border-gray-300 hover:bg-color2 ">
          初心者向けガイ
        </li>
      </ul>
      <img
        className="ads mt-6 h-[168px]"
        src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/10/hinh-nen-den-buon-6.jpg"
        alt=""
      />
      <div className="sate mt-6">
        <h2 className="title border-b-2 py-3 text-xl font-bold">スステージ</h2>
        <ul>
          <li className="mt-6 cursor-pointer border-2 border-white px-4 py-3 hover:rounded-[10px] hover:border-gray-300 hover:bg-color2 ">
            Giai đoạn 1
          </li>
          <li className="mt-6 cursor-pointer border-2 border-white px-4 py-3 hover:rounded-[10px] hover:border-gray-300 hover:bg-color2 ">
            Giai đoạn 1
          </li>
          <li className="mt-6 cursor-pointer border-2 border-white px-4 py-3 hover:rounded-[10px] hover:border-gray-300 hover:bg-color2 ">
            Giai đoạn 1
          </li>
          <li className="mt-6 cursor-pointer border-2 border-white px-4 py-3 hover:rounded-[10px] hover:border-gray-300 hover:bg-color2">
            Giai đoạn 1
          </li>
        </ul>
      </div>

      <div className="new-novels rounded-t-[10px]  border-2 pb-4">
        <div className="title flex justify-between  border-b-2 px-4  py-3">
          <h2 className="text-xl font-bold ">新製品</h2>
          <div>ICON</div>
        </div>

        <div className="">
          <div className="novel-name flex justify-between border-b-2  border-dashed px-4  py-3 ">
            新製品新製品
          </div>
          <div className="novel-name flex justify-between border-b-2  border-dashed px-4  py-3 ">
            新製品新製品
          </div>
          <div className="novel-name flex justify-between border-b-2  border-dashed px-4  py-3 ">
            新製品新製品
          </div>
          <div className="novel-name flex justify-between border-b-2  border-dashed px-4  py-3 ">
            新製品新製品
          </div>
          <div className="novel-name flex justify-between  px-4  pt-3 ">
            新製品新製品
          </div>
        </div>
      </div>


      <div className="udpate-novels rounded-t-[10px]  border-2 pb-4 mt-6">
        <div className="title flex justify-between  border-b-2 px-4  py-3">
          <h2 className="text-xl font-bold ">新製品</h2>
          <div>ICON</div>
        </div>

        <div className="">
          <div className="novel-name flex justify-between border-b-2  border-dashed px-4  py-3 ">
            新製品新製品
          </div>
          <div className="novel-name flex justify-between  px-4  pt-3 ">
            新製品新製品
          </div>
        </div>
      </div>
    </div>
  );
}
