import React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import { IconButton, Modal, Typography } from "@mui/material";
import mIcon from "./assets/img_1747816091.png";
import eIcon from "./assets/image 1.png";
import sIcon from "./assets/img_1747816091.png";
import { useState } from "react";
import { InputBase } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface TaskItemProps {
  label: string;
}

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #FFCBCB",
  boxShadow: 24,
  p: 4,
};

const TaskItem = ({ label }: TaskItemProps) => {
  const [Editing, setEditing] = useState(false);
  const [Text, setText] = useState(label);
  const [Backuptext, setBackupText] = useState(label);
  const setEditClick = () => {
    if (Editing) {
      setEditing(false);
    } else {
      setBackupText(Text);
      setEditing(true);
    }
  };
  const setCancelClick = () => {
    setText(Backuptext);
    setEditing(false);
  };
  const Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const Keydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setEditing(false);
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <img
            src="./img/おめでとう.png"
            style={{ width: "100%", maxHeight: "300px", objectFit: "contain" }}
          />
        </Box>
      </Modal>
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <Box position="relative" marginTop={2}>
          <Checkbox
            onChange={handleCheckboxChange}
            slotProps={{
              input: { "aria-label": "Checkbox demo" },
            }}
            sx={{
              color: "#ffab91",
              "&.Mui-checked": {
                color: "#ffab91",
              },
            }}
          />
        </Box>
        <Box sx={{ width: 275 }} marginTop={2}>
          {Editing ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <InputBase
                value={Text}
                onChange={Change}
                onKeyDown={Keydown}
                autoFocus
                placeholder="タスクを入力"
              />
              <button onClick={setCancelClick}>cancel</button>
            </Box>
          ) : (
            <Box display="flex" alignItems="center" gap={1}>
              <Typography>{Text}</Typography>
              <StarIcon sx={{ color: "pink" }} />
            </Box>
          )}
        </Box>
        <Box marginTop={2}>
          {Editing ? (
            <button onClick={() => setEditing(false)}>OK</button>
          ) : (
            <IconButton aria-label="edit" onClick={setEditClick}>
              <img
                src={Editing ? sIcon : eIcon}
                alt={Editing ? sIcon : eIcon}
                style={{ objectFit: "contain" }}
              />
            </IconButton>
          )}
        </Box>
        <Box marginTop={2}>
          <IconButton aria-label="message">
            <img
              src={mIcon}
              alt="message icon"
              style={{ objectFit: "contain" }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default TaskItem;
