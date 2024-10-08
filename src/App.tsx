import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Products from "./scenes/products";
import ProductView from "./scenes/productView";
import Cart from "./scenes/shopingCart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useProducts } from "./services/queries";
import { CartProvider } from "./context/cartProvider";
import ErrorPage from "./scenes/global/error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./scenes/global/baseLayout";

function App() {
  const [theme, colorMode] = useMode();
  const queryClient = new QueryClient();

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Products />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/products",
  //     element: <Products />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/products/:id",
  //     element: <ProductView />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/cart",
  //     element: <Cart />,
  //     errorElement: <ErrorPage />,
  //   },
  // ]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <CssBaseline />
            <div className="app">
              <main className="content">
                <Router>
                  <Routes>
                    <Route path="/" element={<BaseLayout />}>
                      <Route path="products" element={<Products />} />
                      <Route path="products/:id" element={<ProductView />} />
                      <Route path="cart" element={<Cart />} />
                      <Route path="*" element={<ErrorPage />} />
                    </Route>
                  </Routes>
                </Router>
                {/* <RouterProvider router={router} /> */}
              </main>
            </div>
          </CartProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
