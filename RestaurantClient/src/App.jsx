import { Container, Typography } from "@mui/material";
import Order from "./Order";

function App() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center">
        Restaurant App
      </Typography>
      <Order />
    </Container>
  );
}

export default App;
