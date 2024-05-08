import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import InputBase from "@mui/material/InputBase"
import Badge from "@mui/material/Badge"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import AccountCircle from "@mui/icons-material/AccountCircle"
import MailIcon from "@mui/icons-material/Mail"
import NotificationsIcon from "@mui/icons-material/Notifications"
import MoreIcon from "@mui/icons-material/MoreVert"
import { theme } from "@/lib/theme"
import { useEffect, useState } from "react"
import TypewriterExample from "./hoc/typewriter-component"
import { ClickAwayListener, Collapse, Stack } from "@mui/material"
import BasicModal from "./hoc/basic-modal"
import BasicDrawer from "./hoc/basic-drawer"
import AppbarMenu from "./appbar-menu"
import Image from "next/image"
import { ICONS } from "./CONSTANT"
import LocationOffIcon from "@mui/icons-material/LocationOff"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { useMobileCheck } from "@/utils/mobile-viewport-check"
import useLocation from "@/utils/hooks/getLocation"
import GetAddressDetails from "@/utils/getAddress.service"
import LoginFormComponent from "./forms/login-form"
import SignInLoginTabs from "./forms/login-signup-tabs"
import { useSelector } from "react-redux"
import { selectUserData } from "@/globalStore/slices/userSlice"
import { RootState } from "@/globalStore/paws-palace.store"
import Link from "next/link"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5.5)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  input: { caretColor: `${theme?.palette?.neuPalette?.hexOne}!important` },
}))

export default function AppBarHeader({ setShowNavBar, showNavBar }: any) {
  const isMobileView = useMobileCheck()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [searchField, setSearchField] = useState<boolean>(false)
  const [userLogin, setUserLogin] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [showCity, setShowCity] = useState<boolean>(true)
  const { latitude, longitude } = useLocation()
  const response = GetAddressDetails({ latitude, longitude })
  const [userCity, setuserCity] = useState<string>()

  const userData = useSelector((state: RootState) => state.users)

  useEffect(() => {
    setuserCity(response?.address?.city)
    setUserLogin(userData?.isLoggedIn)
    setTimeout(() => {
      setShowCity(false)
    }, 4000)
  }, [response, userData])

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }
  const handleModalClose = () => {
    setOpenModal(false)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = "primary-search-account-menu"
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <Link href="/account/my-account">
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Link>
    </Menu>
  )

  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem></MenuItem>
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setShowNavBar(!showNavBar)}>
            <MenuIcon />
          </IconButton>
          <Image
            src={ICONS?.PAWS_PALACE_LOGO}
            alt={"paws-palace-logo"}
            width={"80"}
            height={"80"}
            style={{ mixBlendMode: "color" }}
          />
          <Typography
            variant="body-m"
            component="div"
            sx={{
              color: theme?.palette?.neuPalette?.hexOne,
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}>
            {"PAWS PALACE"}
          </Typography>
          {!isMobileView && (
            <Search>
              <Box
                onClick={() => {
                  setSearchField(true)
                }}
                sx={{
                  width: isMobileView ? "250px" : "500px",
                  height: "35px",
                }}>
                <ClickAwayListener
                  onClickAway={() => {
                    setSearchField(false)
                  }}>
                  <Stack flexDirection={"row"} gap={"40px"}>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    {searchField ? (
                      <StyledInputBase
                        inputProps={{ "aria-label": "search" }}
                        inputRef={(input) => input && input.focus()}
                      />
                    ) : (
                      <Stack
                        alignItems={"center"}
                        pt={"8px"}
                        ml={"10px"}
                        sx={{ paddingLeft: `calc(1em + ${theme.spacing(4)})` }}>
                        <TypewriterExample />
                      </Stack>
                    )}
                  </Stack>
                </ClickAwayListener>
              </Box>
            </Search>
          )}
          <Box sx={{ flexGrow: 0.9 }} />
          {!isMobileView && (
            <Box sx={{ display: { md: "flex" } }}>
              <IconButton>
                {latitude || longitude ? (
                  <Stack flexDirection={"row"} alignItems={"center"}>
                    <Collapse in={showCity} orientation="horizontal">
                      <Typography
                        sx={{
                          color: theme?.palette?.neuPalette?.hexOne,
                          textAlign: "center",
                        }}
                        variant={!userCity ? "body-xxxs" : "body-xs"}>
                        {userCity ? userCity : "fetching location..."}
                      </Typography>
                    </Collapse>
                    <LocationOnIcon
                      onMouseEnter={() => setShowCity(true)}
                      onMouseLeave={() => setShowCity(false)}
                      sx={{ color: theme?.palette?.neuPalette?.hexOne }}
                    />
                  </Stack>
                ) : (
                  <LocationOffIcon
                    sx={{ color: theme?.palette?.neuPalette?.hexTwelve }}
                  />
                )}
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit">
                <Badge
                  badgeContent={4}
                  color="error"
                  sx={{
                    "& .MuiBadge-colorError": {
                      background: "#e0115f",
                    },
                  }}>
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit">
                <Badge
                  badgeContent={17}
                  color="error"
                  sx={{
                    "& .MuiBadge-colorError": {
                      background: "#e0115f",
                    },
                  }}>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box>
          )}
          <Box>
            {userLogin ? (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit">
                <AccountCircle />
              </IconButton>
            ) : (
              <Stack
                alignItems={"center"}
                m={"auto 40px"}
                onClick={() => {
                  setOpenModal(true)
                }}>
                <Typography
                  variant="body-s"
                  color={theme?.palette?.neuPalette?.hexOne}
                  sx={{ cursor: "pointer" }}>
                  {"Login / Signup"}
                </Typography>
              </Stack>
            )}
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {openModal && (
        <BasicModal
          style={{
            background: isMobileView ? "rgba(19, 19, 15, 0.5)" : "#F6F5F5",
          }}
          open={openModal}
          handleClose={handleModalClose}
          Component={<SignInLoginTabs />}
        />
      )}
    </Box>
  )
}
