import styled from "@emotion/styled";
import { Mail, MailOutline, Notifications, Pets } from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Badge,
	Box,
	InputBase,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius.small,
	width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
	display: "none",
	gap: "14px",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	},
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: "flex",
	gap: "8px",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
					{" "}
					Asis{" "}
				</Typography>
				<Pets sx={{ display: { xs: "block", sm: "none" } }} />
				<Search>
					<InputBase placeholder="search.." />
				</Search>
				<Icons>
					<Badge badgeContent={3} color="error">
						<Mail color="white" />
					</Badge>
					<Badge badgeContent={3} color="error">
						<Notifications color="white" />
					</Badge>
					<Avatar
						sx={{ width: 30, height: 30 }}
						src="/static/images/tilicho.jpeg"
                        onClick={e => setOpenMenu(true)}
					/>
				</Icons>
				<UserBox>
					<Avatar
						sx={{ width: 30, height: 30 }}
						src="/static/images/tilicho.jpeg"
                        onClick={e => setOpenMenu(true)}
					/>
					<Typography variant="span">Sayamiasis</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				open={openMenu}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
                onClose={e => setOpenMenu(false)}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<MenuItem >Profile</MenuItem>
				<MenuItem >My account</MenuItem>
				<MenuItem >Logout</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default Navbar;
