import { Box } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import { IconButton, Typography } from "@mui/material";
import mIcon from "./assets/img_1747816091.png";
import eIcon from "./assets/image 1.png";

interface TaskItemProps {
  label: string;
}

const TaskItem = ({ label }: TaskItemProps) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
      <Box position="relative" top={2}>
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
      <Box sx={{ width: 275 }}>
        <Typography>{label}</Typography>
      </Box>
      <Box>
        <IconButton aria-label="edit">
          <img src={eIcon} alt="edit icon" style={{ objectFit: "contain" }} />
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
