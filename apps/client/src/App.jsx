import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import ErrorBoundary from "./components/ErrorBoundary";
import { Toaster } from "react-hot-toast";
import PageNotFound from "./pages/Home/PageNotFound";
import { createContext, useState } from "react";
import MiniCss from "./pages/MiniCss";
import CV from "./pages/CV";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/mui/Theme";

const MyContext = createContext();

function App() {
  const [isLogin, setisLogin] = useState(true);
  const [isHideHeaderAndFooter, setisHideHeaderAndFooter] = useState(false);

  const values = {
    isLogin,
    setisLogin,
    isHideHeaderAndFooter,
    setisHideHeaderAndFooter,
  };

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <ThemeProvider theme={theme}>
            <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
            {isHideHeaderAndFooter !== true && <Header />}

            <Routes>
              {/* Frontend Panel */}
              <Route path="/" element={<Home />} />
              <Route path="/minicss" element={<MiniCss />} />

              <Route path="/shailendrashrestha-cv" element={<CV />} />

              <Route path="/*" element={<PageNotFound />} />
              
            </Routes>
            {isHideHeaderAndFooter !== true && <Footer />}
          </ThemeProvider>
        </MyContext.Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
export { MyContext };
