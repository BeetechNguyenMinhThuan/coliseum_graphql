import { GET_USER_BASE } from "@/graphql-client/user/queries";
import { useQuery } from "@apollo/client";

function Test6() {
    const { loading, error, data } = useQuery(GET_USER_BASE);

  return <div>Hello Sir</div>;
}

export default Test6;
