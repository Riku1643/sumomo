import React, { useState } from "react";
import {
  Modal,
  Box,
  IconButton,
  Button,
  Input,
  InputAdornment,
} from "@mui/material";
import eIcon from "./assets/image 1.png";

interface sModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (text: string) => void;
}

const SModal: React.FC<sModalProps> = ({ open, onClose, onAdd }) => {
  const [text, setText] = useState("");
  const handleAddClick = () => {
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box display="flex" justifyContent="center">
          <IconButton aria-label="message">
            <img src={eIcon} alt="edit Icon" style={{ objectFit: "contain" }} />
          </IconButton>
          <IconButton aria-label="message">
            <img src={eIcon} alt="edit Icon" style={{ objectFit: "contain" }} />
          </IconButton>
          <IconButton aria-label="message">
            <img src={eIcon} alt="edit Icon" style={{ objectFit: "contain" }} />
          </IconButton>
        </Box>

        <Box display="flex" justifyContent="center">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="タイトル"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="edit">
                  <img
                    src={eIcon}
                    alt="edit Icon"
                    style={{ objectFit: "contain" }}
                  />
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="text" onClick={handleAddClick}>
            追加
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SModal;
