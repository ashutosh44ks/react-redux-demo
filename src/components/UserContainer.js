import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux";
import { useEffect } from "react";

const UserContainer = () => {
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(users);
  return (
    <div>
      <h2>user list -</h2>
      <div>
        {users.loading ? (
          <div>{users.error}</div>
        ) : (
          users.data.map((user) => <div key={user.id} > {user.name} </div>)
        )}
      </div>
    </div>
  );
};

export default UserContainer;
