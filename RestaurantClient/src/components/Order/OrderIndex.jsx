import { Grid } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import OrderForm from "./OrderForm";
import SearchFoodItem from "./SearchFoodItem";
import OrderedFoodItems from "./OrderedFoodItems";

const generateOrderNumber = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const getFreshModelObject = () => ({
  orderMasterId: 0,
  orderNumber: generateOrderNumber(),
  customerId: 0,
  pMethod: "none",
  gTotal: 0,
  deletedOrderItemsIds: "",
  orderDetails: [],
});

const OrderIndex = () => {
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls,
  } = useForm(getFreshModelObject);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <OrderForm
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            handleInputChange={handleInputChange}
            resetFormControls={resetFormControls}
          />
        </Grid>
        <Grid item sm={6}>
          <SearchFoodItem values={values} setValues={setValues} />
        </Grid>
        <Grid item sm={6}>
          <OrderedFoodItems values={values} setValues={setValues} />
        </Grid>
      </Grid>
    </>
  );
};

export default OrderIndex;
