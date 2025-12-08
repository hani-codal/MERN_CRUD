import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePage from "./pages/Createpage";
import HomePage from "./pages/Homepage";

function App() {
  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create" element={<CreatePage />}/>
      </Routes>
    </Box>
  )
}

export default App;
