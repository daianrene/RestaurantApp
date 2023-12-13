import { FormControl } from "@mui/material";

export default function Form(props) {
  const { children, ...other } = props;

  return (
    <FormControl
      sx={{
        "& .MuiFormControl-root": {
          width: "90%",
          margin: 2,
        },
      }}
      noValidate
      autoComplete="off"
      {...other}
    >
      {children}
    </FormControl>
  );
}
