import { useEffect, useState } from "react";
import { createAPIEndpoint } from "../../api";
import Table from "../../layout/Table";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    createAPIEndpoint("Order")
      .fetchAll()
      .then((res) => {
        setOrderList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order N</TableCell>
          <TableCell>Customer</TableCell>
          <TableCell>Payed With</TableCell>
          <TableCell>Grand Total</TableCell>
          <TableCell></TableCell>
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
              <DeleteIcon color="error" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderList;
