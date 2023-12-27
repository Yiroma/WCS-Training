function Enemy(name, level, emoji, attackName) {
  this.name = name;
  this.level = level;
  this.emoji = emoji;
  this.attackName = attackName;
}

Enemy.prototype.attack = function () {
  return `${this.name} ${this.attackName} you!`;
};

const enemies = [
  new Enemy("Spider", 1, "🕷", "bites"),
  new Enemy("Snake", 6, "🐍", "bites"),
  new Enemy("Bear", 25, "🐻", "scratches"),
];

console.log(enemies[0]);
console.log(enemies[0].attack());

function Hero(name, level, weapon, sayHello) {
  this.Hero = name;
  this.Hero = level;
  this.Hero = weapon;
  this.sayHello = sayHello;
}

Hero.prototype.sayhello = function () {
  return `${this.name} say: "${this.sayHello}". `;
};

const megaman = new Hero("Megaman", 35, "Buster", "Hey ! I'm Megaman !");

console.log(megaman); // Hero { Hero: 'Buster', sayHello: "Hey ! I'm Megaman !" }
console.log(megaman.sayHello); // Hey ! I'm Megaman !
