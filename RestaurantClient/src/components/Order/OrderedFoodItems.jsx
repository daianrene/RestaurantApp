import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper,
  ListItemSecondaryAction,
  ButtonGroup,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const OrderedFoodItems = ({ values, setValues }) => {
  let orderedItems = values.orderDetails;

  const updateQuantity = (idx, value) => {
    let newList = { ...values };

    if (newList.orderDetails[idx].quantity + value > 0) {
      newList.orderDetails[idx].quantity += value;
      setValues({ ...newList });
    }
  };

  const removeFoodItem = (index, id) => {
    let newList = { ...values };
    newList.orderDetails = newList.orderDetails.filter(
      (_, idx) => idx != index
    );
    if (id != 0) newList.deletedOrderItemsIds += id + ",";
    setValues({ ...newList });
  };

  return (
    <List>
      {orderedItems.length == 0 ? (
        <ListItem>
          <ListItemText
            primary="Please add food"
            primaryTypographyProps={{
              style: { textAlign: "center", fontStyle: "italic" },
            }}
          />
        </ListItem>
      ) : (
        orderedItems.map((item, idx) => (
          <Paper
            key={idx}
            sx={{
              margin: "20px 0px",
              "&:hover": { cursor: "pointer" },
              "&:hover .MuiListItemSecondaryAction-root": { display: "block" },
            }}
          >
            <ListItem>
              <ListItemText
                primary={item.foodItemName}
                primaryTypographyProps={{
                  component: "h1",
                  style: { fontWeight: "500", fontSize: "1.2em" },
                }}
                secondary={
                  <>
                    <ButtonGroup
                      size="small"
                      sx={{
                        backgroundColor: "#E3E3E3",
                        borderRadius: 8,
                        marginY: "10px",
                        "& .MuiButtonBase-root": {
                          border: "none",
                          minWidth: "25px",
                          padding: "1px",
                        },
                        "& button:nth-child(2)": {
                          fontSize: "1.2em",
                          color: "#000",
                        },
                      }}
                    >
                      <Button onClick={(e) => updateQuantity(idx, -1)}>
                        -
                      </Button>
                      <Button disabled>{item.quantity}</Button>
                      <Button onClick={(e) => updateQuantity(idx, +1)}>
                        +
                      </Button>
                    </ButtonGroup>
                    <span
                      style={{
                        fontWeight: "bolder",
                        fontSize: "1.2em",
                        margin: "0px 10px",
                      }}
                    >
                      {" $ " + item.quantity * item.foodItemPrice}
                    </span>
                  </>
                }
                secondaryTypographyProps={{
                  component: "div",
                }}
              />

              <ListItemSecondaryAction
                sx={{
                  display: "none",
                  "& .MuiButtonBase-root": {
                    color: "#E81719",
                  },
                }}
              >
                <IconButton
                  disableRipple
                  onClick={(e) => removeFoodItem(idx, item.orderDetailId)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Paper>
        ))
      )}
    </List>
  );
};

export default OrderedFoodItems;
