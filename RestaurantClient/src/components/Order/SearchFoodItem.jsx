import { useEffect, useState } from "react";
import { createAPIEndpoint } from "../../api";
import {
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const SearchFoodItem = ({ values, setValues }) => {
  let orderedItems = values.orderDetails;

  const [foodList, setFoodList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    createAPIEndpoint("FoodItem")
      .fetchAll()
      .then((res) => {
        setFoodList(res.data);
        setSearchList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let x = [...foodList];
    x = x.filter((item) => {
      return (
        item.foodItemName.toLowerCase().includes(searchKey.toLowerCase()) &&
        orderedItems.every((y) => item.id != y.foodItemId)
      );
    });
    setSearchList(x);
  }, [searchKey, orderedItems]);

  const addFoodItem = (foodItem) => {
    let newDetail = {
      orderMasterId: values.orderMasterId,
      orderDetailId: 0,
      foodItemId: foodItem.id,
      quantity: 1,
      foodItemPrice: foodItem.foodItemPrice,
      foodItemName: foodItem.foodItemName,
    };

    setValues({ ...values, orderDetails: [...values.orderDetails, newDetail] });
  };

  return (
    <>
      <Paper sx={{ padding: "2px 4px", display: "flex", alignItems: "center" }}>
        <InputBase
          sx={{ marginLeft: "12px", flex: 1 }}
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Search for food"
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Paper>
      <List
        sx={{
          marginTop: "8px",
          maxHeight: 325,
          overflow: "auto",
          "& li:hover": {
            cursor: "pointer",
            backgroundColor: "#E3E3E3",
          },
          "& li:hover .MuiButtonBase-root": {
            display: "block",
            color: "#000",
          },
          "& .MuiButtonBase-root": {
            display: "none",
          },
          "& .MuiButtonBase-root:hoover": {
            backgroundColor: "transparent",
          },
        }}
      >
        {searchList.map((item, idx) => (
          <ListItem key={idx} onClick={(e) => addFoodItem(item)}>
            <ListItemText
              primary={item.foodItemName}
              secondary={"$ " + item.foodItemPrice}
            />
            <ListItemSecondaryAction>
              <IconButton onClick={(e) => addFoodItem(item)}>
                <AddCircleIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SearchFoodItem;
