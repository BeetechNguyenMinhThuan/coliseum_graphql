import { SideBarTournament } from "@/components/SideBar/SideBarTournament";
import { Pagination } from "@/components/pagination/Pagination";
import { GET_ROUNDS } from "@/graphql-client/round/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

function Test4() {
  const [filter, setFilter] = useState({
    searchValue: "",
    isColiseum: false,
    isLeageMatch: false,
  });
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setFilter({ ...filter, searchValue: event.target.value });
  };
  const handleSearch = () => {
    setSearch(filter.searchValue);
  };
  const handleRemoveSearch = () => {
    setSearch("");
    setFilter({ ...filter, searchValue: "" });
  };
  const { loading, data, error, refetch } = useQuery(GET_ROUNDS, {
    variables: { page: 1, limit: 100, filter: filter },
  });

  return (
    <>
      <SideBarTournament />
      <div className="content flex-1">
        <div className="flex gap-x-3">
          <input
            className="block border-2"
            type="text"
            value={filter.searchValue}
            onChange={handleChange}
            placeholder="Search users..."
          />
          <button className="bg-deep-orange-600 px-3" onClick={handleSearch}>
            Search
          </button>
          {search && (
            <button onClick={handleRemoveSearch} className="bg-amber-300 px-3">
              Xoá
            </button>
          )}
        </div>
        <div className="">
          <div className="">
            <input
              type="checkbox"
              onChange={() =>
                setFilter({ ...filter, isColiseum: !filter.isColiseum })
              }
            />
            <label htmlFor="">Coliseum</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={() =>
                setFilter({ ...filter, isLeageMatch: !filter.isLeageMatch })
              }
            />
            <label htmlFor="">Leage Match</label>
          </div>
        </div>
        {loading && <p>Loading...</p>}
        <RoundList
          refetch={refetch}
          data={data}
          filter={filter}
          search={search}
        />
      </div>
    </>
  );
}

function RoundList({ filter, search, data, refetch }) {
  const [currentPage, setCurrentPage] = useState(1);

  // const { loading, data, error, refetch } = useQuery(GET_ROUNDS, {
  //   variables: { page: 1, limit: 100, search: search },
  // });

  const handlePageChange = async (newPage: number) => {
    // setCurrentPage(newPage);
    await refetch({ page: newPage, limit: 100 });
  };
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  const isDataSearchRound = data?.getRoundsPaginate?.rounds?.length === 0;

  return isDataSearchRound ? (
    <div>Khong co data</div>
  ) : (
    <div>
      {data?.getRoundsPaginate?.rounds?.map((round) => (
        <div key={round?.round_id}>
          <p>{round?.round_name}</p>
        </div>
      ))}
      <Pagination
        totalPages={data?.getRoundsPaginate?.totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Test4;
