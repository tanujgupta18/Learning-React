import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();

  return (
    <div className="mt-6">
      <h1 className="text-xl font-bold">User Detail Page</h1>
      <p>User ID: {id}</p>
    </div>
  );
};

export default UserDetail;
