import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import AddUserModal from "../AddUserModal";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    padding: "30px",
  },
  buttonStyle:{
    height:"fit-content",
    alignSelf:"center"
  }
}));

function Header({dataModal,users}) {
  const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({});

    useEffect(()=>{
      dataModal(user)
    },[user])

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleData =(element)=>{
     setUser(element);

    }
  

  return (
    <div className={classes.root}>
      <h1>User Manager ({users.length}) </h1>
      <Button className={classes.buttonStyle} onClick={handleOpen} color="primary" variant="contained">
        Agregar
      </Button>
      <AddUserModal 
      users={users}
      userData={handleData}
       openModal={open}
       closeModal={handleClose} />
    </div>
  );
}
export default Header;
