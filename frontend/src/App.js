import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./components/HomeDashboard/Dashboard";
// import Form from "./components/Form";

function App() {
  return (
    <ChakraProvider>
      <Dashboard />
    </ChakraProvider>
  );
}

export default App;
