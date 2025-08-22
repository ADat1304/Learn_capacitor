import { MainPage } from "./pages/mainPage";

export class ScreenManager {
  constructor() {
    this.wrapper = document.getElementById("wrapper");
    this.INDEX_MAIN_PAGE = 1;
    this.INDEX_TOPIC_PAGE = 2;
    this.mainPage = new MainPage(this.INDEX_MAIN_PAGE, this);
    // this.vocabPage = new VocabPage(this.INDEX_TOPIC_PAGE, this);
    this.currentPage = null;
    this.currentPageIndex = null;
  }
  goToMainPage() {
    if (
      this.currentPage != null &&
      typeof this.currentPage.release() === "function"
    ) {
      this.currentPage.release();
    }
    this.currentPage = this.mainPage;
    this.goToScreen(this.INDEX_MAIN_PAGE);
  }

  goToTopicPage(type) {
    if (
      this.currentPage != null &&
      typeof this.currentPage.release === "function"
    ) {
      this.currentPage.release();
    }
    this.topicPage.topicType = type;
    this.currentPage = this.topicPage;
    this.goToScreen(this.INDEX_TOPIC_PAGE);
  }

  goBack() {
    var index = this.currentPageIndex - 1;
    if (
      this.currentPage != null &&
      typeof this.currentPage.release() === "function"
    ) {
      this.currentPage.release();
    }
    if (index == this.INDEX_MAIN_PAGE) {
      this.currentPage = this.mainPage;
    }
    if (index == this.INDEX_TOPIC_PAGE) {
      this.currentPage = this.vocabPage;
    }
    this.goToScreen(index, true);
  }
  goToScreen(index, isGoBack) {
    const navbar = document.getElementsByClassName("navbar")[0];
    const navbarTitle = navbar.getElementsByClassName("navbar-title")[0];
    const btnCloseTopic = document.getElementById("btnCloseTopic");

    // Navbar hiển thị / ẩn
    if (index >= this.INDEX_MAIN_PAGE) {
      navbar.classList.remove("hide");
      if (index === this.INDEX_MAIN_PAGE) {
        btnCloseTopic.classList.add("hide");
      } else {
        btnCloseTopic.classList.remove("hide");
      }
    } else {
      navbar.classList.add("hide");
    }

    // Giải phóng page cũ
    if (this.currentPage && typeof this.currentPage.release === "function") {
      this.currentPage.release();
    }
    const offset = -index ; // Dịch chuyển theo %
    this.wrapper.style.transform = `translateX(${offset}vw)`;

    if (!isGoBack && index === this.INDEX_MAIN_PAGE) {
      this.currentPage.init();
    } else if (!isGoBack && index === this.INDEX_TOPIC_PAGE) {
      this.currentPage.init();
    }
    navbarTitle.innerText = this.currentPage.title || "";
    typeof this.currentPage.update === "function" && this.currentPage.update();
  }
  async checkOrientation() {
    if (Capacitor.isNativePlatform()) {
      //await ScreenOrientation.lock({ orientation: 'landscape' });
    }
  }
}
