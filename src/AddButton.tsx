import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  onClick: () => void;
}

const CircleAddButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
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
