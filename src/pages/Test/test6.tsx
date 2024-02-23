import { GET_USER_BASE } from "@/graphql-client/user/queries";
import { useLazyQuery } from "@apollo/client";
import DetailUser from "./detailUser";
import { useState } from "react";

function Test6() {
  const [getUsers, { loading, error, data }] = useLazyQuery(GET_USER_BASE);
  const [id, setId] = useState();

  if (loading) return "Đang tải...";
  if (error) return "Có lỗi xảy ra.";
  const GetDetailUser = (userId) => {
    setId(userId);
  };
  return (
    <div className="flex">
      <div>
        <button onClick={getUsers}>Hiển thị</button>
        {data?.getUsers.map((user, index) => (
          <div onClick={() => GetDetailUser(user.user_id)} key={user.user_id}>
            {user.name}
          </div>
        ))}
      </div>
      <div className="mx-6">{id && <DetailUser id={id} />}</div>
    </div>
  );
}

export default Test6;
