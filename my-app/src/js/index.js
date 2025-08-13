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
      <ion-tabs>
        <ion-tab tab="home">
        <ion-nav id="home-nav"></ion-nav>
            <div id="home-page">
              <ion-header>
                <ion-toolbar>
                  <ion-title>Listen now</ion-title>
                </ion-toolbar>
              </ion-header>
                  <ion-content>
                    <div class="example-content">Listen now content</div>
                  </ion-content>
              </div>
        </ion-tab>
        <ion-tab tab="radio">
          <ion-nav id="radio-nav"></ion-nav>
            <div id="radio-page">
              <ion-header>
                <ion-toolbar>
                  <ion-title>Radio</ion-title>
                </ion-toolbar>
              </ion-header>
              <ion-content>
                  <div class="example-content">Radio content</div>
              </ion-content>
            </div>
        </ion-tab>
      <ion-tab tab="library">
        <ion-nav id="library-nav"></ion-nav>
          <div id="library-page">
            <ion-header>
              <ion-toolbar>
                <ion-title>Library</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content>
              <div class="example-content">Library content</div>
            </ion-content>
          </div>
  </ion-tab>
  <ion-tab tab="search">
    <ion-nav id="search-nav"></ion-nav>
    <div id="search-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Search</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">Search content</div>
      </ion-content>
    </div>
  </ion-tab>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="home">
      <ion-icon name="home-outline"></ion-icon>
      Home
    </ion-tab-button>
    <ion-tab-button tab="radio">
      <ion-icon name="radio"></ion-icon>
      Radio
    </ion-tab-button>
    <ion-tab-button tab="library">
      <ion-icon name="library"></ion-icon>
      Library
    </ion-tab-button>
    <ion-tab-button tab="search">
      <ion-icon name="search"></ion-icon>
      Search
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
`;
    }
  }
);
// //  <ion-tab tab="home">
//         <ion-nav id="home-nav"></ion-nav>
//             <div id="home-page">
//               <ion-header>
//                 <ion-toolbar>
//                   <ion-title>Listen now</ion-title>
//                 </ion-toolbar>
//               </ion-header>
//                   <ion-content>
//                     <div class="example-content">Listen now content</div>
//                   </ion-content>
//               </div>
//         </ion-tab>
// //<ion-tab-button tab="home">
//       <ion-icon name="home-outline"></ion-icon>
//       Home
//     </ion-tab-button>
