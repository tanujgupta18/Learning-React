const User = ({ user }) => {
  const {
    avatar_url,
    name,
    login,
    followers,
    following,
    public_repos,
    created_at,
  } = user;

  const createdDate = new Date(created_at);
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
      <div className="flex justify-center">
        <img
          src={avatar_url}
          alt="User"
          className="w-32 h-32 rounded-full border-4 border-gray-300"
        />
      </div>
      <div className="text-center">
        <a
          href={`https://github.com/${login}`}
          className="text-2xl font-semibold text-blue-600 hover:underline"
        >
          {name || login}
        </a>
        <p className="text-gray-500 text-sm mt-2">
          Joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="text-center">
          <p className="text-lg font-medium">Public Repos</p>
          <p className="text-xl">{public_repos}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium">Followers</p>
          <p className="text-xl">{followers}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium">Following</p>
          <p className="text-xl">{following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
