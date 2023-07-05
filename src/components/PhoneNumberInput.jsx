import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";

const PhoneNumberInput = ({
  defaultCountry = "in",
  label = "Mobile *",
  value,
  onChange,
  error,
  errorMsg,
  submitAttempted,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div style={{ position: "relative", marginTop: "16px" }}>
      <span
        style={{
          position: "absolute",
          fontFamily: "Outfit",
          fontSize: "12px",
          top: "0",
          transform: "translateY(-14px)",
          color: isFocus ? "#1976d2" : "rgba(0, 0, 0, 0.6)",
        }}
      >
        {label}
      </span>
      {submitAttempted && error && (
        <span
          style={{
            position: "absolute",
            fontFamily: "Outfit",
            fontSize: "12px",
            top: "0",
            right: "0",
            transform: "translateY(-14px)",
            color: "darkred",
          }}
        >
          {errorMsg}
        </span>
      )}
      <PhoneInput
        country={defaultCountry}
        value={value}
        onChange={onChange}
        enableSearch
        searchPlaceholder="Search"
        inputStyle={{
          ...inputStyle,
          borderBottom: isFocus
            ? "2px solid #1976d2"
            : "2px solid rgba(0, 0, 0, 0.247)",
        }}
        inputProps={{ placeholder: "Mobile *", required: true }}
        searchStyle={searchStyle}
        dropdownStyle={dropDownStyle}
        buttonStyle={buttonStyle}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </div>
  );
};

const inputStyle = {
  padding: "12px 56px",
  fontFamily: "Outfit",
  border: "none",
  borderRadius: "0",
  width: "100%",
  fontSize: "17px",
  paddingRight: "12px",
};

const searchStyle = {
  fontFamily: "Outfit",
};

const dropDownStyle = {
  fontFamily: "Outfit",
};

const buttonStyle = {
  background: "transparent",
  border: "none",
  bottom: "3px",
};

export default PhoneNumberInput;
