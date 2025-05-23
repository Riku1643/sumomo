import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CircleAddButton: React.FC = () => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#FFCBCB",
        position: "absolute",
        right: 30,
        bottom: 0,
        borderRadius: "50%",
        width: 70,
        height: 70,
      }}
    >
      <AddIcon />
    </Button>
  );
};

export default CircleAddButton;
