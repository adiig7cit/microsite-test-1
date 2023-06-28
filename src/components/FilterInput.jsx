// eslint-disable-next-line react/prop-types
import { Grid, InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
const FilterInput = () => {
  return (
    <Grid
      container
      style={{
        width: "100%",
        marginTop: "4rem",
        padding: "0 1.2rem",
        justifyContent: "center",
      }}
      sx={{ gap: "1rem" }}
      sm={{ gap: "3rem" }}
    >
      <Grid item xs={5.7} sm={3}>
        <FormControl fullWidth>
          <InputLabel id="uni-select" sx={{ fontFamily: "DM Sans" }}>
            Country
          </InputLabel>
          <Select
            labelId="uni-select"
            name="universityMentor"
            id="uni-select-dropdown"
            label="University"
            xs={{ borderRadius: "20px" }}
            style={{ borderRadius: "13px" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={5.7} sm={3}>
        <FormControl fullWidth>
          <InputLabel id="special-select" sx={{ fontFamily: "DM Sans" }}>
            Specialization
          </InputLabel>
          <Select
            labelId="special-select"
            id="special-select-dropdown"
            name="specializationMentor"
            label="Specialization"
            style={{ borderRadius: "13px" }}
          >
            <MenuItem>None</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default FilterInput;
