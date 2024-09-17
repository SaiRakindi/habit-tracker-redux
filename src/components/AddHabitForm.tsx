import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { addHabit } from "../store/habitSlice";

const AddHabitForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.trim()) {
      dispatch(
        addHabit({
          name,
          frequency,
        })
      );
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Habit Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <FormControl>
          <InputLabel>Frequency</InputLabel>
          <Select
            value={frequency}
            onChange={(event) =>
              setFrequency(event.target.value as "daily" | "weekly")
            }
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Add Habit
        </Button>
      </Box>
    </form>
  );
};

export default AddHabitForm;
