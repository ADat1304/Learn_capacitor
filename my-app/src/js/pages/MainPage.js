
import { MainScreenMenu} from "../const"
export class MainPage {
  constructor(index, screenManager) {
    this.instance = document.getElementById("main-screen");
    this.screenManager = screenManager;
    this.swiper = null;
    this.pageIndex = index;
    this.title = "";
  }
  init() {
    this.instance.innerHTML =
     `<div class='swiper main-page-item'><div class="screenWrapper swiper-wrapper"></div></div>`;
    this.creatShapes();
  }
  creatShapes(){
    console.log("create shape mainPage")
    const screenWrapper= this.instance.getElementsByClassName("screenWrapper")[0];
    const items= MainScreenMenu;
    for(let i=0;i<items.length;i++){
      const shape = document.createElement("div");
      const itemContain= document.createElement("div");
      itemContain.className= "item-container shadow";
      shape.appendChild(itemContain);
      
      const img= itemContain.appendChild(document.createElement("img"));
      img.src= items[i].featureImage;
      const divName= itemContain.appendChild(document.createElement("div"));
      divName.innerText= items[i].description;

      shape.className="swiper-slide";
      shape.setAttribute("data-value",items[i].name);
      shape.addEventListener("click",() =>{
        this.screenManager.goToTopicPage(items[i].name)
      })
      screenWrapper.appendChild(shape);
    }
  }
}
