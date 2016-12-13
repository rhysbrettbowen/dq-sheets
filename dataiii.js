var quicknesslabel = "Omnipotence";
var xplabel = "DP";

var Ermagerd = {
  name: "Ermagerd The Unicorn",
  hp: 7,
  defense: 0,
  quickness: 14,
  tolerance: 14,
  sexual: 15,
  smarts: 14,
  items: ["Uni-corkscrew"]
};

var Halthor = {
  name: "Halthor: God of Fists",
  hp: 10,
  defense: 0,
  quickness: 10,
  tolerance: 10,
  sexual: 8,
  smarts: 7,
  items: ["Troy & Abed"]
};

var Norod = {
  name: "Norod The All Knowing",
  hp: 9,
  defense: 0,
  quickness: 12,
  tolerance: 10,
  sexual: 7,
  smarts: 14,
  items: ["Irony Lute"]
};

var Chuglox = {
  name: "Chuglox (Godly)",
  hp: 8,
  defense: 0,
  quickness: 6,
  tolerance: 6,
  sexual: 14,
  smarts: 6,
  items: ["Microbrew Sword"]
};

var characters = [
  Ermagerd,
  Halthor,
  Norod,
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
    name: "Uni-corkscrew",
    cost: 70,
    desc: "D4 + 1",
    user: characters[0],
    buy: setAttack
  },
  {
    name: "Sparkle Horn",
    cost: 125,
    desc: "D6 + 1",
    user: characters[0],
    buy: setAttack
  },
  {
    name: "Rainbow Smash",
    cost: 250,
    desc: "D8",
    user: characters[0],
    buy: setAttack
  },
  {
    name: "Troy & Abed",
    cost: 80,
    desc: "D6",
    user: characters[1],
    buy: setAttack
  },
  {
    name: "Avon & Stringer",
    cost: 150,
    desc: "D6 + 1",
    user: characters[1],
    buy: setAttack
  },
  {
    name: "Shatner & Picard",
    cost: 300,
    desc: "D6 + 2",
    user: characters[1],
    buy: setAttack
  },
  {
    name: "Irony Lute",
    cost: 50,
    desc: "D6 - 1",
    user: characters[2],
    buy: setAttack
  },
  {
    name: "Trendy Lute",
    cost: 100,
    desc: "D6",
    user: characters[2],
    buy: setAttack
  },
  {
    name: "Drop D Lute",
    cost: 240,
    desc: "D4 + 2",
    user: characters[2],
    buy: setAttack
  },
  {
    name: "Microbrew Sword",
    cost: 60,
    desc: "D6 + 1",
    user: characters[3],
    buy: setAttack
  },
  {
    name: "Overly Long Sword",
    cost: 260,
    desc: "D6 + 2",
    user: characters[3],
    buy: setAttack
  },
  {
    name: "Godly Gold Sword",
    cost: 400,
    desc: "D6 + 3",
    user: characters[3],
    buy: setAttack,
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
