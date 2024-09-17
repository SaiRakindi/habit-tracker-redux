import { Container, Typography } from "@mui/material";
import "./App.css";
import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";
import HabitStats from "./store/habitStats";

function App() {
  return (
    <div>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2">
          Habit Tracker
        </Typography>

        <AddHabitForm />
        <HabitList />
        <HabitStats />
      </Container>
    </div>
  );
}

export default App;
