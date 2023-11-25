import Table from "react-bootstrap/Table";

function FoodDetailsTable({ foodItems }) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>
            <span className="d-flex justify-content-center">#</span>
          </th>
          <th>
            <span className="d-flex justify-content-center">Name</span>
          </th>
          <th>
            <span className="d-flex justify-content-center">Calories</span>
          </th>
          <th>
            <span className="d-flex justify-content-center">Protein</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {foodItems &&
          foodItems.map((foodItem, index) => {
            const { name, calories, protein } = foodItem;
            return (
              <tr key={name}>
                <td>
                  <span className="d-flex justify-content-center">
                    {index + 1}
                  </span>
                </td>
                <td className="d-flex justify-content-center">{name}</td>
                <td>
                  <span className="d-flex justify-content-center">
                    {calories}
                  </span>
                </td>
                <td>
                  <span className="d-flex justify-content-center">
                    {protein}
                  </span>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default FoodDetailsTable;
