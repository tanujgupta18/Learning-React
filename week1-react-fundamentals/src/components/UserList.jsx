const users = ["Tanuj", "Aman", "Rahul"];

const UserList = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Users</h2>

      <ul className="list-disc pl-5">
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
