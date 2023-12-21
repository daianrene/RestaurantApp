import { Container, Typography } from "@mui/material";
import OrderIndex from "./components/Order/OrderIndex";

function App() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center">
        Restaurant App
      </Typography>
      <OrderIndex />
    </Container>
  );
}

export default App;
