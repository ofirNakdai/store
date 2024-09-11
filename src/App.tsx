import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Products from "./scenes/products";
import ProductView from "./scenes/productView";
import Cart from "./scenes/shopingCart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [theme, colorMode] = useMode();
  const queryClient = new QueryClient();
  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <main className="content">
              <Topbar />
              <Router>
                <Routes>
                  <Route path="/" element={<Products />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/{id}" element={<ProductView />} />
                  <Route path="/shopingCart" element={<Cart />} />
                  {/* <Route path="*" element={<>} /> */}
                </Routes>
              </Router>
            </main>
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
