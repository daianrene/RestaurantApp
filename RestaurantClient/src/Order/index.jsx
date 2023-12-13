import { useForm } from "../hooks/useForm";
import OrderForm from "./OrderForm";

const generateOrderNumber = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const getFreshModelObject = () => ({
  orderMasterId: 0,
  ordenNumber: generateOrderNumber(),
  customerId: 0,
  payMethod: "none",
  gTotal: 0,
  deletedOrderIds: "",
  orderDetails: [],
});

const Order = () => {
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls,
  } = useForm(getFreshModelObject);

  return <OrderForm values={values} handleInputChange={handleInputChange} />;
};

export default Order;
