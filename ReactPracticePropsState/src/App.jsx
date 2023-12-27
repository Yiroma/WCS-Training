import foodItems from "./data";

import MenuList from "./components/MenuList";

import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Wild Restaurant Menu</h1>
      <MenuList foodItems={foodItems} />
      {/* pass the variable foodItems as props to MenuList component */}
    </div>
  );
};

export default App;
