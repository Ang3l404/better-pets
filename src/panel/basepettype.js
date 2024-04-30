let extd, iSE, bPT;

extd = require("../extends");

iSE = function (fst, pT) {
  Error.call(this, `Invalid State ${fst} for pet type ${pT}`);
  this.fst = fst;
  this.pT = pT;
  return this;
}
extd(iSE, Error);

bPT = function (sL, spe, size) {
  
}


// var BasePetType = /** @class */ (function () {
//     function BasePetType(spriteElement, collisionElement, speechElement, size, left, bottom, petRoot, floor, name, speed) {
//         this.label = 'base';
//         this.sequence = {
//             startingState: "sit-idle" /* States.sitIdle */,
//             sequenceStates: [],
//         };
//         this.el = spriteElement;
//         this.collision = collisionElement;
//         this.speech = speechElement;
//         this.petRoot = petRoot;
//         this._floor = floor;
//         this._left = left;
//         this._bottom = bottom;
//         this.initSprite(size, left, bottom);
//         this.currentStateEnum = this.sequence.startingState;
//         this.currentState = (0, states_1.resolveState)(this.currentStateEnum, this);
//         this._name = name;
//         this._size = size;
//         this._speed = this.randomizeSpeed(speed);
//         this.constructor.count += 1;
//     }
//     BasePetType.prototype.initSprite = function (petSize, left, bottom) {
//         this.el.style.left = "".concat(left, "px");
//         this.el.style.bottom = "".concat(bottom, "px");
//         this.el.style.width = 'auto';
//         this.el.style.height = 'auto';
//         this.el.style.maxWidth = "".concat(this.calculateSpriteWidth(petSize), "px");
//         this.el.style.maxHeight = "".concat(this.calculateSpriteWidth(petSize), "px");
//         this.collision.style.left = "".concat(left, "px");
//         this.collision.style.bottom = "".concat(bottom, "px");
//         this.collision.style.width = "".concat(this.calculateSpriteWidth(petSize), "px");
//         this.collision.style.height = "".concat(this.calculateSpriteWidth(petSize), "px");
//         this.speech.style.left = "".concat(left, "px");
//         this.speech.style.bottom = "".concat(bottom + this.calculateSpriteWidth(petSize), "px");
//         this.hideSpeechBubble();
//     };
//     Object.defineProperty(BasePetType.prototype, "left", {
//         get: function () {
//             return this._left;
//         },
//         enumerable: false,
//         configurable: true
//     });
//     Object.defineProperty(BasePetType.prototype, "bottom", {
//         get: function () {
//             return this._bottom;
//         },
//         enumerable: false,
//         configurable: true
//     });
//     BasePetType.prototype.repositionAccompanyingElements = function () {
//         this.collision.style.left = "".concat(this._left, "px");
//         this.collision.style.bottom = "".concat(this._bottom, "px");
//         this.speech.style.left = "".concat(this._left, "px");
//         this.speech.style.bottom = "".concat(this._bottom + this.calculateSpriteWidth(this._size), "px");
//     };
//     BasePetType.prototype.calculateSpriteWidth = function (size) {
//         if (size === types_1.PetSize.nano) {
//             return 30;
//         }
//         else if (size === types_1.PetSize.small) {
//             return 40;
//         }
//         else if (size === types_1.PetSize.medium) {
//             return 55;
//         }
//         else if (size === types_1.PetSize.large) {
//             return 110;
//         }
//         else {
//             return 30; // Shrug
//         }
//     };
//     BasePetType.prototype.positionBottom = function (bottom) {
//         this._bottom = bottom;
//         this.el.style.bottom = "".concat(this._bottom, "px");
//         this.repositionAccompanyingElements();
//     };
//     BasePetType.prototype.positionLeft = function (left) {
//         this._left = left;
//         this.el.style.left = "".concat(this._left, "px");
//         this.repositionAccompanyingElements();
//     };
//     Object.defineProperty(BasePetType.prototype, "width", {
//         get: function () {
//             return this.el.width;
//         },
//         enumerable: false,
//         configurable: true
//     });
//     Object.defineProperty(BasePetType.prototype, "floor", {
//         get: function () {
//             return this._floor;
//         },
//         enumerable: false,
//         configurable: true
//     });
//     Object.defineProperty(BasePetType.prototype, "hello", {
//         get: function () {
//             // return the sound of the name of the animal
//             return " says hello \uD83D\uDC4B!";
//         },
//         enumerable: false,
//         configurable: true
//     });
//     BasePetType.prototype.getState = function () {
//         return { currentStateEnum: this.currentStateEnum };
//     };
//     Object.defineProperty(BasePetType.prototype, "speed", {
//         get: function () {
//             return this._speed;
//         },
//         enumerable: false,
//         configurable: true
//     });
//     BasePetType.prototype.randomizeSpeed = function (speed) {
//         var min = speed * 0.7;
//         var max = speed * 1.3;
//         var newSpeed = Math.random() * (max - min) + min;
//         return newSpeed;
//     };
//     Object.defineProperty(BasePetType.prototype, "isMoving", {
//         get: function () {
//             return this._speed !== types_1.PetSpeed.still;
//         },
//         enumerable: false,
//         configurable: true
//     });
//     BasePetType.prototype.recoverFriend = function (friend) {
//         // Recover friends..
//         this._friend = friend;
//     };
//     BasePetType.prototype.recoverState = function (state) {
//         var _a;
//         // TODO : Resolve a bug where if it was swiping before, it would fail
//         // because holdState is no longer valid.
//         this.currentStateEnum = (_a = state.currentStateEnum) !== null && _a !== void 0 ? _a : "sit-idle" /* States.sitIdle */;
//         this.currentState = (0, states_1.resolveState)(this.currentStateEnum, this);
//         if (!(0, states_1.isStateAboveGround)(this.currentStateEnum)) {
//             // Reset the bottom of the sprite to the floor as the theme
//             // has likely changed.
//             this.positionBottom(this.floor);
//         }
//     };
//     Object.defineProperty(BasePetType.prototype, "canSwipe", {
//         get: function () {
//             return !(0, states_1.isStateAboveGround)(this.currentStateEnum);
//         },
//         enumerable: false,
//         configurable: true
//     });
//     Object.defineProperty(BasePetType.prototype, "canChase", {
//         get: function () {
//             return !(0, states_1.isStateAboveGround)(this.currentStateEnum) && this.isMoving;
//         },
//         enumerable: false,
//         configurable: true
//     });
//     BasePetType.prototype.showSpeechBubble = function (message, duration) {
//         var _this = this;
//         if (duration === void 0) { duration = 3000; }
//         this.speech.innerHTML = message;
//         this.speech.style.display = 'block';
//         setTimeout(function () {
//             _this.hideSpeechBubble();
//         }, duration);
//     };
//     BasePetType.prototype.hideSpeechBubble = function () {
//         this.speech.style.display = 'none';
//     };
//     BasePetType.prototype.swipe = function () {
//         if (this.currentStateEnum === "swipe" /* States.swipe */) {
//             return;
//         }
//         this.holdState = this.currentState;
//         this.holdStateEnum = this.currentStateEnum;
//         this.currentStateEnum = "swipe" /* States.swipe */;
//         this.currentState = (0, states_1.resolveState)(this.currentStateEnum, this);
//         this.showSpeechBubble('👋');
//     };
//     BasePetType.prototype.chase = function (ballState, canvas) {
//         this.currentStateEnum = "chase" /* States.chase */;
//         this.currentState = new states_1.ChaseState(this, ballState, canvas);
//     };
//     BasePetType.prototype.faceLeft = function () {
//         this.el.style.transform = 'scaleX(-1)';
//     };
//     BasePetType.prototype.faceRight = function () {
//         this.el.style.transform = 'scaleX(1)';
//     };
//     BasePetType.prototype.setAnimation = function (face) {
//         if (this.el.src.endsWith("_".concat(face, "_8fps.gif"))) {
//             return;
//         }
//         this.el.src = "".concat(this.petRoot, "_").concat(face, "_8fps.gif");
//     };
//     BasePetType.prototype.chooseNextState = function (fromState) {
//         // Work out next state
//         var possibleNextStates = undefined;
//         for (var i = 0; i < this.sequence.sequenceStates.length; i++) {
//             if (this.sequence.sequenceStates[i].state === fromState) {
//                 possibleNextStates =
//                     this.sequence.sequenceStates[i].possibleNextStates;
//             }
//         }
//         if (!possibleNextStates) {
//             throw new InvalidStateError(fromState, this.label);
//         }
//         // randomly choose the next state
//         var idx = Math.floor(Math.random() * possibleNextStates.length);
//         return possibleNextStates[idx];
//     };
//     BasePetType.prototype.nextFrame = function () {
//         var _a;
//         if (this.currentState.horizontalDirection === states_1.HorizontalDirection.left) {
//             this.faceLeft();
//         }
//         else if (this.currentState.horizontalDirection === states_1.HorizontalDirection.right) {
//             this.faceRight();
//         }
//         this.setAnimation(this.currentState.spriteLabel);
//         // What's my buddy doing?
//         if (this.hasFriend &&
//             this.currentStateEnum !== "chase-friend" /* States.chaseFriend */ &&
//             this.isMoving) {
//             if (((_a = this.friend) === null || _a === void 0 ? void 0 : _a.isPlaying) &&
//                 !(0, states_1.isStateAboveGround)(this.currentStateEnum)) {
//                 this.currentState = (0, states_1.resolveState)("chase-friend" /* States.chaseFriend */, this);
//                 this.currentStateEnum = "chase-friend" /* States.chaseFriend */;
//                 return;
//             }
//         }
//         var frameResult = this.currentState.nextFrame();
//         if (frameResult === states_1.FrameResult.stateComplete) {
//             // If recovering from swipe..
//             if (this.holdState && this.holdStateEnum) {
//                 this.currentState = this.holdState;
//                 this.currentStateEnum = this.holdStateEnum;
//                 this.holdState = undefined;
//                 this.holdStateEnum = undefined;
//                 return;
//             }
//             var nextState = this.chooseNextState(this.currentStateEnum);
//             this.currentState = (0, states_1.resolveState)(nextState, this);
//             this.currentStateEnum = nextState;
//         }
//         else if (frameResult === states_1.FrameResult.stateCancel) {
//             if (this.currentStateEnum === "chase" /* States.chase */) {
//                 var nextState = this.chooseNextState("idle-with-ball" /* States.idleWithBall */);
//                 this.currentState = (0, states_1.resolveState)(nextState, this);
//                 this.currentStateEnum = nextState;
//             }
//             else if (this.currentStateEnum === "chase-friend" /* States.chaseFriend */) {
//                 var nextState = this.chooseNextState("idle-with-ball" /* States.idleWithBall */);
//                 this.currentState = (0, states_1.resolveState)(nextState, this);
//                 this.currentStateEnum = nextState;
//             }
//         }
//     };
//     Object.defineProperty(BasePetType.prototype, "hasFriend", {
//         get: function () {
//             return this._friend !== undefined;
//         },
//         enumerable: false,
//         configurable: true
//     });
//     Object.defineProperty(BasePetType.prototype, "friend", {
//         get: function () {
//             return this._friend;
//         },
//         enumerable: false,
//         configurable: true
//     });
//     Object.defineProperty(BasePetType.prototype, "name", {
//         get: function () {
//             return this._name;
//         },
//         enumerable: false,
//         configurable: true
//     });
//     BasePetType.prototype.makeFriendsWith = function (friend) {
//         this._friend = friend;
//         console.log(this.name, ": I'm now friends ❤️ with ", friend.name);
//         return true;
//     };
//     Object.defineProperty(BasePetType.prototype, "isPlaying", {
//         get: function () {
//             return (this.isMoving &&
//                 (this.currentStateEnum === "run-right" /* States.runRight */ ||
//                     this.currentStateEnum === "run-left" /* States.runLeft */));
//         },
//         enumerable: false,
//         configurable: true
//     });
//     Object.defineProperty(BasePetType.prototype, "emoji", {
//         get: function () {
//             return '🐶';
//         },
//         enumerable: false,
//         configurable: true
//     });
//     BasePetType.count = 0;
//     return BasePetType;
// }());
// exports.BasePetType = BasePetType;
