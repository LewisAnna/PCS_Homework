@mixin diceStyle(
  $diceBg: #f6f3f0,
  $diceColor1: #f63330,
  $diceColor2: #131210,
  $diceRadius: 20px
) {
  .diceFace {
    box-sizing: border-box;
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: $diceBg;
    border: 2px solid lighten($diceBg, 10%);
    border-radius: $diceRadius;
    transform-style: preserve-3d;
    transition: 0.5s;

    //背面白底
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background-color: lighten($diceBg, 10%);
      border-radius: 20px;
      transform: translateZ(-1px);
    }

    &::after {
      position: absolute;
      content: "";
      width: 20px;
      height: 20px;
      top: 50%;
      left: 50%;
      margin: -10px 0 0 -10px;
      background-color: $diceColor2;
      border-radius: 100%;
      transform: translateZ(1px);
    }
  }

  .front {
    transform: translateZ(50px);
    &::after {
      width: 40px;
      height: 40px;
      margin: -20px 0 0 -20px;
      background-color: $diceColor1;
    }
  }

  .up {
    transform: rotateX(90deg) translateZ(50px);
    &::after {
      margin: -30px 0 0 -30px;
      box-shadow: 40px 40px $diceColor2;
    }
  }

  .left {
    transform: rotateY(-90deg) translateZ(50px);
    &::after {
      margin: -40px 0 0 -40px;
      box-shadow: 30px 30px $diceColor2, 60px 60px $diceColor2;
    }
  }

  .right {
    transform: rotateY(90deg) translateZ(50px);
    &::after {
      margin: -30px 0 0 -30px;
      background-color: $diceColor1;
      box-shadow: 40px 0px $diceColor1, 0px 40px $diceColor1,
        40px 40px $diceColor1;
    }
  }

  .bottom {
    transform: rotateX(-90deg) translateZ(50px);
    &::after {
      margin: -36px 0 0 -36px;
      box-shadow: 26px 26px $diceColor2, 52px 52px $diceColor2,
        52px 0px $diceColor2, 0px 52px $diceColor2;
    }
  }

  .back {
    transform: rotateX(180deg) translateZ(50px);
    &::after {
      margin: -40px 0 0 -30px;
      box-shadow: 40px 0px $diceColor2, 0px 30px $diceColor2,
        40px 30px $diceColor2, 0px 60px $diceColor2, 40px 60px $diceColor2;
    }
  }
}

.dice {
  position: absolute;
  width: 100px;
  height: 100px;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  transform-style: preserve-3d;
  transform: rotate3d(0, 0.9, 0.9, 90deg);
  transition: 0.5s cubic-bezier(0.42, 1.57, 0.62, 0.86);

  &.rolling {
    animation: rotatePerFace 3s cubic-bezier(0.42, 1.57, 0.62, 0.86) infinite;
  }

  &.throw {
    animation: rotateDice 0.7s ease-in reverse, throwDice 1s linear;
  }

  @include diceStyle();

  &.red {
    @include diceStyle(rgba(250, 0, 0, 0.45), white, white, 30px);
  }

  &.blue {
    @include diceStyle(rgba(0, 0, 255, 0.45), white, white);
  }

  &.black {
    @include diceStyle(#111, #3ef, #db0);
  }

  &.pink {
    @include diceStyle(#f69, #fe9, #ffe, 40px);
  }
}

.diceWrap {
  position: absolute;
  width: 200px;
  height: 200px;
  top: calc(50% - 100px);
  left: calc(50% - 100px);

  &::before {
    position: absolute;
    content: "";
    width: 70%;
    height: 10%;
    top: 90%;
    left: 15%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 100%;
    filter: blur(10px);
  }
}

// keyframes
@keyframes rotateDice {
  30% {
    transform: rotate3d(1, 1, 1, 0deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, 720deg);
  }
}

@keyframes rotatePerFace {
  16% {
    transform: rotate3d(-0.1, 0.6, -0.4, 180deg);
  }
  32% {
    transform: rotate3d(-0.85, -0.42, 0.73, 180deg);
  }
  48% {
    transform: rotate3d(-0.8, 0.3, -0.75, 180deg);
  }
  64% {
    transform: rotate3d(0.3, 0.45, 0.9, 180deg);
  }
  80% {
    transform: rotate3d(-0.16, 0.6, 0.18, 180deg);
  }
  100% {
    transform: rotate3d(-0.1, 0.3, -1, 180deg);
  }
}

@keyframes throwDice {
  20% {
    margin-top: -100px;
  }
  40% {
    margin-top: 0px;
  }
  60% {
    margin-top: -30px;
  }
  80% {
    margin-top: 0px;
  }
  85% {
    margin-top: -10px;
  }
  90% {
    margin-top: 0px;
  }
  95% {
    margin-top: -3px;
  }
  100% {
    margin-top: 0px;
  }
}

// scence
body {
  background-color: #333;
}

.controller {
  position: absolute;
  width: 200px;
  padding: 20px;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  line-height: 40px;
}