import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

function Header() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#FFCBCB" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            component="div"
            sx={{ flexGrow: 1 }}
            display={"flex"}
            justifyContent={"center"}
            fontSize="33px"
            fontFamily={"Nanum Gothic Coding"}
          >
            やっちゃダメリスト
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
