import {
  Alert,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
// import { useForm } from "../../custom-hooks";
import CloseIcon from "@mui/icons-material/Close";
// import { validate } from "./validate";
// import PhoneNumberInput from "../PhoneNumberInput";
import { useState } from "react";
// import axios from "axios";

export const initialFormValues = {
  name: "",
  email: "",
  year: "2022",
  phone: "91",
  // mentorId: "", add it in request
  message_template: "welcome",
  checkBox: false,
  university_mentor: "",
};

export const newMentorQuerySubmit = async (data) => {
  const options = {};
  return await axios.post(
    `https://kw41fi5rla.execute-api.ap-south-1.amazonaws.com/connect/chat`,
    data,
    options
  );
};

const IndirectPostForm = ({ handleClose }) => {
  // const {
  //   values,
  //   setValues,
  //   handleInputChange,
  //   error,
  //   setError,
  // } = useForm(initialFormValues, validate);

//   const [submitClickedOnce, setSubmitClickedOnce] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState({ type: "success", show: false });

//   const handleStartChat = () => {
//     setSubmitClickedOnce(true);
//     if (
//       document
//         .getElementById(mentor.name.split(" ")[0] + "-form")
//         .checkValidity() &&
//       validateSubmit()
//     ) {
//       setSubmitting(true);
//       const requestBody = {
//         ...values,
//         mentorId: mentor._id,
//         university_mentor: mentor.university_mentor,
//       };
//       newMentorQuerySubmit(requestBody)
//         .then((data) => {
//           if (
//             data.data.status === "CONNECTED" ||
//             data.data.status === "CONV_CHANGE_REQUEST"
//           ) {
//             setAlert({ show: true, type: "success" });
//             setTimeout(() => {
//               setAlert((prev) => ({ ...prev, show: false }));
//               handleClose();
//             }, 5000);
//           } else {
//             setAlert({ show: true, type: "error" });
//             setTimeout(() => {
//               setAlert((prev) => ({ ...prev, show: false }));
//             }, 5000);
//           }
//         })
//         .catch((err) => {
//           setAlert({ show: true, type: "error" });
//           setTimeout(() => {
//             setAlert((prev) => ({ ...prev, show: false }));
//           }, 5000);
//         })
//         .finally(() => {
//           setSubmitting(false);
//         });
//     }
//   };

  return (
    <>
      {alert.show && (
        <Alert
          severity={alert.type}
          onClose={() => setAlert((prev) => ({ ...prev, show: false }))}
        >
          {alert.type === "error"
            ? "Sorry. There was an error. Please try again"
            : "We have sent you a message on whatsapp to connect you with your mentor"}
        </Alert>
      )}
      <form
        // onSubmit={(e) => e.preventDefault()}
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
              Talk to abc
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
              // value={values.name}
              // onChange={handleInputChange}
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
              // value={values.email}
              // onChange={handleInputChange}
              required
              InputLabelProps={{
                style: { fontFamily: "Outfit" },
              }}
              fullWidth
            />
          </Grid>
          {/* <Grid item xs={12} paddingY="8px">
            <PhoneNumberInput
              country="in"
              // value={values.phone}
              // onChange={(phone) =>
              //   handleInputChange({
              //     target: {
              //       name: "phone",
              //       value: phone,
              //     },
              //   })
              // }
              // error={Boolean(error.phone)}
              // errorMsg={error.phone}
            //   submitAttempted={submitClickedOnce}
            />
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              id="year"
              select
              margin="dense"
              label="When do you wish to apply?"
              variant="standard"
              name="year"
              // value={values.year}
              // onChange={handleInputChange}
              required
              InputLabelProps={{
                style: { fontFamily: "DM Sans" },
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
                  // checked={values.checkBox}
                  // onChange={() => {
                  //   setValues((prev) => {
                  //     setError((prevError) => ({
                  //       ...prevError,
                  //       checkBox: validate("checkBox", !prev.checkBox),
                  //     }));
                  //     return { ...prev, checkBox: !prev.checkBox };
                  //   });
                  // }}
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
          {/* <Grid item xs={12} marginTop={2} marginBottom={3}>
            {!submitting ? (
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
                // onClick={handleStartChat}
                disabled={submitting}
              >
                Start chatting!
              </Button>
            ) : (
              <Box width="100%" display="flex" justifyContent="center">
                <CircularProgress />
              </Box>
            )}
          </Grid> */}
          {/* parent grid end */}
        </Grid>
      </form>
    </>
  );
};

export default IndirectPostForm;
