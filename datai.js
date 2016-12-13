var quicknessLabel = "Quickness:";
var xpLabel = "XP:";

var Malty = {
  name: "Malty",
  hp: 7,
  defense: 0,
  quickness: 14,
  tolerance: 14,
  sexual: 14,
  smarts: 14,
  items: ["Shoddy Shiv"]
};

var Bartlebut = {
  name: "Bartlebut",
  hp: 10,
  defense: 0,
  quickness: 7,
  tolerance: 7,
  sexual: 7,
  smarts: 7,
  items: ["Flacid Axe"]
};

var Daiquirin = {
  name: "Daiquirin",
  hp: 8,
  defense: 0,
  quickness: 12,
  tolerance: 12,
  sexual: 12,
  smarts: 12,
  items: ["Withered Staff"]
};

var Chuglox = {
  name: "Chuglox",
  hp: 9,
  defense: 0,
  quickness: 10,
  tolerance: 10,
  sexual: 14,
  smarts: 10,
  items: ["Sword of Sobriety"]
};

var characters = [
  Malty,
  Chuglox,
  Daiquirin,
  Bartlebut
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

var stackable = [
  {
    name: "Bellow Ales",
    cost: 50,
    desc: "Use at death to restore D6 of HP",
    use: function() {
      $("#currenthp").val(Math.floor(Math.random() * 6) + 1);
    }
  }
];

var items = [
  {
    name: "Shoddy Shiv",
    cost: 40,
    desc: "D4 + 1",
    user: characters[0],
    buy: setAttack
  },
  {
    name: "Draught Daggers",
    cost: 100,
    desc: "D6",
    user: characters[0],
    buy: setAttack
  },
  {
    name: "Killing Knives",
    cost: 225,
    desc: "D6 + 1",
    user: characters[0],
    buy: setAttack
  },
  {
    name: "Sword of Sobriety",
    cost: 50,
    desc: "D6",
    user: characters[1],
    buy: setAttack
  },
  {
    name: "Sloppy Scimitar",
    cost: 110,
    desc: "D6 + 1",
    user: characters[1],
    buy: setAttack
  },
  {
    name: "Bottle Opener Sword",
    cost: 260,
    desc: "D6 + 2",
    user: characters[1],
    buy: setAttack
  },
  {
    name: "Withered Staff",
    cost: 30,
    desc: "D4",
    user: characters[2],
    buy: setAttack
  },
  {
    name: "Girly Drink Staff",
    cost: 80,
    desc: "D4 + 1",
    user: characters[2],
    buy: setAttack
  },
  {
    name: "Molotov Wand",
    cost: 200,
    desc: "D4 + 2",
    user: characters[2],
    buy: setAttack
  },
  {
    name: "Flacid Axe",
    cost: 60,
    desc: "D6",
    user: characters[3],
    buy: setAttack
  },
  {
    name: "Bacchus Axe",
    cost: 180,
    desc: "D8",
    user: characters[3],
    buy: setAttack
  },
  {
    name: "Keg Destroyer",
    cost: 380,
    desc: "D8 + 1",
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
