import { Box, FormControl, InputLabel, Select, TextField } from "@mui/material";
import { useState } from "react";

const AddHabitForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

  return (
    <form>
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
          ></Select>
        </FormControl>
      </Box>
    </form>
  );
};

export default AddHabitForm;
