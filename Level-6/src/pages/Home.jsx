import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl font-bold">Home Page</h1>

      <button
        onClick={() => navigate("/users")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Go to Users
      </button>
    </div>
  );
};

export default Home;
