import { Box } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import { IconButton, Typography } from "@mui/material";
import mIcon from "./assets/img_1747816091.png";
import eIcon from "./assets/image 1.png";
import sIcon from "./assets/img_1747816091.png";
import { useState } from "react";
import { InputBase } from "@mui/material";

interface TaskItemProps {
  label: string;
}

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
  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
      <Box position="relative" marginTop={2}>
        <Checkbox
          slotProps={{
            input: { "aria-label": "Checkbox demo" },
          }}
          defaultChecked
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
          <Box>
            <Typography>{Text}</Typography>
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
  );
};

export default TaskItem;
