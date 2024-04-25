import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../feature/userDetailSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSabmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user));
    navigate("/home/read");
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <form onSubmit={handleSabmit}>
        <h1>CRETAE</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>NAME</label>
          <TextField sx={{ width: 500 }} name="name" onChange={getUserData} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>EMAIL</label>
          <TextField sx={{ width: 500 }} name="email" onChange={getUserData} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>AGE</label>
          <TextField sx={{ width: 500 }} name="age" onChange={getUserData} />
        </div>
        <div>
          <div style={{ margin: "20px 0" }}>
            <input type="radio" name="gender" value={"Male"} onChange={getUserData} />
            <label>male</label>
          </div>
          <div>
            <input type="radio" name="gender" value={"Male"} onChange={getUserData} />
            <label>female</label>
          </div>
        </div>
        <div style={{ margin: "20px 0" }}>
          <Button type="submit" variant="contained" disableElevation>
           submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Create;
