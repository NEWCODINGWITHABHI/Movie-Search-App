import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import style from "./style.css";
import { Link } from 'react-router-dom';
function MobileDrawer(){
    const [open, setOpen] = React.useState(false);
    return (
      <div className="drawer-wrapper">
        <MenuRoundedIcon
          className="menu"
          style={{
            fontSize: "40px",
            color: "white",
            backgroundColor: "#00008B",borderColor:"transparent"
          }}
          onClick={() => setOpen(true)}
        />
        <Drawer
          anchor={"left"}
          open={open}
          onClose={() => setOpen(false)}
          style={{ backgroundColor: "" }}
        >
          <div className="links-all-container">
            <Link to="/">
              <p className="">Home </p>
            </Link>
            <Link to="/tvseries">
              <p className="">TV Shows</p>
            </Link>
            <Link to="/movies">
              <p className={style.draweLinks}>Movies</p>
            </Link>
          </div>
        </Drawer>
      </div>
    );
}

export default MobileDrawer;