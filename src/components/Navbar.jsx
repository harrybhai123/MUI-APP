import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AccountCircle, Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Searchbar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Harry Bhai
        </Typography>
        <AccountCircle sx={{ display: { xs: "block", sm: "none" } }} />
        <Searchbar>
          <InputBase placeholder="Search..." />
        </Searchbar>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: "30", height: "30" }}
            src="https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFtYm9yZ2hpbml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            onClick={(e) => setOpen(true)}
          />
        </Icons>

        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: "30", height: "30" }}
            src="https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFtYm9yZ2hpbml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <Typography variant="span">Harry</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={(e) => setOpen(false)}
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
