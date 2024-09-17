import { Container, Typography } from "@mui/material";
import "./App.css";
import AddHabitForm from "./components/AddHabitForm";

function App() {
  return (
    <div>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2">
          Habit Tracker
        </Typography>

        <AddHabitForm />
      </Container>
    </div>
  );
}

export default App;
