import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <div>
      {foodItems.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
}

export default MenuList;
