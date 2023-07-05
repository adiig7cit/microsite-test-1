// eslint-disable-next-line react/prop-types
import { Grid, InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const FilterInput = ({ onFilterChange, setSelectedCountry, setSelectedSpecialization, selectedCountry, selectedSpecialization }) => {
  const countries = ["India", "Nepal", "Kenya", "Saudi Arabia"];
  const specialisation = [
    "Banking & Financial Laws",
    "American Law",
    "General LLM",
    "Law and Business",
    "Dispute Resolution",
    "Master of Public Policy",
    "Intellectual Property Laws",
    "Tax Law",
    "Global Governance and Human Rights",
  ];
  let countryValue = selectedCountry, specializationValue = selectedSpecialization;
  const handleCountryChange = (event) => {
    countryValue = event.target.value;
    onFilterChange(countryValue, specializationValue);
    setSelectedCountry(countryValue)
    setSelectedSpecialization(specializationValue)
  };

  const handleSpecializationChange = (event) => {
    specializationValue = event.target.value;
    onFilterChange(countryValue, specializationValue);
    setSelectedCountry(countryValue)
    setSelectedSpecialization(specializationValue)
  };

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
            onChange={handleCountryChange}
            xs={{ borderRadius: "20px" }}
            style={{ borderRadius: "13px" }}
          >
            {countries.map((country) => (
              <MenuItem
                sx={{
                  fontFamily: "DM Sans",
                  fontSize: "13px",
                  minHeight: "unset",
                }}
                key={country}
                value={country.trim().toLowerCase()}
              >
                {country}
              </MenuItem>
            ))}
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
            onChange={handleSpecializationChange}

            style={{ borderRadius: "13px" }}
          >
            {specialisation.map((specialisation) => (
              <MenuItem
                sx={{
                  fontFamily: "DM Sans",
                  fontSize: "13px",
                  minHeight: "unset",
                }}
                key={specialisation}
                value={specialisation.trim().toLowerCase()}
              >
                {specialisation}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default FilterInput;
