const apple = {
  name: "Apple",
  color: "Green",
  shape: "Round",
};

for (let key in apple) {
  console.log(`${key}: ${apple[key]}`);
}

const person = {
  firstName: "Bob",
  lastName: "Doe",
  city: "Berlin",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
