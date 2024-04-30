// "use strict";
// var __extends = (this && this.__extends) || (function () {
//     var extendStatics = function (d, b) {
//         extendStatics = Object.setPrototypeOf ||
//             ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//             function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
//         return extendStatics(d, b);
//     };
//     return function (d, b) {
//         if (typeof b !== "function" && b !== null)
//             throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
//         extendStatics(d, b);
//         function __() { this.constructor = d; }
//         d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//     };
// })();
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.JumpDownLeftState = exports.ClimbWallLeftState = exports.ChaseFriendState = exports.ChaseState = exports.RunLeftState = exports.RunRightState = exports.WalkLeftState = exports.WalkRightState = exports.IdleWithBallState = exports.SwipeState = exports.LandState = exports.WallHangLeftState = exports.LieState = exports.SitIdleState = exports.resolveState = exports.isStateAboveGround = exports.BallState = exports.FrameResult = exports.HorizontalDirection = exports.PetPanelState = exports.PetElementState = exports.PetInstanceState = void 0;
// var PetInstanceState = /** @class */ (function () {
//     function PetInstanceState() {
//     }
//     return PetInstanceState;
// }());
// exports.PetInstanceState = PetInstanceState;
// var PetElementState = /** @class */ (function () {
//     function PetElementState() {
//     }
//     return PetElementState;
// }());
// exports.PetElementState = PetElementState;
// var PetPanelState = /** @class */ (function () {
//     function PetPanelState() {
//     }
//     return PetPanelState;
// }());
// exports.PetPanelState = PetPanelState;
// var HorizontalDirection;
// (function (HorizontalDirection) {
//     HorizontalDirection[HorizontalDirection["left"] = 0] = "left";
//     HorizontalDirection[HorizontalDirection["right"] = 1] = "right";
//     HorizontalDirection[HorizontalDirection["natural"] = 2] = "natural";
// })(HorizontalDirection || (exports.HorizontalDirection = HorizontalDirection = {}));
// var FrameResult;
// (function (FrameResult) {
//     FrameResult[FrameResult["stateContinue"] = 0] = "stateContinue";
//     FrameResult[FrameResult["stateComplete"] = 1] = "stateComplete";
//     // Special states
//     FrameResult[FrameResult["stateCancel"] = 2] = "stateCancel";
// })(FrameResult || (exports.FrameResult = FrameResult = {}));
// var BallState = /** @class */ (function () {
//     function BallState(cx, cy, vx, vy) {
//         this.cx = cx;
//         this.cy = cy;
//         this.vx = vx;
//         this.vy = vy;
//         this.paused = false;
//     }
//     return BallState;
// }());
// exports.BallState = BallState;
// function isStateAboveGround(state) {
//     return (state === "climb-wall-left" /* States.climbWallLeft */ ||
//         state === "jump-down-left" /* States.jumpDownLeft */ ||
//         state === "land" /* States.land */ ||
//         state === "wall-hang-left" /* States.wallHangLeft */);
// }
// exports.isStateAboveGround = isStateAboveGround;
// function resolveState(state, pet) {
//     switch (state) {
//         case "sit-idle" /* States.sitIdle */:
//             return new SitIdleState(pet);
//         case "walk-right" /* States.walkRight */:
//             return new WalkRightState(pet);
//         case "walk-left" /* States.walkLeft */:
//             return new WalkLeftState(pet);
//         case "run-right" /* States.runRight */:
//             return new RunRightState(pet);
//         case "run-left" /* States.runLeft */:
//             return new RunLeftState(pet);
//         case "lie" /* States.lie */:
//             return new LieState(pet);
//         case "wall-hang-left" /* States.wallHangLeft */:
//             return new WallHangLeftState(pet);
//         case "climb-wall-left" /* States.climbWallLeft */:
//             return new ClimbWallLeftState(pet);
//         case "jump-down-left" /* States.jumpDownLeft */:
//             return new JumpDownLeftState(pet);
//         case "land" /* States.land */:
//             return new LandState(pet);
//         case "swipe" /* States.swipe */:
//             return new SwipeState(pet);
//         case "idle-with-ball" /* States.idleWithBall */:
//             return new IdleWithBallState(pet);
//         case "chase-friend" /* States.chaseFriend */:
//             return new ChaseFriendState(pet);
//     }
//     return new SitIdleState(pet);
// }
// exports.resolveState = resolveState;
// var AbstractStaticState = /** @class */ (function () {
//     function AbstractStaticState(pet) {
//         this.label = "sit-idle" /* States.sitIdle */;
//         this.spriteLabel = 'idle';
//         this.holdTime = 50;
//         this.horizontalDirection = HorizontalDirection.left;
//         this.idleCounter = 0;
//         this.pet = pet;
//     }
//     AbstractStaticState.prototype.nextFrame = function () {
//         this.idleCounter++;
//         if (this.idleCounter > this.holdTime) {
//             return FrameResult.stateComplete;
//         }
//         return FrameResult.stateContinue;
//     };
//     return AbstractStaticState;
// }());
// var SitIdleState = /** @class */ (function (_super) {
//     __extends(SitIdleState, _super);
//     function SitIdleState() {
//         var _this = _super !== null && _super.apply(this, arguments) || this;
//         _this.label = "sit-idle" /* States.sitIdle */;
//         _this.spriteLabel = 'idle';
//         _this.horizontalDirection = HorizontalDirection.right;
//         _this.holdTime = 50;
//         return _this;
//     }
//     return SitIdleState;
// }(AbstractStaticState));
// exports.SitIdleState = SitIdleState;
// var LieState = /** @class */ (function (_super) {
//     __extends(LieState, _super);
//     function LieState() {
//         var _this = _super !== null && _super.apply(this, arguments) || this;
//         _this.label = "lie" /* States.lie */;
//         _this.spriteLabel = 'lie';
//         _this.horizontalDirection = HorizontalDirection.right;
//         _this.holdTime = 50;
//         return _this;
//     }
//     return LieState;
// }(AbstractStaticState));
// exports.LieState = LieState;
// var WallHangLeftState = /** @class */ (function (_super) {
//     __extends(WallHangLeftState, _super);
//     function WallHangLeftState() {
//         var _this = _super !== null && _super.apply(this, arguments) || this;
//         _this.label = "wall-hang-left" /* States.wallHangLeft */;
//         _this.spriteLabel = 'wallgrab';
//         _this.horizontalDirection = HorizontalDirection.left;
//         _this.holdTime = 50;
//         return _this;
//     }
//     return WallHangLeftState;
// }(AbstractStaticState));
// exports.WallHangLeftState = WallHangLeftState;
// var LandState = /** @class */ (function (_super) {
//     __extends(LandState, _super);
//     function LandState() {
//         var _this = _super !== null && _super.apply(this, arguments) || this;
//         _this.label = "land" /* States.land */;
//         _this.spriteLabel = 'land';
//         _this.horizontalDirection = HorizontalDirection.left;
//         _this.holdTime = 10;
//         return _this;
//     }
//     return LandState;
// }(AbstractStaticState));
// exports.LandState = LandState;
// var SwipeState = /** @class */ (function (_super) {
//     __extends(SwipeState, _super);
//     function SwipeState() {
//         var _this = _super !== null && _super.apply(this, arguments) || this;
//         _this.label = "swipe" /* States.swipe */;
//         _this.spriteLabel = 'swipe';
//         _this.horizontalDirection = HorizontalDirection.natural;
//         _this.holdTime = 15;
//         return _this;
//     }
//     return SwipeState;
// }(AbstractStaticState));
// exports.SwipeState = SwipeState;
// var IdleWithBallState = /** @class */ (function (_super) {
//     __extends(IdleWithBallState, _super);
//     function IdleWithBallState() {
//         var _this = _super !== null && _super.apply(this, arguments) || this;
//         _this.label = "idle-with-ball" /* States.idleWithBall */;
//         _this.spriteLabel = 'with_ball';
//         _this.horizontalDirection = HorizontalDirection.left;
//         _this.holdTime = 30;
//         return _this;
//     }
//     return IdleWithBallState;
// }(AbstractStaticState));
// exports.IdleWithBallState = IdleWithBallState;
// var WalkRightState = /** @class */ (function () {
//     function WalkRightState(pet) {
//         this.label = "walk-right" /* States.walkRight */;
//         this.spriteLabel = 'walk';
//         this.horizontalDirection = HorizontalDirection.right;
//         this.speedMultiplier = 1;
//         this.holdTime = 60;
//         this.leftBoundary = Math.floor(window.innerWidth * 0.95);
//         this.pet = pet;
//         this.idleCounter = 0;
//     }
//     WalkRightState.prototype.nextFrame = function () {
//         this.idleCounter++;
//         this.pet.positionLeft(this.pet.left + this.pet.speed * this.speedMultiplier);
//         if (this.pet.isMoving &&
//             this.pet.left >= this.leftBoundary - this.pet.width) {
//             return FrameResult.stateComplete;
//         }
//         else if (!this.pet.isMoving && this.idleCounter > this.holdTime) {
//             return FrameResult.stateComplete;
//         }
//         return FrameResult.stateContinue;
//     };
//     return WalkRightState;
// }());
// exports.WalkRightState = WalkRightState;
// var WalkLeftState = /** @class */ (function () {
//     function WalkLeftState(pet) {
//         this.label = "walk-left" /* States.walkLeft */;
//         this.spriteLabel = 'walk';
//         this.horizontalDirection = HorizontalDirection.left;
//         this.speedMultiplier = 1;
//         this.holdTime = 60;
//         this.pet = pet;
//         this.idleCounter = 0;
//     }
//     WalkLeftState.prototype.nextFrame = function () {
//         this.pet.positionLeft(this.pet.left - this.pet.speed * this.speedMultiplier);
//         if (this.pet.isMoving && this.pet.left <= 0) {
//             return FrameResult.stateComplete;
//         }
//         else if (!this.pet.isMoving && this.idleCounter > this.holdTime) {
//             return FrameResult.stateComplete;
//         }
//         return FrameResult.stateContinue;
//     };
//     return WalkLeftState;
// }());
// exports.WalkLeftState = WalkLeftState;
// var RunRightState = /** @class */ (function (_super) {
//     __extends(RunRightState, _super);
//     function RunRightState() {
//         var _this = _super !== null && _super.apply(this, arguments) || this;
//         _this.label = "run-right" /* States.runRight */;
//         _this.spriteLabel = 'walk_fast';
//         _this.speedMultiplier = 1.6;
//         _this.holdTime = 130;
//         return _this;
//     }
//     return RunRightState;
// }(WalkRightState));
// exports.RunRightState = RunRightState;
// var RunLeftState = /** @class */ (function (_super) {
//     __extends(RunLeftState, _super);
//     function RunLeftState() {
//         var _this = _super !== null && _super.apply(this, arguments) || this;
//         _this.label = "run-left" /* States.runLeft */;
//         _this.spriteLabel = 'walk_fast';
//         _this.speedMultiplier = 1.6;
//         _this.holdTime = 130;
//         return _this;
//     }
//     return RunLeftState;
// }(WalkLeftState));
// exports.RunLeftState = RunLeftState;
// var ChaseState = /** @class */ (function () {
//     function ChaseState(pet, ballState, canvas) {
//         this.label = "chase" /* States.chase */;
//         this.spriteLabel = 'run';
//         this.horizontalDirection = HorizontalDirection.left;
//         this.pet = pet;
//         this.ballState = ballState;
//         this.canvas = canvas;
//     }
//     ChaseState.prototype.nextFrame = function () {
//         if (this.ballState.paused) {
//             return FrameResult.stateCancel; // Ball is already caught
//         }
//         if (this.pet.left > this.ballState.cx) {
//             this.horizontalDirection = HorizontalDirection.left;
//             this.pet.positionLeft(this.pet.left - this.pet.speed);
//         }
//         else {
//             this.horizontalDirection = HorizontalDirection.right;
//             this.pet.positionLeft(this.pet.left + this.pet.speed);
//         }
//         if (this.canvas.height - this.ballState.cy <
//             this.pet.width + this.pet.floor &&
//             this.ballState.cx < this.pet.left &&
//             this.pet.left < this.ballState.cx + 15) {
//             // hide ball
//             this.canvas.style.display = 'none';
//             this.ballState.paused = true;
//             return FrameResult.stateComplete;
//         }
//         return FrameResult.stateContinue;
//     };
//     return ChaseState;
// }());
// exports.ChaseState = ChaseState;
// var ChaseFriendState = /** @class */ (function () {
//     function ChaseFriendState(pet) {
//         this.label = "chase-friend" /* States.chaseFriend */;
//         this.spriteLabel = 'run';
//         this.horizontalDirection = HorizontalDirection.left;
//         this.pet = pet;
//     }
//     ChaseFriendState.prototype.nextFrame = function () {
//         var _a;
//         if (!this.pet.hasFriend || !((_a = this.pet.friend) === null || _a === void 0 ? void 0 : _a.isPlaying)) {
//             return FrameResult.stateCancel; // Friend is no longer playing.
//         }
//         // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//         if (this.pet.left > this.pet.friend.left) {
//             this.horizontalDirection = HorizontalDirection.left;
//             this.pet.positionLeft(this.pet.left - this.pet.speed);
//         }
//         else {
//             this.horizontalDirection = HorizontalDirection.right;
//             this.pet.positionLeft(this.pet.left + this.pet.speed);
//         }
//         return FrameResult.stateContinue;
//     };
//     return ChaseFriendState;
// }());
// exports.ChaseFriendState = ChaseFriendState;
// var ClimbWallLeftState = /** @class */ (function () {
//     function ClimbWallLeftState(pet) {
//         this.label = "climb-wall-left" /* States.climbWallLeft */;
//         this.spriteLabel = 'wallclimb';
//         this.horizontalDirection = HorizontalDirection.left;
//         this.pet = pet;
//     }
//     ClimbWallLeftState.prototype.nextFrame = function () {
//         this.pet.positionBottom(this.pet.bottom + 1);
//         if (this.pet.bottom >= 100) {
//             return FrameResult.stateComplete;
//         }
//         return FrameResult.stateContinue;
//     };
//     return ClimbWallLeftState;
// }());
// exports.ClimbWallLeftState = ClimbWallLeftState;
// var JumpDownLeftState = /** @class */ (function () {
//     function JumpDownLeftState(pet) {
//         this.label = "jump-down-left" /* States.jumpDownLeft */;
//         this.spriteLabel = 'fall_from_grab';
//         this.horizontalDirection = HorizontalDirection.right;
//         this.pet = pet;
//     }
//     JumpDownLeftState.prototype.nextFrame = function () {
//         this.pet.positionBottom(this.pet.bottom - 5);
//         if (this.pet.bottom <= this.pet.floor) {
//             this.pet.positionBottom(this.pet.floor);
//             return FrameResult.stateComplete;
//         }
//         return FrameResult.stateContinue;
//     };
//     return JumpDownLeftState;
// }());
// exports.JumpDownLeftState = JumpDownLeftState;
