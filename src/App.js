import { GlobalStyle } from "./components/GlobalStyles/GlobalStyles";
import { Navbar } from "./components/Navbar/Navbar";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const queryclient = new QueryClient();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <QueryClientProvider client={queryclient}>
          <Routes></Routes>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
