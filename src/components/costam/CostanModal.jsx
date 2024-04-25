import React from "react";
import "./CostanModal.css";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
const CostanModal = ({ id, setModal, modal }) => {
  const count = useSelector((s) => s.app.users);
  const alldata = count.filter((el) => el.id === id);
  return (
    <>
      <div className="modalBlock">
        <div className="modalBlockTwo">
          <div className="modalBlockThree">
            <Button size="small" color="primary" onClick={() => setModal(false)}>close</Button>
            <h3>{alldata[0].name}</h3>
            <h3>{alldata[0].email}</h3>
            <h3>{alldata[0].age}</h3>
            <h3>{alldata[0].gender}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CostanModal;
