import { GET_USER_BASE } from "@/graphql-client/user/queries";
import { useLazyQuery, useQuery } from "@apollo/client";

function Test3(props) {
  const { loading, error, data } = useQuery(GET_USER_BASE);
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error : {error.message}</p>;
  }
  return (
    <div>
      <div>
        <h2>Space List</h2>
      </div>
      <div className="Player">
        <h2>Player</h2>
        <div className="flex gap-x-6"></div>
      </div>
    </div>
  );
}

export default Test3;
