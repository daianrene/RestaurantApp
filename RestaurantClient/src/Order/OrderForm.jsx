import {
  ButtonGroup,
  Grid,
  InputAdornment,
  Button as MuiButton,
} from "@mui/material";

import Form from "../layout/Form";
import Input from "../controls/Input";
import Button from "../controls/Button";
import Select from "../controls/select";

import ReplayIcon from "@mui/icons-material/Replay";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ReorderIcon from "@mui/icons-material/Reorder";

const payMethods = [
  { id: "none", title: "Select" },
  { id: "cash", title: "Cash" },
  { id: "card", title: "Card" },
];

const OrderForm = ({ values, handleInputChange }) => {
  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Input
            disabled
            label="Order Number"
            name="orderNumber"
            value={values.ordenNumber}
            sx={{
              "& .MuiTypography-root": {
                color: "#f3b33d",
                fontWeight: "bolder",
                fontSize: "1.5em",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">#</InputAdornment>
              ),
            }}
          />
          <Select
            label="Customer"
            name="customerId"
            value={values.customerId}
            onChange={handleInputChange}
            options={[
              { id: 0, title: "Anonymous" },
              { id: 1, title: "Customer 1" },
              { id: 2, title: "Customer 2" },
            ]}
          />
        </Grid>
        <Grid item xs={6}>
          <Select
            label="Payment Method"
            name="payMethod"
            value={values.payMethod}
            onChange={handleInputChange}
            options={payMethods}
          />
          <Input
            disabled
            label="Total"
            name="gTotal"
            value={values.gTotal}
            sx={{
              "& .MuiTypography-root": {
                color: "#f3b33d",
                fontWeight: "bolder",
                fontSize: "1.5em",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <ButtonGroup
            sx={{
              backgroundColor: "#f3b33d",
              ".MuiButtonGroup-grouped": {
                borderColor: "#000",
                color: "#000",
              },
              margin: "8px",
            }}
          >
            <MuiButton size="large" type="submit" endIcon={<RestaurantIcon />}>
              Submit
            </MuiButton>
            <MuiButton size="small" startIcon={<ReplayIcon />}></MuiButton>
          </ButtonGroup>
          <Button size="large" startIcon={<ReorderIcon />}>
            Orders
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default OrderForm;
