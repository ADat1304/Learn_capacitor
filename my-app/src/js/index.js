import { Capacitor } from "@capacitor/core";
import { SplashScreen } from "@capacitor/splash-screen";
import { ScreenManager } from "./ScreenManager";

console.log("index.js loaded");
(function () {
  function preventBack() {
    history.pushState(null, "", location.href);
  }

  preventBack(); // Đẩy trạng thái vào history khi trang tải

  window.addEventListener("popstate", function () {
    preventBack(); // Đẩy lại trạng thái nếu người dùng nhấn nút back
  });
})();
window.customElements.define(
  "capacitor-welcome",
  class extends HTMLElement {
    constructor() {
      super();
      SplashScreen.hide();
      // const root = this.attachShadow({ mode: "open" });
      this.innerHTML = `
      <nav class="navbar hide">
    <div class="navbar-left">
      <div id="btnCloseTopic"></div>
    </div>
    <div class="navbar-center">
        <span class="navbar-title"></span>
    </div>
    </nav>
      <div class="main-container">
        <div class="wrapper" id="wrapper">
          <div class="screen" id="main-screen">
          </div>
          <div class="screen center-v" id="topic-screen">
          </div>
          <div class="screen" id="extend-screen">
        </div>
      </div>
      `;
      const screenManager = new ScreenManager();
      screenManager.goToMainPage();
      // Check landscape on initial load
      screenManager.checkOrientation();

      // Listen for screen resize events to check landscape
      window.addEventListener("resize", screenManager.checkOrientation);

      //Begin: Prevent user press button back in webbroser
      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", function () {
        window.history.pushState(null, "", window.location.href);
      });

      window.addEventListener("beforeunload", function (event) {
        event.preventDefault();
      });
    }
  }
);
