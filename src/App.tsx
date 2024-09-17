import { Container, Typography } from "@mui/material";
import "./App.css";
import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";

function App() {
  return (
    <div>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2">
          Habit Tracker
        </Typography>

        <AddHabitForm />
        <HabitList />
      </Container>
    </div>
  );
}

export default App;
