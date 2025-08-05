import { Capacitor } from "@capacitor/core";
import { SplashScreen } from "@capacitor/splash-screen";

console.log("index.js loaded");
window.customElements.define(
  "capacitor-welcome",
  class extends HTMLElement {
    constructor() {
      super();
      SplashScreen.hide();
      // const root = this.attachShadow({ mode: "open" });
      this.innerHTML = `
        <nav class="navbar">
          
          <div class="search-box">
            <img src="../assets/imgs/icon/find.png" alt="Search Icon">
            <input type="text" placeholder="Tìm kiếm">
          </div>
          <div class= "navbar-avatar">
            <img src="../assets/imgs/icon/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="Avatar">
          </div>
        </nav>

        <div class="main-container">
          <div class="wrapper">
            <div class="content">
              <div class="topic">
            </div>
          </div>  
        </div>

        <div class="footer">
          <div class="menu">
            <div class="home-icon"> </div>
            <div class="plus-icon"> </div>
            <div class="folder-icon"> </div>
          </div>
        </div>
`;
    }
  }
);
