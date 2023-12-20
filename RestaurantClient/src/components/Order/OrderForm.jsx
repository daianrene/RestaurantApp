import {
  ButtonGroup,
  Grid,
  InputAdornment,
  Button as MuiButton,
} from "@mui/material";

import Form from "../../layout/Form";
import Input from "../../controls/Input";
import Button from "../../controls/Button";
import Select from "../../controls/select";

import ReplayIcon from "@mui/icons-material/Replay";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ReorderIcon from "@mui/icons-material/Reorder";

import { useEffect, useState } from "react";
import { createAPIEndpoint } from "../../api";
import Popup from "../../layout/Popup";
import OrderList from "./OrderList";

const pMethods = [
  { id: "none", title: "Select" },
  { id: "Cash", title: "Cash" },
  { id: "Card", title: "Card" },
];

const OrderForm = ({
  values,
  setValues,
  errors,
  setErrors,
  handleInputChange,
  resetFormControls,
}) => {
  const [customers, setCustomers] = useState([{ id: 0, title: "Anonymous" }]);
  const [orderListVisibility, setOrderListVisibility] = useState(false);

  useEffect(() => {
    createAPIEndpoint("Customer")
      .fetchAll()
      .then((res) => {
        let customerList = res.data.map((item) => ({
          id: item.customerId,
          title: item.customerName,
        }));
        setCustomers([{ id: 0, title: "Select" }].concat(customerList));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let gTotal = values.orderDetails.reduce((acc, item) => {
      return acc + item.quantity * item.foodItemPrice;
    }, 0);

    setValues({ ...values, gTotal });
  }, [JSON.stringify(values.orderDetails)]);

  const validateForm = () => {
    let temp = {};
    temp.customerId = values.customerId != 0 ? "" : "This field is required";
    temp.pMethod = values.pMethod != "none" ? "" : "This field is required";
    temp.orderDetails =
      values.orderDetails.length != 0 ? "" : "This field is required";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const submitOrder = (e) => {
    e.preventDefault();
    console.log(values);
    if (validateForm()) {
      createAPIEndpoint("Order")
        .create(values)
        .then((res) => {
          resetFormControls();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Form onSubmit={submitOrder}>
        <Grid container>
          <Grid item xs={6}>
            <Input
              disabled
              label="Order Number"
              name="orderNumber"
              value={values.orderNumber}
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
              options={customers}
              error={errors.customerId}
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              label="Payment Method"
              name="pMethod"
              value={values.pMethod}
              onChange={handleInputChange}
              options={pMethods}
              error={errors.pMethod}
            />
            <Input
              disabled
              label="Total"
              name="gTotal"
              value={values.gTotal.toFixed(2)}
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
              <MuiButton
                size="large"
                type="submit"
                endIcon={<RestaurantIcon />}
              >
                Submit
              </MuiButton>
              <MuiButton
                size="small"
                startIcon={<ReplayIcon />}
                onClick={(e) => resetFormControls()}
              ></MuiButton>
            </ButtonGroup>
            <Button
              size="large"
              startIcon={<ReorderIcon />}
              onClick={(e) => setOrderListVisibility(true)}
            >
              Orders
            </Button>
          </Grid>
        </Grid>
      </Form>
      <Popup
        title="List of Orders"
        openPopup={orderListVisibility}
        setOpenPopup={setOrderListVisibility}
      >
        <OrderList />
      </Popup>
    </>
  );
};

export default OrderForm;
