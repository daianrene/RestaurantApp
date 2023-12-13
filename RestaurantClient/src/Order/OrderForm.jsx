import { Grid } from "@mui/material";
import Form from "../layout/Form";
import Input from "../controls/Input";
import Select from "../controls/select";

const OrderForm = () => {
  const payMethods = [
    { id: "cash", title: "Cash" },
    { id: "Card", title: "Card" },
  ];

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Input disabled label="Order Number" name="orderNumber" />
          <Select
            label="Customer"
            name="customerId"
            options={[
              { id: 0, title: "Customer 1" },
              { id: 1, title: "Customer 2" },
              { id: 2, title: "Customer 3" },
            ]}
          />
        </Grid>
        <Grid item xs={6}>
          <Select
            label="Payment Method"
            name="paymentMethod"
            options={payMethods}
          />
          <Input disabled label="Total" name="gTotal" />
        </Grid>
      </Grid>
    </Form>
  );
};

export default OrderForm;
