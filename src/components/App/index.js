import { useEffect, useState } from "react";
import Header from "../Header";
import UserList from "../UserList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "30px",
  },
  paper: {
    display: "flex",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize: "12px",
  },
}));

function App() {
  const classes = useStyles();
  const userList = [
    {
      name: "brenda",
      lastname: "molina",
      email: "brenda.molina@accenture.com",
      active: true,
      photoprofile: "https://source.unsplash.com/random",
    },
    {
      name: "elizabeth",
      lastname: "medina",
      email: "elizabeth.medina@accenture.com",
      active: false,
      photoprofile: "https://source.unsplash.com/random",
    },
  ];
  const [users, setUsers] = useState(userList);

  useEffect(() => {}, [users]);

  const addUser = (element) => {
    setUsers([...users, element]);
  };

  const deleteUser = (id) => {
    console.log("delete user", id);
    setUsers(users.filter((user) => users.indexOf(user) !== id));
  };

  const activateUser = (id) => {
    console.log("activateUser user", id);
    setUsers(
      users.map((user) => (users.indexOf(user) === id ? { ...user, active: true } : user))
    );
  };

  const deactivateUser = (id) => {
    console.log("deactivate user", id);
    setUsers(
      users.map((user) => (users.indexOf(user) === id ? { ...user, active: false } : user))
    );
  };

  return (
    <div className={classes.root}>
      <Header dataModal={addUser} users={users} />
      <UserList
        users={users}
        onDelete={deleteUser}
        onActivateUser={activateUser}
        onDeactivateUser={deactivateUser}
      />
    </div>
  );
}

export default App;
