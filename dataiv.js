var quicknessLabel = "Self Worth";
var xpLabel = "XP";

var Annoying = {
  name: "Annoying Sidekick",
  hp: 6,
  defense: 0,
  quickness: 6,
  tolerance: 15,
  sexual: 9,
  smarts: 8,
  items: ["Basket of Lemons"]
};

var Bartlebut = {
  name: "Bartlebut",
  hp: 9,
  defense: 0,
  quickness: 12,
  tolerance: 9,
  sexual: 10,
  smarts: 7,
  items: ["Pantsless Hatchet"]
};

var Daiquirin = {
  name: "Daiquirin",
  hp: 7,
  defense: 0,
  quickness: 14,
  tolerance: 14,
  sexual: 12,
  smarts: 12,
  items: ["Hoppy Staff"]
};

var Chuglox = {
  name: "Chuglox",
  hp: 8,
  defense: 0,
  quickness: 9,
  tolerance: 10,
  sexual: 15,
  smarts: 9,
  items: ["Blowhard Sword"]
};

var characters = [
  Annoying,
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
  },
  {
    name: "Bracelet of Bouncer Ability",
    cost: 100,
    desc: "+1 to all Saving Throws (once per quest)",
    use: function() {
      var savingThrows = [
        "#quickness",
        "#sexual",
        "#tolerance",
        "#smarts",
      ];
      for (var i = 0; i < savingThrows.length; i++) {
        $(savingThrows[i]).val(+$(savingThrows[i]).val() + 1);
      }
    }
  },
  {
    name: "Bracelet of Bouncer Ability",
    cost: 100,
    desc: "+1 Maximum HP (once per quest)",
    use: function() {
      $("maxhp").val(+$("maxhp").val() + 1);
    }
  }
];

var items = [
  {
    name: "Basket of Lemons",
    cost: 70,
    desc: "D4 + 1",
    user: characters[0],
    buy: setAttack
  },
  {
    name: "Sack of Grapefruit",
    cost: 110,
    desc: "D8 - 1",
    user: characters[0],
    buy: setAttack
  },
  {
    name: "Fanny Pack of Avocados",
    cost: 175,
    desc: "D8",
    user: characters[0],
    buy: setAttack
  },
  {
    name: "Blowhard Sword",
    cost: 60,
    desc: "D6",
    user: characters[1],
    buy: setAttack
  },
  {
    name: "Bromance Sword",
    cost: 160,
    desc: "D6 + 1",
    user: characters[1],
    buy: setAttack
  },
  {
    name: "Stein Slayer",
    cost: 220,
    desc: "D6 + 2",
    user: characters[1],
    buy: setAttack
  },
  {
    name: "Hoppy Staff",
    cost: 60,
    desc: "D4",
    user: characters[2],
    buy: setAttack
  },
  {
    name: "Aged Staff",
    cost: 100,
    desc: "D6",
    user: characters[2],
    buy: setAttack
  },
  {
    name: "Rod of Enemy Drink Spilling",
    cost: 160,
    desc: "D8",
    user: characters[2],
    buy: setAttack
  },
  {
    name: "Pantsless Hatchet",
    cost: 50,
    desc: "D6",
    user: characters[3],
    buy: setAttack
  },
  {
    name: "Queasy Axe",
    cost: 150,
    desc: "D8",
    user: characters[3],
    buy: setAttack
  },
  {
    name: "Foam Chopper",
    cost: 250,
    desc: "D8 + 1",
    user: characters[3],
    buy: setAttack
  },
  {
    name: "Keg Mail",
    cost: 75,
    desc: "Defence +1",
    buy: incDefence,
    sell: decDefence
  },
  {
    name: "Sobering Gauntlets",
    cost: 75,
    desc: "Defence +1",
    buy: incDefence,
    sell: decDefence
  },
  {
    name: "Helmet of Heaving",
    cost: 75,
    desc: "Defence +1",
    buy: incDefence,
    sell: decDefence
  }
];
