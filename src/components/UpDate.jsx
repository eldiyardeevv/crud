import { Button, TextField, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../feature/userDetailSlice";

const UpDate = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState();
  const { users } = useSelector((s) => s.app);
  useEffect(() => {
    if (id && users) {
      const editData = users.filter((el) => el.id === id);
      setUpdateData(editData);
    }
  }, [id, users]);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  console.log("update data", updateData);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/home/read")
    };

    return (
      <Div>
        <form onSubmit={handleUpdate}>
          <h1>UPDATE</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>NAME</label>
            <TextField
              sx={{ width: 500 }}
              name="name"
              value={updateData && updateData?.name}
              onChange={newData}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>EMAIL</label>
            <TextField
              sx={{ width: 500 }}
              value={updateData && updateData?.email}
              name="email"
              onChange={newData}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>AGE</label>
            <TextField
              sx={{ width: 500 }}
              name="age"
              value={updateData && updateData?.age}
              onChange={newData}
            />
          </div>
          <div>
            <div style={{ margin: "20px 0" }}>
              <input
                type="radio"
                name="gender"
                value={"Male"}
                checked={updateData && updateData?.gender === "Male"}
                onChange={newData}
              />
              <label>male</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                checked={updateData && updateData?.gender === "Female"}
                onChange={newData}
                value={"Male"}
              />
              <label>female</label>
            </div>
          </div>
          <div style={{ margin: "20px 0" }}>
            {/* <Link to={"/home/read"}> */}
            <Button type="submit" variant="contained" disableElevation>
              save
            </Button>
            {/* </Link> */}
          </div>
        </form>
      </Div>
    );
  };

export default UpDate;
const Div = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
}));
