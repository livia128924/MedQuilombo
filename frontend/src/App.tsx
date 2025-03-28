import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./styles/themes/default";
import { Bounce, ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";

import { AuthProvider } from "./contexts/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import {
  CheckCircle,
  Info,
  Warning,
  WarningCircle,
} from "@phosphor-icons/react";
import router from "./routes";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <RouterProvider router={router} />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            transition={Bounce}
            pauseOnHover
            pauseOnFocusLoss
            limit={1}
            theme="colored"
            toastStyle={{ fontWeight: 500, fontSize: 16 }}
            hideProgressBar
            icon={({ type }) => {
              switch (type) {
                case "info":
                  return <Info color="white" size={24} />;
                case "error":
                  return <WarningCircle color="white" size={24} />;
                case "success":
                  return <CheckCircle color="white" size={24} />;
                case "warning":
                  return <Warning color="white" size={24} />;
                default:
                  return null;
              }
            }}
          />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
