import React from "react";
import Drawer from "@mui/material/Drawer";
import MenuItems from "./MenuItems";
import Menu from "@/components/UI/Sidebar/Menu";

function DesktopDrawer({ drawerWidth }) {
  return (
    <Drawer
      variant="permanent"
      classes={{ paper: " bg-red" }}
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
      open
    >
      <div className="flex flex-col w-full h-screen">
        <Menu />
      </div>
      {/* List */}
    </Drawer>
  );
}

export default DesktopDrawer;
