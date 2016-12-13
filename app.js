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
  setItems(char.items);
};

var setup = function() {
  setCharacter(characters[0]);
  $("#stackable").html(stackable.map(renderStackableItem).join(""));
  $("#character").html(characters.map(createCharacterOption).join(""));
  validateItems();
};

var renderStackableItem = function(item) {
  return "<li class='pure-g'><span class='pure-u-1-3'><input type='number' value='0' min='0' style='display:inline-block;width:40px;'> x <b>" + item.name + "</b>:</span>"
    + "<span class='pure-u-1-3'>" + item.desc + "</span>"
    + "<span class='pure-u-1-3'>"
    + "<button item=\"" + item.name + "\" action=\"use\" class='pure-button pure-button-primary button-xsmall'>Use</button>"
    + "<button item=\"" + item.name + "\" action=\"buy\" coins='" + item.cost + "' class='pure-button button-xsmall'>Buy $" + item.cost + "</button>"
    + "<button item=\"" + item.name + "\" action=\"sell\" class='pure-button button-xsmall'>Sell $" + toDollars(item.cost / 2) + "</button>"
    + "</span></li>";
};

var setItems = function(set) {
  currentItems = set.slice(0);
  var store = items.filter(function(item) {
    return !item.user || currentCharacter == item.user;
  });
  $("#items").html(store.map(itemHtml).join(""));
};

var itemHtml = function(item) {
  var html = "<li class='pure-g'><b class='pure-u-1-3'>" + item.name + ":</b>"
    + "<span class='pure-u-1-3'>" + item.desc + "</span><span class='pure-u-1-3'>";
  if (currentItems.indexOf(item.name) == -1) {
    html += "<button item=\"" + item.name + "\" action=\"buy\" coins='" + item.cost + "' class='pure-button pure-button-primary'>Buy $" + item.cost + "</button>";
  } else {
    html += "<button item=\"" + item.name + "\" action=\"sell\" class='pure-button pure-button-primary'>Sell $" + toDollars(item.cost / 2) + "</button>";
  }
  html += "</span></li>";
  return html;
};

var addItem = function(item) {
  setItems(currentItems.concat([item]));
};

var removeItem = function(item) {
  currentItems.splice(currentItems.indexOf(item), 1);
  setItems(currentItems);
};

var removeStackable = function(item) {
  currentStackable[item.name] = currentStackable[item.name] - 1;
};

var findItem = function(name) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name == name) {
      return items[i];
    }
  }
};

var findStackable = function(name) {
  for (var i = 0; i < items.length; i++) {
    if (stackable[i].name == name) {
      return stackable[i];
    }
  }
};

$("#character").change(function() {
  setCharacter(characters[this.value]);
});

$("#stackable").click(function(e) {
  var target = $(e.target);
  if (target[0].tagName.toLowerCase() != "button") {
    return;
  }
  var item = findStackable(target.attr("item"));
  var input = target.parent().parent().find("input");
  var num = +input.val();
  if (target.attr("action") == "buy") {
    input.val(num + 1);
    setCoins(+$("#coins").val() - item.cost);
    if (item.buy) {
      item.buy();
    }
  } else if (target.attr("action") == "sell") {
    if (num <= 0) {
      return;
    }
    input.val(num - 1);
    setCoins(+$("#coins").val() + item.cost / 2);
    if (item.sell) {
      item.sell();
    }
  } else {
    if (num <= 0) {
      return;
    }
    input.val(num - 1);
    if (item.use) {
      item.use();
    }
  }
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
  validateItems();
};

var validateItems = function() {
  var coins = +$("#coins").val();
  $("[coins]").each(function(i, el) {
    $(el).toggleClass("pure-button-disabled", +$(el).attr("coins") > coins);
  });
};

$("#xplabel").html(xpLabel);
$("#quicknesslabel").html(quicknessLabel);
$("#coins").change(validateItems);
setup();