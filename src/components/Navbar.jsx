import React, { useState } from "react";
import logo from "../assets/logo.png";

import {
  AppBar,
  Box,
  Button,
  Container,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";
import NotesIcon from "@mui/icons-material/Notes";

const Navbar = () => {
  useMediaQuery("max-width:1200px");
  const [openDrawer, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ width: "240px", fontFamily: " Roboto, sansSerif" }}
    >
      <List>
        <a href="/#" style={{ textDecoration: "none" }}>
          <ListItem
            style={{
              justifyContent: "center",
            }}
          >
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  textTransform: "capitalize",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#ffffff",
                  fontFamily: "Roboto",
                },
              }}
              primary="HOME"
            />
          </ListItem>
        </a>
        <a href="/#SWAP" style={{ textDecoration: "none" }}>
          <ListItem
            style={{
              justifyContent: "center",
            }}
          >
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  textTransform: "capitalize",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#ffffff",
                  fontFamily: "Roboto",
                },
              }}
              primary="SWAP"
            />
          </ListItem>
        </a>
        <a href="/#THE CREST TOKEN" style={{ textDecoration: "none" }}>
          <ListItem
            style={{
              justifyContent: "center",
            }}
          >
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  textTransform: "capitalize",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#ffffff",
                  fontFamily: "Roboto",
                },
              }}
              primary="THE CREST TOKEN"
            />
          </ListItem>
        </a>
        <a href="/#HISTORY" style={{ textDecoration: "none" }}>
          <ListItem
            style={{
              justifyContent: "center",
            }}
          >
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  textTransform: "capitalize",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#ffffff",
                  fontFamily: "Roboto",
                },
              }}
              primary="HISTORY"
            />
          </ListItem>
        </a>
        <a href="/#plus +" style={{ textDecoration: "none" }}>
          <ListItem
            style={{
              justifyContent: "center",
            }}
          >
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  textTransform: "capitalize",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#ffffff",
                  fontFamily: "Roboto",
                },
              }}
              primary="plus +"
            />
          </ListItem>
        </a>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1, padding: "60px 0" }}>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar sx={{ paddingTop: "20px" }}>
            <Hidden lgDown>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Stack direction="row">
                  <img src={logo} alt="" height="50" />
                  <Typography fontSize="15px" pt={2} pl={1}>
                    The Crest +
                  </Typography>
                </Stack>
              </Typography>
              <Stack direction="row" spacing={10}>
                <a href="##" style={{ textDecoration: "none", color: "white" }}>
                  <Typography variant="h6">HOME</Typography>
                </a>

                <a href="##" style={{ textDecoration: "none", color: "white" }}>
                  <Typography variant="h6">SWAP</Typography>
                </a>

                <a href="##" style={{ textDecoration: "none", color: "white" }}>
                  <Typography variant="h6">THE CREST TOKEN</Typography>
                </a>

                <a href="##" style={{ textDecoration: "none", color: "white" }}>
                  <Typography variant="h6">HISTORY</Typography>
                </a>

                <a href="##" style={{ textDecoration: "none", color: "white" }}>
                  <Typography variant="h6">PLUS +</Typography>
                </a>
              </Stack>
            </Hidden>

            <Hidden lgUp>
              <Typography
                component="div"
                display="flex"
                sx={{ flexGrow: 1 }}
                justifyContent="space-between"
              >
                <a href="/#home" style={{ textDecoration: "none" }}>
                  <Stack direction="row">
                    <img src={logo} alt="" height="50" />
                    <Typography fontSize="13px" pt={2} pl={1}>
                      The Crest +
                    </Typography>
                  </Stack>
                </a>
                <Button onClick={toggleDrawer(true)}>
                  <NotesIcon
                    style={{
                      fontSize: "38px",
                      cursor: "pointer",
                      color:
                        "linear-gradient(90deg, #2745EA 2.94%, #CF7BF4 100%);",
                    }}
                  />
                </Button>
              </Typography>

              <Paper
                style={{
                  background:
                    "linear-gradient(90deg, #2745EA 2.94%, #CF7BF4 100%)",
                }}
              >
                <SwipeableDrawer
                  PaperProps={{
                    sx: {
                      background:
                        "linear-gradient(90deg, #2745EA 2.94%, #CF7BF4 100%) !important",
                      justifyContent: "center",
                    },
                  }}
                  anchor="left"
                  open={openDrawer}
                  onClose={toggleDrawer(false)}
                  onOpen={toggleDrawer(true)}
                >
                  {list()}
                </SwipeableDrawer>
              </Paper>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
