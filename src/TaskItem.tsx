import { Box } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import { IconButton, Typography } from "@mui/material";
import mIcon from "./assets/img_1747816091.png";
import eIcon from "./assets/image 1.png";
import { useState } from "react";
import { InputBase } from "@mui/material";

interface TaskItemProps {
  label: string;
}

const TaskItem = ({ label }: TaskItemProps) => {
  const [Editing, sEditing] = useState(false);
  const [Text, sText] = useState(label);
  const [Backuptext, sBackupText] = useState(label);
  const sEditClick = () => {
    if (Editing) {
      sEditing(false);
    } else {
      sBackupText(Text);
      sEditing(true);
    }
  };
  const sCancelClick = () => {
    sText(Backuptext);
    sEditing(false);
  };
  const Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    sText(e.target.value);
  };
  const Keydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sEditing(false);
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
            <button onClick={sCancelClick}>cancel</button>
          </Box>
        ) : (
          <Typography>{Text}</Typography>
        )}
      </Box>
      <Box marginTop={2}>
        <IconButton aria-label="edit" onClick={sEditClick}>
          <img src={eIcon} alt={"edit icon"} style={{ objectFit: "contain" }} />
        </IconButton>
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
