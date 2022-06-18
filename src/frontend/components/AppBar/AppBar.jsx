import { Menu } from "@mui/icons-material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { SearchBox } from "../index";
import {  useNavigate } from "react-router-dom";

const MyAppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const AppBar = ({ open, handleDrawerClose, handleDrawerOpen }) => {
  const navigate = useNavigate();
  const handleLoginBtnClick = () => navigate("/login");

  return (
    <MyAppBar position="fixed">
      <Box sx={{ display: "flex" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 2,
            }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            GameTube
          </Typography>
        </Toolbar>
        <SearchBox />

        <Box
          sx={{
            marginLeft: "auto",
            my: 1.5,
            mr: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "secondary.main",
              color: "#363636",
              ":hover": { backgroundColor: "secondary.light" },
            }}
            onClick={handleLoginBtnClick}
          >
            Login
          </Button>
        </Box>
      </Box>
    </MyAppBar>
  );
};

export { AppBar };
