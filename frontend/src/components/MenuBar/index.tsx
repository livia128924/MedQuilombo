/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Box,
  Fade,
  IconButton,
  ListItem,
  Popover,
  List as ListMUI,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  ItemMenu,
  MainContainer,
  MenuIcon,
  MenuPopover,
  NavContainer,
  NavOptions,
  NavStyled,
  OptionsContent,
  OutletContainer,
} from "./styles";
import { Outlet, useNavigate } from "react-router-dom";
import {
  ChartDonut,
  HouseLine,
  List,
  SignOut,
  UserCircle,
} from "@phosphor-icons/react";
import { stringAvatar } from "../../utils/functions";
import { toast } from "react-toastify";
import { useState } from "react";
import { IUser } from "../../contexts/AuthProvider/types";
interface IOptionsMenu {
  id: number;
  title: string;
  icon: any;
  subItems?:
    | { id: number; title: string; icon: any; transactions?: number }[]
    | undefined;
  route?: string;
}
function MenuBar() {
  const navigate = useNavigate();
  const [selectedSubItems, setSelectedSubItems] = useState<any>(undefined);
  const redirectLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("unexpectedError");
    navigate("/");
    toast.success("User deslogado com sucesso1", {
      style: { width: "350px", height: "23px" },
    });
  };

  const handleClick = (id: number, route?: string) => {
    setSelectedSubItems(id);
    if (route) {
      navigate(route);
    }
  };

  const OptionsMenu = [
    {
      id: 1,
      title: "Dashboard",
      icon: <ChartDonut />,
      route: "home",
    },
    {
      id: 2,
      title: "Paciente",
      icon: <UserCircle />,
      route: "patient",
    },
  ];

  const [user, setUser] = useState<IUser>();
  const value = localStorage.getItem("user");

  const users = value ? JSON.parse(value) : {};
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedSubItems(undefined);
  };

  const open = Boolean(anchorEl);
  const id = open ? "menu-popover" : undefined;

  return (
    <MainContainer>
      {/* <ModalOptions open={showMenu} handleClose={() => setShowMenu(false)} /> */}
      <NavStyled>
        <NavContainer>
          <OptionsContent>
            {OptionsMenu.map((item: IOptionsMenu) => (
              <ItemMenu
                key={item.id}
                onClick={() => handleClick(item.id, item.route)}
                isSelected={selectedSubItems === item.id}
              >
                {item.icon}
                <h2>{item.title}</h2>
              </ItemMenu>
            ))}
          </OptionsContent>
        </NavContainer>
        <NavOptions>
          <IconButton onClick={() => redirectLogout()}>
            <SignOut size={24} color="#1E1E1E" />
          </IconButton>

          <IconButton>
            <Avatar {...stringAvatar(user?.name || "")} />
          </IconButton>
        </NavOptions>

        <MenuIcon>
          <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
            <List size={32} />
          </IconButton>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 60,
              horizontal: "left",
            }}
            TransitionComponent={Fade}
            transitionDuration={{ enter: 500, exit: 0 }}
          >
            <MenuPopover>
              {OptionsMenu.map((item: IOptionsMenu) => (
                <Box>
                  <ListMUI>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => handleClick(item.id, item.route)}
                      >
                        <ListItemIcon
                          sx={{
                            svg: { height: 24, width: 24, color: "#1E1E1E" },
                          }}
                        >
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItemButton>
                    </ListItem>
                  </ListMUI>

                  <Divider />
                </Box>
              ))}
              <ListMUI>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => redirectLogout()}>
                    <ListItemIcon>
                      <SignOut size={24} color="#1E1E1E" />
                    </ListItemIcon>
                    <ListItemText primary="Sair" />
                  </ListItemButton>
                </ListItem>
              </ListMUI>
            </MenuPopover>
          </Popover>
        </MenuIcon>
      </NavStyled>
      <OutletContainer
        isHome={location.pathname === "/cms/home" ? true : false}
      >
        <Outlet />
      </OutletContainer>
    </MainContainer>
  );
}

export default MenuBar;
