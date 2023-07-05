/* eslint-disable react/prop-types */
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import SessionInfoContext from './../context/SessionsContext'
import { useForm } from "./useForm";
import CloseIcon from "@mui/icons-material/Close";
import { validate } from "./validate";

export const mentorQuerySubmit = async (data) => {
  const options = {};
  return await axios.post(
    `https://sh63i7vbx5.execute-api.ap-south-1.amazonaws.com/mentors/query`,
    data,
    options
  );
};
const FormDialogue = ({ universities, handleClose, mentor }) => {
  const { values, setValues, handleInputChange, setError } = useForm(
    {
  name: "",
  email: "",
  year: "2022",
  universitiesSelected: [],
  checkBox: false,
},
    validate
  );
  const isMobile = useContext(SessionInfoContext);

  const submitQuery = () => {
    const queryData = {
      name: values.name,
      email: values.email,
      university: values.universitiesSelected,
      year: values.year,
      mentor: mentor.name,
    };
    mentorQuerySubmit(queryData)
      .then((data) => console.log("form data submitted"))
      .catch((err) => console.log("err", err));
  };

  const handleStartChat = () => {
    if (
      document
        .getElementById(mentor.name.split(" ")[0] + "-form")
        .checkValidity()
    ) {
      const templateMessage = `Hi%20${
        mentor.name.split(" ")[0]
      }!%20My%20name%20is%20${
        values.name
      }%2C%20and%20I%20am%20interested%20in%20LLM%2E%20%0AI%20am%20interested%20in%20applying%20to%20the%20following%20universities%3A%0A${values.universitiesSelected.join(
        "%0A"
      )}`;

      submitQuery();

      if (isMobile) {
        window.open(
          `whatsapp://send?phone=${mentor.phone}&text=${templateMessage}`,
          "_blank"
        );
      } else {
        window.open(
          `https://web.whatsapp.com/send?phone=${mentor.phone}&text=${templateMessage}`,
          "_blank"
        );
      }
    }
  };

  return (
    <>
      <form
        id={mentor.name.split(" ")[0] + "-form"}
        onSubmit={(e) => e.preventDefault()}
      >
        <Grid
          container
          direction="row"
          paddingLeft={2}
          paddingTop={2}
          paddingRight={2}
        >
          <Grid item xs={10}>
            <Typography variant="h5" fontSize="1.2em" fontWeight="bold">
              {/* Talk to {mentor.name} */}
              Talk to {mentor.name}
            </Typography>
          </Grid>
          <Grid item xs={2} align="right">
            <Button color="inherit" onClick={handleClose}>
              <CloseIcon sx={{ transform: "scale(1)" }} />
            </Button>
          </Grid>
          <Grid item xs={4.5}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="field"
              variant="standard"
              name="name"
              value={values.name}
              onChange={handleInputChange}
              required
              InputLabelProps={{
                style: { fontFamily: "Outfit" },
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={6.5}>
            <TextField
              margin="dense"
              id="name"
              label="Email address"
              type="email"
              variant="standard"
              name="email"
              value={values.email}
              onChange={handleInputChange}
              required
              InputLabelProps={{
                style: { fontFamily: "Outfit" },
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              id="university-input"
              margin="dense"
              multiple
              freeSolo
              value={values.universitiesSelected}
              onChange={(e, updated) => {
                setValues({ ...values, universitiesSelected: updated });
                setError((prev) => ({
                  ...prev,
                  universitiesSelected: validate(
                    "universitiesSelected",
                    updated
                  ),
                }));
              }}
              options={universities}
              variant="standard"
              required
              renderInput={(params) => (
                <TextField
                  {...params}
                  required={values.universitiesSelected.length === 0}
                  margin="dense"
                  variant="standard"
                  label="Which universities are you planning to apply to?"
                  InputLabelProps={{
                    style: { fontFamily: "Outfit" },
                  }}
                  fullWidth
                />
              )}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="year"
              select
              margin="dense"
              label="When do you wish to apply?"
              variant="standard"
              name="year"
              value={values.year}
              onChange={handleInputChange}
              required
              InputLabelProps={{
                style: { fontFamily: "Outfit" },
              }}
              fullWidth
            >
              {["2022", "2023", "2024", "2025", "2026"].map((o) => (
                <MenuItem key={o} value={o}>
                  {o}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} marginTop={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.checkBox}
                  onChange={() => {
                    setValues((prev) => {
                      setError((prevError) => ({
                        ...prevError,
                        checkBox: validate("checkBox", !prev.checkBox),
                      }));
                      return { ...prev, checkBox: !prev.checkBox };
                    });
                  }}
                  required
                />
              }
              label={
                <Typography variant="h5" sx={{ fontSize: "1em" }}>
                  By clicking you agree to our{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"http://collegeit.org/privacy"}
                    style={{ textDecoration: "none" }}
                  >
                    privacy policy
                  </a>{" "}
                  and{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"http://collegeit.org/tos"}
                    style={{ textDecoration: "none" }}
                  >
                    terms of service
                  </a>
                  .
                </Typography>
              }
            />
          </Grid>
          <Grid item xs={12} marginTop={2} marginBottom={3}>
            <Button
              sx={{
                textTransform: "none",
                fontFamily: "DM Sans",
                fontWeight: 500,
                backgroundColor: "#2E8EFF",
                borderRadius: "7px",
                fontSize: "1.05em",
                boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
                letterSpacing: "0.001em",
              }}
              type="submit"
              variant="contained"
              onClick={handleStartChat}
            >
              Start chatting!
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default FormDialogue;
