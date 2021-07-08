import UserRow from "../UserRow";

function UserList({users, onDelete, onActivateUser,onDeactivateUser}) {
  console.log(users, "props in userList")

  return (
    <div>
      {users.map((user,id) => (
        <UserRow key={id} id={users.indexOf(user)} user={user} onDelete={onDelete} onActivateUser={onActivateUser} onDeactivateUser={onDeactivateUser}/>
      ))}
    </div>
  );
}

export default UserList;
