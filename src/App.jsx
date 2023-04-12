import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";

function App() {
	const [mode, setMode] = useState("light");

	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	});

	const onModeChange = (e) => {
		setMode(e.target.checked ? "dark" : "light")
	}
	return (
		<ThemeProvider theme={darkTheme}>
			<Box bgcolor={"background.default"} color={"text.primary"}>
				<Navbar />
				<Stack direction="row" spacing={2} justifyContent="space-between">
					<Sidebar onModeChange={onModeChange}/>
					<Feed />
					<Rightbar />
				</Stack>
				<Add />
			</Box>
		</ThemeProvider>
	);
}

export default App;
