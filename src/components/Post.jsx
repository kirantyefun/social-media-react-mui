import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Checkbox,
	IconButton,
	Typography,
} from "@mui/material";
import React from "react";
import { theme } from "../theme";

const Post = () => {
	return (
		<Card sx={{marginBottom: "2rem"}}>
			<CardHeader
				avatar={
					<Avatar
						sx={{ bgcolor: theme.palette.secondary.main }}
						aria-label="recipe"
					>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVert />
					</IconButton>
				}
				title="Asis Sayami"
				subheader="September 14, 2016"
			/>
			<CardMedia
				component="img"
				height="20%"
				image="/static/images/tilicho.jpeg"
				alt="Paella dish"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the
					mussels, if you like.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<Checkbox
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite color="secondary" />}
					/>
				</IconButton>
				<IconButton aria-label="share">
					<Share />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Post;
