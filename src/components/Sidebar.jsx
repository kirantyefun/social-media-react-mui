import {
	Home, ModeNight,
	Pages,
	People, PersonAdd,
	Photo, Settings,
	Shop
} from "@mui/icons-material";
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Switch,
} from "@mui/material";
import React from "react";

const Sidebar = ({onModeChange}) => {
	return (
		<Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
			<Box position="fixed">
				<nav aria-label="main mailbox folders">
					<List>
						<ListItem disablePadding>
							<ListItemButton component="a" href="#home">
								<ListItemIcon>
									<Home />
								</ListItemIcon>
								<ListItemText primary="Home" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<Shop />
								</ListItemIcon>
								<ListItemText primary="Marketplace" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<Photo />
								</ListItemIcon>
								<ListItemText primary="Photos" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<Settings />
								</ListItemIcon>
								<ListItemText primary="Settings" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<Pages />
								</ListItemIcon>
								<ListItemText primary="Pages" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<PersonAdd />
								</ListItemIcon>
								<ListItemText primary="Add Friend" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<People />
								</ListItemIcon>
								<ListItemText primary="Groups" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<ModeNight />
								</ListItemIcon>
								<Switch onChange={onModeChange}/>
							</ListItemButton>
						</ListItem>
					</List>
				</nav>
			</Box>
		</Box>
	);
};

export default Sidebar;
