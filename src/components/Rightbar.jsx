import {
	Avatar,
	AvatarGroup,
	Box,
	ImageList,
	ImageListItem,
	Typography,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Divider,
} from "@mui/material";
import React, { Fragment } from "react";

const Rightbar = () => {
	const itemData = [
		{
			img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
			title: "Bed",
		},
		{
			img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
			title: "Books",
		},
		{
			img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
			title: "Sink",
		},
		{
			img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
			title: "Kitchen",
		},
		{
			img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
			title: "Blinds",
		},
		
	];
	return (
		<Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block", marginBottom: "2rem" }}}>
			<Box position="fixed" width={300} >
				<Typography variant="h6" fontWeight={300}>
					Online Friends
				</Typography>
        <Divider />
				<AvatarGroup max={6} sx={{margin: "10px auto"}}>
					<Avatar src="/static/images/tilicho.jpeg" />
					<Avatar src="/static/images/tilicho.jpeg" />
					<Avatar src="/static/images/tilicho.jpeg" />
					<Avatar src="/static/images/tilicho.jpeg" />
					<Avatar src="/static/images/tilicho.jpeg" />
					<Avatar src="/static/images/tilicho.jpeg" />
					<Avatar src="/static/images/tilicho.jpeg" />
					<Avatar src="/static/images/tilicho.jpeg" />
				</AvatarGroup>
				<Typography variant="h6" fontWeight={300} mt={5}>
					Your pictures
				</Typography>
        <Divider />
				<ImageList variant="masonry" cols={3} gap={8} sx={{marginTop: "10px"}}>
					{itemData.map((item) => (
						<ImageListItem key={item.img}>
							<img
								src={`${item.img}?w=248&fit=crop&auto=format`}
								srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
								alt={item.title}
								loading="lazy"
							/>
						</ImageListItem>
					))}
				</ImageList>
				<Typography variant="h6" fontWeight={300} mt={5}>
					Latest Conversations
				</Typography>
        <Divider />
				<Box sx={{maxHeight: "160px", overflow: "scroll", boxShadow: "0 1px 0.03px rgba(0,0,0, 0.2)"}} >
					<List
						sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
					>
						<ListItem alignItems="flex-start">
							<ListItemAvatar>
								<Avatar alt="Remy Sharp" src="/static/images/tilicho.jpeg" />
							</ListItemAvatar>
							<ListItemText
								primary="Brunch this weekend?"
								secondary={
									<Fragment>
										<Typography
											sx={{ display: "inline" }}
											component="span"
											variant="body2"
											color="text.primary"
										>
											Ali Connors
										</Typography>
										{" — I'll be in your neighborhood doing errands this…"}
									</Fragment>
								}
							/>
						</ListItem>
						<Divider variant="inset" component="li" />
						<ListItem alignItems="flex-start">
							<ListItemAvatar>
								<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
							</ListItemAvatar>
							<ListItemText
								primary="Summer BBQ"
								secondary={
									<Fragment>
										<Typography
											sx={{ display: "inline" }}
											component="span"
											variant="body2"
											color="text.primary"
										>
											to Scott, Alex, Jennifer
										</Typography>
										{" — Wish I could come, but I'm out of town this…"}
									</Fragment>
								}
							/>
						</ListItem>
						<Divider variant="inset" component="li" />
						<ListItem alignItems="flex-start">
							<ListItemAvatar>
								<Avatar alt="Cindy Baker" src="/static/images/tilicho.jpeg" />
							</ListItemAvatar>
							<ListItemText
								primary="Oui Oui"
								secondary={
									<Fragment>
										<Typography
											sx={{ display: "inline" }}
											component="span"
											variant="body2"
											color="tejxt.primary"
										>
											Sandra Adams
										</Typography>
										{" — Do you have Paris recommendations? Have you ever…"}
									</Fragment>
								}
							/>
						</ListItem>
					</List>
				</Box>
			</Box>
		</Box>
	);
};

export default Rightbar;
