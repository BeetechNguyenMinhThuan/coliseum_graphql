import { GET_DETAIL_USER } from "@/graphql-client/user/queries";
import { useLazyQuery, useQuery } from "@apollo/client";

function DetailUser({ id }) {
  console.log(id);
  const { loading, error, data } = useQuery(GET_DETAIL_USER, {
    variables: { user_id: id },
  });

  if (loading) return "Đang tải...";
  if (error) return "Có lỗi xảy ra.";

  console.log(data?.getDetailUser);

  return (
    <div>
      <span>{data?.getDetailUser.user_id}</span> <br />
      <span>{data?.getDetailUser.name}</span> <br />
      <span>{data?.getDetailUser.user_uuid}</span>
    </div>
  );
}

export default DetailUser;
