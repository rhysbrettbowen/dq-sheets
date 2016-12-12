var currentItems = [];

var createCharacterOption = function(char, i) {
  return "<option value=\"" + i + "\">" + char.name + "</option>";
}

var setCharacter = function(char) {
  currentCharacter = char;
  $("#maxhp").val(char.hp);
  $("#currenthp").val(char.hp);
  $("#attack").val(findItem(char.items[0]).desc);
  $("#defense").val(char.defense);
  $("#quickness").val(char.quickness);
  $("#sexual").val(char.sexual);
  $("#tolerance").val(char.tolerance);
  $("#smarts").val(char.smarts);
  $("#xp").val(0);
  setCoins(0);
  $("#ales").val(0);
  setItems(char.items);
};

var setup = function() {
  setCharacter(characters[0]);
  $("#character").html(characters.map(createCharacterOption).join(""));
};

var setItems = function(set) {
  currentItems = set.slice(0);
  var store = items.filter(function(item) {
    return !item.user || currentCharacter == item.user;
  });
  $("#items").html(store.map(itemHtml).join(""));
};

var itemHtml = function(item) {
  var html = "<li><label><b>" + item.name + "</b>: " + item.desc + " &nbsp;&nbsp;";
  if (currentItems.indexOf(item.name) == -1) {
    html += "<button item=\"" + item.name + "\" action=\"buy\">Buy $" + item.cost + "</button>";
  } else {
    html += "<button item=\"" + item.name + "\" action=\"sell\">Sell $" + toDollars(item.cost / 2) + "</button>";
  }
  html += "</label></li>";
  return html;
}

var addItem = function(item) {
  setItems(currentItems.concat([item]));
}

var removeItem = function(item) {
  currentItems.splice(currentItems.indexOf(item), 1);
  setItems(currentItems);
}

var findItem = function(name) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name == name) {
      return items[i];
    }
  }
}

$("#character").change(function() {
  setCharacter(characters[this.value]);
});

$("#items").click(function(e) {
  var target = $(e.target);
  if (target[0].tagName.toLowerCase() != "button") {
    return;
  }
  var item = findItem(target.attr("item"));
  if (target.attr("action") == "buy") {
    addItem(target.attr("item"));
    setCoins(+$("#coins").val() - item.cost);
    if (item.buy) {
      item.buy();
    }
  } else {
    removeItem(target.attr("item"));
    setCoins(+$("#coins").val() + item.cost / 2);
    if (item.sell) {
      item.sell();
    }
  }
});

var toDollars = function(num) {
  return parseFloat(num).toFixed(2);
};

var setCoins = function(num) {
  $("#coins").val(toDollars(num));
};

setup();