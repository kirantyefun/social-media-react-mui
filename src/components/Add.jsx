import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab, Modal,
    Stack,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import React, { useState } from "react";
import { AddAPhoto, Add as AddIcon, DateRange, EmojiEmotions, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});
const UserBox = styled(Box)({
	display: "flex",
	alignItems: "center",
	// justifyContent: "center",
	gap: "10px",
	marginBottom: "10px",
});

const Add = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Tooltip
				onClick={(e) => setOpen(true)}
				title="Add Post"
				sx={{
					position: "fixed",
					bottom: 20,
					transform: { xs: "translate(-50%, -50%)", sm: "none" },
					left: { xs: "calc(50%)", sm: 30 },
				}}
			>
				<Fab>
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={(e) => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
                    bgcolor={"background.default"} color={"text.primary"}
					width={400}
					height={280}
					p={3}
					borderRadius="10px"
				>
					<Typography variant="h6" color="gray" textAlign="center">
						Create Post
					</Typography>
					<UserBox>
						<Avatar
							src="/static/images/tilicho.jpeg"
							sx={{ width: 30, height: 30 }}
						/>
						<Typography variant="span" fontWeight={500} color="secondary">
							Sayamiasis
						</Typography>
					</UserBox>
                    <TextField 
                     multiline
                     rows={3}
                     placeholder="What's on your mind"
                     fullWidth
                     variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="success"/>
                        <AddAPhoto color="primary"/>
                        <VideoCameraBack color="secondary"/>
                        <PersonAdd color="warning"/>

                    </Stack>
                    <ButtonGroup fullWidth variant="contained">
                        <Button>
                            Post
                        </Button>
                        <Button sx={{width: "200px"}}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
				</Box>
			</StyledModal>
		</>
	);
};

export default Add;
