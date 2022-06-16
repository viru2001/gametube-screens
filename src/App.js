import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { Drawer, VideoList } from "./frontend/components";
import { Router } from "./frontend/routes/Router";

function App() {
  return (
    <>
      <CssBaseline />
      <Drawer content={<VideoList />} />
      <Router />
    </>
  );
}

export default App;
