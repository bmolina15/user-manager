import { Grid,Paper, Avatar } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "20px",
  },
  paper: {
    display: "flex",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize: "15px",
    width:"-webkit-fill-available"
  },
  greenborder:{
    border:"5px solid green"
  },
  redborder:{
    border:"5px solid red"
  },
  userButtons:{
    border: "none",
    background:"none",
    cursor:"pointer"
  }
}));

function UserRow({user,onDelete,onActivateUser,onDeactivateUser,id}) {
  console.log(id,"id")

    // const handleDeactivate=() =>{
    //     const disableUser ={
    //       ...users,
    //       active:"false"
    //     }
    //     setUsers(disableUser)
    //   }

  const classes = useStyles();

  //const user = props.user;
  console.log(user, "user");
 
  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Avatar alt="User photo" src={user.photoprofile} className={user.active===true?classes.greenborder:classes.redborder} />
            <div className={classes.paper}>Name {user.name} </div>
            <div className={classes.paper}>Last Name {user.lastname} </div>
            <div className={classes.paper}>Email {user.email} </div>
            <div className={classes.paper}> 
            <button className={classes.userButtons} onClick={()=> onDeactivateUser(id)} ><CloseIcon></CloseIcon></button>
            <button className={classes.userButtons} onClick={()=>onActivateUser(id)}><CheckIcon></CheckIcon></button>
            <button className={classes.userButtons} onClick={()=>onDelete(id)}><DeleteIcon></DeleteIcon></button>
            </div>
            
            
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default UserRow;
