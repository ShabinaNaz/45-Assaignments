function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log("-".concat(items[i]));
    }
}
console.log("enjoy your sandwich shabina naz");
sandwich('capsicum', 'tomato', 'chicken');
sandwich('beef', 'chicken');
sandwich('garlic', 'chicken', 'mayo sauce');
