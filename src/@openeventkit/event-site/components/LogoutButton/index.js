import * as React from "react";
import { navigate } from "gatsby";
import { triggerOnInitLogout } from "@openeventkit/event-site/src/utils/customEvents";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";

const LogoutButton = () => {
  const onClickLogout = (event) => {
    triggerOnInitLogout();
    navigate("/auth/logout", {
      state: {
        backUrl: window.location.pathname
      }
    });
  };
  return (
    <IconButton
      aria-label="logout"
      onClick={onClickLogout}
    >
      <LogoutIcon 
        sx={{
          color: "white",
          fontSize: {
            xs: 18,
            lg: 19
          }
        }}
      />
    </IconButton>
  );
};

export default LogoutButton;
