<template>
  <div class="cafe-item js-item" data-item-id="1" data-item-price="499">
    <div class="cafe-item-counter">1</div>
    <div class="cafe-item-photo">
      <img src="../assets/images/Burger_148.png" alt="Burger" style="height: 100%;">
    </div>
    <div class="cafe-item-label">
      <span class="cafe-item-title">Burger</span>
      <span class="cafe-item-price">$4.99</span>
    </div>
    <div class="cafe-item-buttons">
      <button class="cafe-item-decr-button button-item ripple-handler">
        <span class="ripple-mask">
          <span class="ripple"></span>
        </span>
      </button>
      <button class="cafe-item-incr-button button-item ripple-handler">
        <span class="button-item-label">Add</span>
        <span class="ripple-mask">
          <span class="ripple" ></span>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.cafe-item,
.cafe-item-shadow {
  position: relative;
  width: 120px;
  height: 159px;
  padding: 4px 5px 21px;
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto;
}

.cafe-item-shadow {
  height: 0;
  padding: 0;
  margin: 0;
}

.cafe-item-photo {
  position: relative;
  height: 78px;
}

.cafe-item-new {
  position: absolute;
  right: 50%;
  bottom: 10px;
  margin-right: -40px;
  display: inline-block;
  font-family: var(--default-font);
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  padding: 2px 5px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: var(--accent-color);
  text-transform: uppercase;
  color: #fff;
  outline: none;
  border: none;
}
.cafe-item-label {
  display: flex;
  justify-content: center;
}
.cafe-item-title {
  font-weight: 500;
}

.cafe-item-price {
  font-weight: 700;
  white-space: nowrap;
}
.cafe-item-price:before {
  display: inline-block;
  vertical-align: top;
  content: '';
  width: 2px;
  height: 2px;
  border-radius: 2px;
  background-color: currentColor;
  margin: 7px 4px;
}

.cafe-item-buttons {
  display: flex;
  width: 80px;
  justify-content: space-between;
  margin: 10px auto 0;
  position: relative;
  transition: all var(--animation);
}
button {
  cursor: pointer;
}

button,
.cafe-item-counter {
  display: inline-block;
  font-family: var(--default-font);
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  padding: 6px 16px;
  height: 30px;
  border-radius: 7px;
  box-sizing: border-box;
  background-color: var(--main-color);
  text-transform: uppercase;
  color: #fff;
  outline: none;
  border: none;
}
.cafe-item-counter {
  position: absolute;
  right: 0;
  top: 0;
  min-width: 22px;
  height: 22px;
  padding: 2px 6px;
  margin: 4px 6px;
  border-radius: 11px;
  transform: scale3d(0, 0, 1);
  animation: var(--animation) both;
  pointer-events: none;
  z-index: 3;

  animation-name: badge-hide;
}
.cafe-item-buy-button {
  position: absolute !important;
  background-color: var(--accent-color);
  top: 0;
  right: 0;
  transition: width var(--animation);
  width: 80px;
}
.cafe-item-incr-button {
  position: absolute !important;
  top: 0;
  right: 0;
  transition: width var(--animation);
  width: 80px;
}
.selected .cafe-item-incr-button {
  width: 38px;
}
.cafe-item-decr-button {
  position: relative;
  width: 38px;
}
.cafe-item-decr-button {
  background-color: #e64d44;
  pointer-events: none;
  transform: scale3d(0.9, 0.9, 1);
  transition: transform var(--animation), visibility var(--animation);
  visibility: hidden;
}
.selected .cafe-item-decr-button {
  pointer-events: auto;
  transform: scale3d(1, 1, 1);
  visibility: visible;
}
.cafe-item-incr-button:before,
.cafe-item-incr-button:after,
.cafe-item-decr-button:before {
  display: inline-block;
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 14px;
  height: 3px;
  background-color: #fff;
  border-radius: 1px;
  z-index: 1;
}
.cafe-item-incr-button:before,
.cafe-item-incr-button:after {
  background-color: rgba(255, 255, 255, 0);
  transition: background-color var(--animation);
}
.selected .cafe-item-incr-button:before,
.selected .cafe-item-incr-button:after {
  background-color: #fff;
}
.cafe-item-incr-button .button-item-label {
  transition: transform var(--animation);
}
.selected .cafe-item-incr-button .button-item-label {
  transform: scale3d(0.4, 0, 1);
}
.cafe-item-incr-button:after {
  width: 3px;
  height: 14px;
}

.button-item.ripple-handler {
  position: relative;
}
.ripple-mask {
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  transform: translateZ(0);
  overflow: hidden;
  pointer-events: none;
}
.button-item .ripple-mask {
  border-radius: inherit;
}
.button-item .ripple {
  position: absolute;
  width: 200%;
  left: 50%; top: 50%;
  margin: -100% 0 0 -100%;
  padding-top: 200%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.07);
  transition:
    transform var(--ripple-duration) ease-out,
    opacity var(--ripple-duration) ease-out,
    background-color var(--ripple-duration) ease-out;
  opacity: 0;
}
.button-item-label {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
  position: relative;
  z-index: 1;
}

.cafe-item-add-button .ripple,
.cafe-item-incr-button .ripple {
  background-color: #ed960b;
}
.cafe-item-decr-button .ripple {
  background-color: #d3362d;
}

@-webkit-keyframes badge-incr {
  from, to { transform: scale3d(1, 1, 1); }
  40% { transform: scale3d(1.2, 1.2, 1); }
}
@keyframes badge-incr {
  from, to { transform: scale3d(1, 1, 1); }
  40% { transform: scale3d(1.2, 1.2, 1); }
}

@-webkit-keyframes badge-incr2 {
  from, to { transform: scale3d(1, 1, 1); }
  40% { transform: scale3d(1.2, 1.2, 1); }
}
@keyframes badge-incr2 {
  from, to { transform: scale3d(1, 1, 1); }
  40% { transform: scale3d(1.2, 1.2, 1); }
}

@-webkit-keyframes badge-decr {
  from, to { transform: scale3d(1, 1, 1); }
  40% { transform: scale3d(0.8, 0.8, 1); }
}
@keyframes badge-decr {
  from, to { transform: scale3d(1, 1, 1); }
  40% { transform: scale3d(0.8, 0.8, 1); }
}

@-webkit-keyframes badge-decr2 {
  from, to { transform: scale3d(1, 1, 1); }
  40% { transform: scale3d(0.8, 0.8, 1); }
}
@keyframes badge-decr2 {
  from, to { transform: scale3d(1, 1, 1); }
  40% { transform: scale3d(0.8, 0.8, 1); }
}

@-webkit-keyframes badge-show {
  from { transform: scale3d(0.5, 0.5, 1); opacity: 0; visibility: hidden; }
  30%  { transform: scale3d(1.2, 1.2, 1); }
  to   { transform: scale3d(1, 1, 1); opacity: 1; visibility: visible; }
}
@keyframes badge-show {
  from { transform: scale3d(0.5, 0.5, 1); opacity: 0; visibility: hidden; }
  30%  { transform: scale3d(1.2, 1.2, 1); }
  to   { transform: scale3d(1, 1, 1); opacity: 1; visibility: visible; }
}

@-webkit-keyframes badge-hide {
  from { transform: scale3d(1, 1, 1); opacity: 1; visibility: visible; }
  to   { transform: scale3d(0.5, 0.5, 1); opacity: 0; visibility: hidden; }
}

@keyframes badge-hide {
  from { transform: scale3d(1, 1, 1); opacity: 1; visibility: visible; }
  to   { transform: scale3d(0.5, 0.5, 1); opacity: 0; visibility: hidden; }
}
</style>