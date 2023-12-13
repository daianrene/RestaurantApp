import { Button as MuiButton } from "@mui/material";

const Button = (props) => {
  const { children, color, variant, onClick, className, ...other } = props;

  return (
    <MuiButton
      sx={{
        "& .MuiButton-label": {
          textTransform: "none",
          margin: "8px",
        },
      }}
      className={className || ""}
      variant={variant || "contained"}
      color={color || "inherit"}
      onClick={onClick}
      {...other}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
