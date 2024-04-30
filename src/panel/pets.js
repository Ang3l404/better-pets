// "use strict";
// var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
//     if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
//         if (ar || !(i in from)) {
//             if (!ar) ar = Array.prototype.slice.call(from, 0, i);
//             ar[i] = from[i];
//         }
//     }
//     return to.concat(ar || Array.prototype.slice.call(from));
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.normalizeColor = exports.availableColors = exports.createPet = exports.InvalidPetException = exports.PetCollection = exports.PetElement = void 0;
// var types_1 = require("../common/types");
// var cat_1 = require("./pets/cat");
// var chicken_1 = require("./pets/chicken");
// var clippy_1 = require("./pets/clippy");
// var cockatiel_1 = require("./pets/cockatiel");
// var crab_1 = require("./pets/crab");
// var dog_1 = require("./pets/dog");
// var fox_1 = require("./pets/fox");
// var mod_1 = require("./pets/mod");
// var rocky_1 = require("./pets/rocky");
// var rubberduck_1 = require("./pets/rubberduck");
// var snake_1 = require("./pets/snake");
// var totoro_1 = require("./pets/totoro");
// var zappy_1 = require("./pets/zappy");
// var rat_1 = require("./pets/rat");
// var turtle_1 = require("./pets/turtle");
// var PetElement = /** @class */ (function () {
//     function PetElement(el, collision, speech, pet, color, type) {
//         this.el = el;
//         this.collision = collision;
//         this.speech = speech;
//         this.pet = pet;
//         this.color = color;
//         this.type = type;
//     }
//     PetElement.prototype.remove = function () {
//         this.el.remove();
//         this.collision.remove();
//         this.speech.remove();
//         this.color = types_1.PetColor.null;
//         this.type = types_1.PetType.null;
//     };
//     return PetElement;
// }());
// exports.PetElement = PetElement;
// var PetCollection = /** @class */ (function () {
//     function PetCollection() {
//         this._pets = new Array(0);
//     }
//     Object.defineProperty(PetCollection.prototype, "pets", {
//         get: function () {
//             return this._pets;
//         },
//         enumerable: false,
//         configurable: true
//     });
//     PetCollection.prototype.push = function (pet) {
//         this._pets.push(pet);
//     };
//     PetCollection.prototype.reset = function () {
//         this._pets.forEach(function (pet) {
//             pet.remove();
//         });
//         this._pets = [];
//     };
//     PetCollection.prototype.locate = function (name) {
//         return this._pets.find(function (collection) {
//             return collection.pet.name === name;
//         });
//     };
//     PetCollection.prototype.remove = function (name) {
//         this._pets.forEach(function (pet) {
//             if (pet.pet.name === name) {
//                 pet.remove();
//             }
//         });
//         this._pets = this._pets.filter(function (pet) {
//             return pet.pet.name !== name;
//         });
//     };
//     PetCollection.prototype.seekNewFriends = function () {
//         var _this = this;
//         if (this._pets.length <= 1) {
//             return [];
//         } // You can't be friends with yourself.
//         var messages = new Array(0);
//         this._pets.forEach(function (petInCollection) {
//             if (petInCollection.pet.hasFriend) {
//                 return;
//             } // I already have a friend!
//             _this._pets.forEach(function (potentialFriend) {
//                 if (potentialFriend.pet.hasFriend) {
//                     return;
//                 } // Already has a friend. sorry.
//                 if (!potentialFriend.pet.canChase) {
//                     return;
//                 } // Pet is busy doing something else.
//                 if (potentialFriend.pet.left > petInCollection.pet.left &&
//                     potentialFriend.pet.left <
//                         petInCollection.pet.left + petInCollection.pet.width) {
//                     // We found a possible new friend..
//                     console.log(petInCollection.pet.name, ' wants to be friends with ', potentialFriend.pet.name, '.');
//                     if (petInCollection.pet.makeFriendsWith(potentialFriend.pet)) {
//                         potentialFriend.pet.showSpeechBubble('❤️', 2000);
//                         petInCollection.pet.showSpeechBubble('❤️', 2000);
//                     }
//                 }
//             });
//         });
//         return messages;
//     };
//     return PetCollection;
// }());
// exports.PetCollection = PetCollection;
// var InvalidPetException = /** @class */ (function () {
//     function InvalidPetException(message) {
//         this.message = message;
//     }
//     return InvalidPetException;
// }());
// exports.InvalidPetException = InvalidPetException;
// function createPet(petType, el, collision, speech, size, left, bottom, petRoot, floor, name) {
//     if (name === undefined || name === null || name === '') {
//         throw new InvalidPetException('name is undefined');
//     }
//     var standardPetArguments = [el, collision, speech, size, left, bottom, petRoot, floor, name];
//     switch (petType) {
//         case types_1.PetType.cat:
//             return new (cat_1.Cat.bind.apply(cat_1.Cat, __spreadArray(__spreadArray([void 0], standardPetArguments, false), [types_1.PetSpeed.normal], false)))();
//         case types_1.PetType.chicken:
//             return new (chicken_1.Chicken.bind.apply(chicken_1.Chicken, __spreadArray(__spreadArray([void 0], standardPetArguments, false), [types_1.PetSpeed.normal], false)))();
//         case types_1.PetType.dog:
//             return new (dog_1.Dog.bind.apply(dog_1.Dog, __spreadArray(__spreadArray([void 0], standardPetArguments, false), [types_1.PetSpeed.normal], false)))();
//         case types_1.PetType.fox:
//             return new (fox_1.Fox.bind.apply(fox_1.Fox, __spreadArray(__spreadArray([void 0], standardPetArguments, false), [types_1.PetSpeed.fast], false)))();
//         case types_1.PetType.crab:
//             return new (crab_1.Crab.bind.apply(crab_1.Crab, __spreadArray(__spreadArray([void 0], standardPetArguments, false), [types_1.PetSpeed.slow], false)))();
//         case types_1.PetType.clippy:
//             return new (clippy_1.Clippy.bind.apply(clippy_1.Clippy, __spreadArray(__spreadArray([void 0], standardPetArguments, false), [types_1.PetSpeed.slow], false)))();
//         case types_1.PetType.mod:
//             return new (mod_1.Mod.bind.apply(mod_1.Mod, __spreadArray(__spreadArray([void 0], standardPetArguments, false), [types_1.PetSpeed.normal], false)))();
//         case types_1.PetType.totoro:
//             return new (totoro_1.Totoro.bind.apply(totoro_1.Totoro, __spreadArray(__spreadArray([void 0], standardPetArguments, false), [types_1.PetSpeed.normal], false)))();
//         case types_1.PetType.snake:
//             return new (snake_1.Snake.bind.apply(snake_1.Snake, __spreadArray(__spreadArray([void 0], standardPetArguments, false), [types_1.PetSpeed.verySlow], false)))();
//         case types_1.PetType.rubberduck:
//             return new (rubberduck_1.RubberDuck.bind.apply(rubberduck_1.RubberDuck, __spreadArray(__spreadArray([void 0], standardPetArguments, false), [types_1.PetSpeed.fast], false)))();
//         case types_1.PetType.zappy:
//             return new (zappy_1.Zappy.bind.apply(zappy_1.Zappy, __spreadArray(__spreadArray([void 0], standardPetArguments, false), [types_1.PetSpeed.veryFast], false)))();
//         case types_1.PetType.rocky:
//             return new (rocky_1.Rocky.bind.apply(rocky_1.Rocky, __spreadArray(__spreadArray([void 0], standardPetArguments, false), [types_1.PetSpeed.still], false)))();
//         case types_1.PetType.cockatiel:
//             return new (cockatiel_1.Cockatiel.bind.apply(cockatiel_1.Cockatiel, __spreadArray(__spreadArray([void 0], standardPetArguments, false), [types_1.PetSpeed.normal], false)))();
//         case types_1.PetType.rat:
//             return new (rat_1.Rat.bind.apply(rat_1.Rat, __spreadArray(__spreadArray([void 0], standardPetArguments, false), [types_1.PetSpeed.normal], false)))();
//         case types_1.PetType.turtle:
//             return new (turtle_1.Turtle.bind.apply(turtle_1.Turtle, __spreadArray(__spreadArray([void 0], standardPetArguments, false), [types_1.PetSpeed.verySlow], false)))();
//         default:
//             throw new InvalidPetException("Pet type doesn't exist");
//     }
// }
// exports.createPet = createPet;
// function availableColors(petType) {
//     switch (petType) {
//         case types_1.PetType.cat:
//             return cat_1.Cat.possibleColors;
//         case types_1.PetType.chicken:
//             return chicken_1.Chicken.possibleColors;
//         case types_1.PetType.dog:
//             return dog_1.Dog.possibleColors;
//         case types_1.PetType.fox:
//             return fox_1.Fox.possibleColors;
//         case types_1.PetType.crab:
//             return crab_1.Crab.possibleColors;
//         case types_1.PetType.clippy:
//             return clippy_1.Clippy.possibleColors;
//         case types_1.PetType.mod:
//             return mod_1.Mod.possibleColors;
//         case types_1.PetType.totoro:
//             return totoro_1.Totoro.possibleColors;
//         case types_1.PetType.snake:
//             return snake_1.Snake.possibleColors;
//         case types_1.PetType.rubberduck:
//             return rubberduck_1.RubberDuck.possibleColors;
//         case types_1.PetType.zappy:
//             return zappy_1.Zappy.possibleColors;
//         case types_1.PetType.rocky:
//             return rocky_1.Rocky.possibleColors;
//         case types_1.PetType.cockatiel:
//             return cockatiel_1.Cockatiel.possibleColors;
//         case types_1.PetType.rat:
//             return rat_1.Rat.possibleColors;
//         case types_1.PetType.turtle:
//             return turtle_1.Turtle.possibleColors;
//         default:
//             throw new InvalidPetException("Pet type doesn't exist");
//     }
// }
// exports.availableColors = availableColors;
/**
 * Some pets can only have certain colors, this makes sure they haven't been misconfigured.
 * @param petColor
 * @param petType
 * @returns normalized color
 */
// function normalizeColor(petColor, petType) {
//     var colors = availableColors(petType);
//     if (colors.includes(petColor)) {
//         return petColor;
//     }
//     else {
//         return colors[0];
//     }
// }
// exports.normalizeColor = normalizeColor;
