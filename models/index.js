var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

module.exports.Book = require("./book.js");
// 
// module.exports.Gargoyle = require("./gargoyle.js");
// module.exports.Goblin = require("./goblin.js");
// module.exports.Gnome = require("./gnome.js");
