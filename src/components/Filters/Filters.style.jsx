// import styled from "styled-components";

export const firstSelectStyles = {
     control: (baseStyles) => ({
                ...baseStyles,
                border: "none",
                width: "224px",
                height: "48px",
                background: "#f7f7fb",
                borderRadius: "14px",
                fontSize: "18px",
                fontWeight: "500",
                color: "black",
                fontFamily: "Manrope",
                cursor: "pointer",
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                border: "none",
                fontSize: "16px",
                fontWeight: "500",
                fontFamily: "Manrope",
                lineHeight: "125%",
                color: state.isFocused
                  ? "rgba(18, 20, 23, 0.938)"
                  : "rgba(18, 20, 23, 0.2)",
              }),
              valueContainer: (baseStyles) => ({
                ...baseStyles,
                borderRadius: "14px",
                boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
              }),
  };
  export default firstSelectStyles;
