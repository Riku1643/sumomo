import StarIcon from "@mui/icons-material/Star";
import { Box, Typography } from "@mui/material";

const StarExample = () => {
  return (
    <Box display="flex" alignItems="center" gap={1} p={2}>
      <StarIcon style={{ color: "pink", fontSize: 25 }} />
      <Typography variant="h6"></Typography>
    </Box>
  );
};

export default StarExample;
