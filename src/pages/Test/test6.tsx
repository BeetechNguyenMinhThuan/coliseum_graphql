import { GET_USER_BASE } from "@/graphql-client/user/queries";
import { useLazyQuery } from "@apollo/client";

function Test6() {
  const [getUsers, { loading, error, data }] = useLazyQuery(GET_USER_BASE);

  if (loading) return "Đang tải...";
  if (error) return "Có lỗi xảy ra.";

  return (
    <div>
      <button onClick={getUsers}>Hiển thị</button>
      {data?.getUsers.map((user, index) => (
        <div key={user.id}>{user.name}</div>
      ))}   
    </div>
  );
}

export default Test6;
