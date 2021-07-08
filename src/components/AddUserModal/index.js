import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height:"500px",
    width:"400px",
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  submitButton: {
    width: "-webkit-fill-available",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  formFieds:{
    width:"-webkit-fill-available"
  }
}));

function AddUserModal({ openModal, closeModal, userData }) {
  const classes = useStyles();

  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    email: "",
    active: false,
    photoprofile: "",
  });

  const handleChange = (e) => {
    const addNewUser = { ...newUser };

    if (e.target.name === "active")     {
      let mark = e.target.checked;
      addNewUser[e.target.name] = mark;
    }
    else{
      addNewUser[e.target.name] = e.target.value;
    }
    
    e.preventDefault();
    setNewUser(addNewUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUser, "OnSubmit");
    userData(newUser);
  };

  return (
    <div>
      <Dialog
        open={openModal}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <DialogContent>
          <div className={classes.root}>
            <form onSubmit={handleSubmit}>
              <h1>Add new user</h1>

              <Grid >
                <TextField
                className={classes.formFieds}
                  id="name"
                  label="Name"
                  name="name"
                  value={newUser.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid>
                <TextField
                className={classes.formFieds}
                  id="lastName"
                  label="Last Name"
                  name="lastname"
                  value={newUser.lastname}
                  onChange={handleChange}
                />
              </Grid>
              <Grid>
                <TextField
                className={classes.formFieds}
                  id="email"
                  label="Email"
                  name="email"
                  value={newUser.email}
                  onChange={handleChange}
                />
              </Grid>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Active"
                name="active"
                value={newUser.active}
                onChange={handleChange}
              />
              <Grid>
                <TextField
                className={classes.formFieds}
                  id="profile-picture"
                  label="Profile Picture"
                  name="photoprofile"
                  value={newUser.photoprofile}
                  onChange={handleChange}
                />
              </Grid>
              <Grid>
                <Button className={classes.submitButton} color="primary" variant="contained" type="submit">
                  Agregar
                </Button>
              </Grid>
            </form>
           </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddUserModal;
