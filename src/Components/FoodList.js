import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

function FoodList({ foodItems, updateFoodItems, updateCaloriesDetails }) {
  const onAddItem = (foodItem) => {
    updateFoodItems(foodItem);
    updateCaloriesDetails(foodItem);
  };
  return (
    <ListGroup as="ol" numbered>
      {foodItems.length > 0 &&
        foodItems.map((foodItem) => {
          return (
            <ListGroup.Item
              key={foodItem.name}
              style={{ cursor: "pointer" }}
              action
              onClick={() => onAddItem(foodItem)}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="fw-bold">{foodItem.name}</div>
              <Badge bg={`${foodItem.count ? "primary" : ""}`} pill>
                {foodItem.count}
              </Badge>
            </ListGroup.Item>
          );
        })}
    </ListGroup>
  );
}

export default FoodList;
