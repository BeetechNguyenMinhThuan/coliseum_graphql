import { useLazyQuery, useQuery, useReactiveVar } from "@apollo/client";
import { spaceshipPassengerVar } from "@/main.tsx";
import { GET_USER_BASE } from "@/graphql-client/round/queries.ts";

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
        <SpaceShipPassenger />
      </div>
      <div className="Player">
        <h2>Player</h2>
        <div className="flex gap-x-6">
          {data?.getUsers?.map((user) => <UserCard user={user} />)}
        </div>
      </div>
    </div>
  );
}

function UserCard({ user }) {
  const handleSpaceship = () => {
    const currentPassengers = spaceshipPassengerVar();
    spaceshipPassengerVar(
      user.isSpaceShipPassenger
        ? currentPassengers.filter((userId) => userId != user.user_id)
        : [...currentPassengers, user.user_id],
    );
  };
  return (
    <div className="Player">
      <h2>{user.name}</h2>
      <button className="btn bg-teal-300" onClick={handleSpaceship}>
        {user.isSpaceShipPassenger ? "Remove" : "Add"} spaceship
      </button>
    </div>
  );
}

function SpaceShipPassenger() {
  const { loading, error, data } = useQuery(GET_USER_BASE);
  const passengers = useReactiveVar(spaceshipPassengerVar);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      {passengers.map((passenger) => {
        const user = data?.getUsers?.find((user) => user?.user_id == passenger);
        return (
          <img
            className="h-20 w-20 rounded-full bg-blue-500 object-cover"
            src={user?.s3_url}
            alt=""
          />
        );
      })}
    </div>
  );
}

export default Test3;
