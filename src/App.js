import "./App.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Person2Icon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import { Typography } from "@mui/material";
import ItemComponent from "./components/ItemComponent";

const App = () => {
  const DrawerList = (
    <Box sx={{ width: 220 }} role="presentation">
      <List>
        <ListItem
          key={"My Moves"}
          disablePadding
          sx={{ borderLeft: "3px solid orangered" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <LocalShippingIcon />
            </ListItemIcon>
            <ListItemText primary={"MY MOVES"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"MY PROFILE"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person2Icon />
            </ListItemIcon>
            <ListItemText primary={"MY PROFILE"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"GET QUOTE"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <RequestQuoteIcon />
            </ListItemIcon>
            <ListItemText primary={"GET QUOTE"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"LOGOUT"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"LOGOUT"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: 220 }}>
        <Drawer
          sx={{
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 220,
              boxSizing: "border-box",
              height: "100vh",
              overflow: "hidden",
            },
          }}
          variant="permanent"
          open
          anchor="left"
        >
          {DrawerList}
        </Drawer>
      </Box>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          My Moves
        </Typography>
        <ItemComponent />
      </Box>
    </Box>
  );
};

export default App;
