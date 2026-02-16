import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Users Page</h1>

      <div className="mt-4 flex gap-4">
        <Link to="/users/1" className="text-blue-500">
          User 1
        </Link>
        <Link to="/users/2" className="text-blue-500">
          User 2
        </Link>
      </div>
    </div>
  );
};

export default Users;
