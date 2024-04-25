import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Box, Button, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../feature/userDetailSlice";
import CostanModal from "./costam/CostanModal";
import { Link } from "react-router-dom";

export default function Read() {
  const dispatch = useDispatch();
  const { isLoading, users, searchData } = useSelector((s) => s.app);
  const [id, setId] = useState();
  const [modal, setModal] = useState(false);
  useEffect(() => {
    dispatch(showUser());
  }, []);
  if (isLoading) {
    return (
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading
      </h1>
    );
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <BoxBlock>
        {modal && <CostanModal id={id} modal={modal} setModal={setModal} />}
        <h1>All Data</h1>
        <Card
          sx={{
            maxWidth: "350",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {users &&
            users
              .filter((el) => {
                if (Array.isArray(searchData) && searchData.length === 0) {
                  return el;
                } else {
                  returnel.name
                    .toLowerCase()
                    .includes(
                      searchData && typeof searchData === "string"
                        ? searchData.toUpperCase()
                        : ""
                    );
                }
              })

              .map((el, id) => (
                <StyledDiv key={id}>
                  <div style={{ display: "flex" }}>
                    <h2 style={{ margin: "0 40px" }}>{el.name}</h2>
                    <h2 style={{ margin: "0 40px" }}>{el.email}</h2>
                    <h2 style={{ margin: "0 40px" }}>{el.age}</h2>
                  </div>
                  <div>
                    <Button
                      onClick={() => [setId(el.id), setModal(true)]}
                      size="small"
                      color="primary"
                    >
                      view
                    </Button>
                    <Link to={`/home/edit/${el.id}`}>edit</Link>
                    <Button
                      onClick={() => dispatch(deleteUser(el.id))}
                      size="small"
                      color="primary"
                    >
                      delete
                    </Button>
                  </div>
                </StyledDiv>
              ))}
        </Card>
      </BoxBlock>
    </Box>
  );
}
const StyledDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  margin: "30px 0",
  alignItems: "center",
}));
const BoxBlock = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  ".css-1owngs7-MuiPaper-root-MuiCard-root ": {
    maxWidth: 600,
  },
}));
