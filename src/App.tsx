import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Discover } from "./components/Discover";
import { Home } from "./components/home";
import { Join } from "./components/Join";
import { colors } from "./theme";

function App() {
  
  
  const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
    *{
      font-family: "Poppins", sans-serif;
    }
    body {
      margin: 0;
      font-size: 1.2rem;
      text-decoration: none;
    }
    html {
      background-color: ${colors["general-bg"]};
    }
  `

  return (
    <>
      <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
