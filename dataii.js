var John = {
  name: "John Bellow",
  hp: 8,
  attack: "D4",
  defense: 0,
  quickness: 14,
  tolerance: 14,
  sexual: 14,
  smarts: 14,
  items: ["Garbage Wand"]
};

var Hilda = {
  name: "Hilda Muckraker",
  hp: 7,
  attack: "D4 + 1",
  defense: 0,
  quickness: 12,
  tolerance: 9,
  sexual: 13,
  smarts: 14,
  items: ["Fallow Bottle"]
};

var Yeddy = {
  name: "Yeddy Vedder",
  hp: 9,
  attack: "D6",
  defense: 0,
  quickness: 11,
  tolerance: 14,
  sexual: 11,
  smarts: 11,
  items: ["Femur Bone"]
};

var Chuglox = {
  name: "Chuglox (Stout)",
  hp: 7,
  attack: "D8 - 1",
  defense: 0,
  quickness: 7,
  tolerance: 14,
  sexual: 7,
  smarts: 7,
  items: ["Bottle Cap Cutlass"]
};

var characters = [
  John,
  Hilda,
  Yeddy,
  Chuglox
];

var setAttack = function() {
  $("#attack").val(this.desc);
};

var incDefence = function() {
  $("#defense").val(+$("#defense").val() + 1);
};

var decDefence = function() {
  $("#defense").val(+$("#defense").val() - 1);
};

var items = [
  {
    name: "Garbage Wand",
    cost: 40,
    desc: "D4",
    user: characters[0],
    buy: setAttack
  },
  {
    name: "Wand of Friendship",
    cost: 100,
    desc: "D4 + 1",
    user: characters[0],
    buy: setAttack
  },
  {
    name: "Pepper Spray Wand",
    cost: 180,
    desc: "D6",
    user: characters[0],
    buy: setAttack
  },
  {
    name: "Fallow Bottle",
    cost: 20,
    desc: "D4 + 1",
    user: characters[1],
    buy: setAttack
  },
  {
    name: "Bellow Bottle",
    cost: 110,
    desc: "D6",
    user: characters[1],
    buy: setAttack
  },
  {
    name: "Wizard's Wine Flask",
    cost: 260,
    desc: "D8",
    user: characters[1],
    buy: setAttack
  },
  {
    name: "Femur Bone",
    cost: 80,
    desc: "D6",
    user: characters[2],
    buy: setAttack
  },
  {
    name: "Booze Hound Rib",
    cost: 150,
    desc: "D6 + 1",
    user: characters[2],
    buy: setAttack
  },
  {
    name: "Mammoth Tusk",
    cost: 300,
    desc: "D6 + 2",
    user: characters[2],
    buy: setAttack
  },
  {
    name: "Bottle Cap Cutlass",
    cost: 60,
    desc: "D8 - 1",
    user: characters[3],
    buy: setAttack
  },
  {
    name: "Sword of Win",
    cost: 220,
    desc: "D6 + 1",
    user: characters[3],
    buy: setAttack
  },
  {
    name: "Pain Bringer",
    cost: 340,
    desc: "D6 + 2",
    user: characters[3],
    buy: setAttack
  },
  {
    name: "Battle Britches",
    cost: 75,
    desc: "Defence +1",
    buy: incDefence,
    sell: decDefence
  },
  {
    name: "Helmet of Hangover Resistance",
    cost: 75,
    desc: "Defence +1",
    buy: incDefence,
    sell: decDefence
  },
  {
    name: "Belt of 100 Crunches",
    cost: 75,
    desc: "Defence +1",
    buy: incDefence,
    sell: decDefence
  },
  {
    name: "Bracelet of Bouncer Ability",
    cost: 75,
    desc: "Defence +1",
    buy: incDefence,
    sell: decDefence
  }
];
