const information = require("./information");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hello I'm ${information.lastName} ${information.firstName} from ${information.campusName}!`,
    e: "oO",
    T: "U",
  })
);
