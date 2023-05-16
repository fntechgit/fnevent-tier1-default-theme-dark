import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Drawer, { drawerClasses } from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import Avatar from "@mui/material/Avatar";
import Link from "@openeventkit/event-site/src/components/Link";
import ProfilePopupComponent from "@openeventkit/event-site/src/components/ProfilePopupComponent";
import LogoutButton from "../LogoutButton";

const MenuIcon = () =>
  <SvgIcon viewBox="0 0 17 14">
    <svg fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1H16" stroke="white" stroke-linecap="square" stroke-linejoin="round"/>
      <path d="M1 7H16" stroke="white" stroke-linecap="square" stroke-linejoin="round"/>
      <path d="M1 13H16" stroke="white" stroke-linecap="square" stroke-linejoin="round"/>
    </svg>
  </SvgIcon>;

const CloseIcon = () =>
  <SvgIcon viewBox="0 0 14 14">
    <svg fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 1L1 13" stroke="white" stroke-linecap="square" stroke-linejoin="round"/>
      <path d="M1 1L13 13" stroke="white" stroke-linecap="square" stroke-linejoin="round"/>
    </svg>
  </SvgIcon>;

const NavbarTemplate = ({
  data: pages,
  summit,
  isLoggedUser,
  idpLoading,
  idpProfile,
  updateProfile,
  updateProfilePicture,
  defaultPath,
  logo
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);
  const handleOpenProfile = (event) => {
    setAnchorElProfile(event.currentTarget);
  };
  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };
  const toggleMenu = (open) => (event) => {
    setMenuOpen(open);
  };
  return (
    <>
    <AppBar
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        position: {
          xs: "sticky",
          md: "relative"
        }
      }}
    >
      <Container
        sx={{
          px: {
            xs: 2,
            md: 3,
            lg: 4
          }
        }}
        maxWidth="xl"
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: {
              xs: 46,
              md: 64,
              lg: 84,
              xl: 100
            }
          }}
        >
          {logo &&   
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex"
              },
            }}
          >
            <Link
              to={isLoggedUser ? defaultPath : "/"}
            >
              <Box
                sx={{
                  img: {
                    height: {
                      xs: 14,
                      md: 16,
                      lg: 20
                    },
                    width: {
                      xs: 62.91,
                      md: 71.89,
                      lg: 89.87
                    }
                  }
                }}
              >
                <img
                  src={logo}
                  alt={summit.name}
                />
              </Box>
            </Link>
          </Box>
          }
          <Box
            sx={{
              flexGrow: 0,
              display: {
                xs: "flex",
                md: "none"
              }
            }}
          >
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-navbar"
              aria-haspopup="true"
              onClick={toggleMenu(!menuOpen)}
              sx={{
                p: 0,
                borderRadius: 0,
                ".MuiTouchRipple-ripple .MuiTouchRipple-child": {
                  borderRadius: 0,
                }
              }}
            >
              { menuOpen ?
              <CloseIcon />
              :
              <MenuIcon />
              }
            </IconButton>
          </Box>
          <Stack
            direction="row"
            spacing={{
              md: 4
            }}
            sx={{
              flexGrow: 0,
              display: {
                xs: "none",
                md: "flex"
              }
            }}
          >
            {pages.map((page) => (
              <Link key={page.title} to={page.link}>
                <Typography
                  key={page.title}
                  sx={{
                    color: "white",
                    display: "block",
                  }}
                  variant="caption2"
                >
                  {page.title}
                </Typography>
              </Link>
            ))}
          </Stack>
          {isLoggedUser &&
          <Box
            sx={{
              flexGrow: 0,
              display: {
                xs: "none",
                md: "flex"
              },
              ml: 4
            }}
          >
            <Tooltip
              title="Edit Profile"
            >
              <IconButton
                onClick={handleOpenProfile}
                sx={{
                  p: 0
                }}
              >
                <Avatar
                  alt={idpProfile?.name}
                  src={idpProfile?.picture}
                />
              </IconButton>
            </Tooltip>
            <ProfilePopupComponent
              userProfile={idpProfile}
              showProfile={Boolean(anchorElProfile)}
              idpLoading={idpLoading}
              changePicture={updateProfilePicture}
              changeProfile={updateProfile}
              closePopup={handleCloseProfile}
            />
          </Box>
          }
          {isLoggedUser &&
          <Box
            sx={{
              flexGrow: 0,
              display: {
                xs: "none",
                md: "flex"
              },
              ml: 1
            }}
          >
            <Tooltip
              title="Logout"
            >
              <LogoutButton />
            </Tooltip>
          </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
    <Drawer
      anchor="top"
      open={menuOpen}
      onClick={toggleMenu(false)}
      ModalProps={{
        // Better open performance on mobile.
        keepMounted: true
      }}
      sx={{
        display: {
          xs: "flex",
          md: "none"
        },
        flexShrink: 0,
        [`& .${drawerClasses.paper}`]: {
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          backgroundColor: "black"
        }
      }}
    >
      <Toolbar
        style={{
          minHeight: 46
        }}
      />
      <Stack
        direction="column"
        spacing={4}
        sx={{
          py: 6,
          pl: 2
        }}
      >
        {pages.map((page) => (
        <Link
          to={page.link}
          style={{
            width: "fit-content"
          }}
        >
          <Typography
            sx={{
              color: "white",
              display: "block",
            }}
            variant="caption1"
          >
            {page.title}
          </Typography>
        </Link>
        ))}
      </Stack>
    </Drawer>
    </>
  );
}
export default NavbarTemplate;
