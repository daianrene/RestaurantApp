import { useEffect, useState } from "react";
import { createAPIEndpoint } from "../../api";
import Table from "../../layout/Table";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const OrderList = ({ setOrderId, setOpenPopup, setNotify }) => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    createAPIEndpoint("Order")
      .fetchAll()
      .then((res) => {
        setOrderList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const showForUpdate = (id) => {
    setOrderId(id);
    setOpenPopup(false);
  };

  const deleteOrder = (id) => {
    if (window.confirm("Are you sure to delete this order?")) {
      createAPIEndpoint("Order")
        .delete(id)
        .then((res) => {
          setOpenPopup(false);
          setOrderId(0);
          setNotify({
            isOpen: true,
            message: "The order was successfully deleted.",
          });
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order N</TableCell>
          <TableCell>Customer</TableCell>
          <TableCell>Payed With</TableCell>
          <TableCell>Grand Total</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orderList.map((item, _) => (
          <TableRow key={item.orderMasterId}>
            <TableCell>{item.orderNumber}</TableCell>
            <TableCell>{item.customer.customerName}</TableCell>
            <TableCell>{item.pMethod}</TableCell>
            <TableCell>{item.gTotal}</TableCell>
            <TableCell>
              <EditIcon
                color="primary"
                onClick={(e) => showForUpdate(item.orderMasterId)}
              />
            </TableCell>
            <TableCell>
              <DeleteIcon
                color="error"
                onClick={(e) => deleteOrder(item.orderMasterId)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderList;
