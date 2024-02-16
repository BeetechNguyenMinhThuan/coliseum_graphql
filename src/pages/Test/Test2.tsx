import { NetworkStatus, useLazyQuery, useQuery } from "@apollo/client";
import {
  GET_ROUNDS_BASE,
  GET_USER_BASE,
} from "@/graphql-client/round/queries.ts";

function Test2(props) {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_ROUNDS_BASE,
    {
      pollInterval: 1000,
      fetchPolicy:'network-only'
      // notifyOnNetworkStatusChange: true,
    },
  );

  const [getUser, { loading: user_loading, error: user_error, data: users }] =
    useLazyQuery(GET_USER_BASE);

  if (networkStatus === NetworkStatus.refetch) return "Refetching!";
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <div>
        {data?.rounds?.map(({ round_id, round_name }) => (
          <div key={round_id}>
            <h3>{round_name}</h3>
          </div>
        ))}
      </div>
      <button onClick={() => refetch()}>Refetch Round!</button>
      <button onClick={() => getUser()}>Click me!</button>
      <div className="">
        {users?.getUsers && <h2>{users?.getUsers[0]?.name}</h2>}
      </div>
    </>
  );
}

export default Test2;
