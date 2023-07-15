const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// get Tab items
const tabItems = $$(".tab-item");
// get Tab content items
const tabContents = $$(".tab-pane");
// get line
const line = $(".line");
// set line
const setLine = () => {
  line.style.left = $(".tab-item.active").offsetLeft + "px";
  line.style.width = $(".tab-item.active").offsetWidth + "px";
};
setLine();
tabItems.forEach((tabItem, index) => {
  const tabContent = tabContents[index];
  tabItem.onclick = () => {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");
    tabItem.classList.add("active");
    tabContent.classList.add("active");
    setLine();
  };
});
