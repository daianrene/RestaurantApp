import { FormControl } from "@mui/material";

export default function Form(props) {
  const { children, ...other } = props;

  return (
    <form noValidate autoComplete="off" {...other}>
      <FormControl
        sx={{
          "& .MuiFormControl-root": {
            width: "90%",
            margin: "8px",
          },
        }}
      >
        {children}
      </FormControl>
    </form>
  );
}
