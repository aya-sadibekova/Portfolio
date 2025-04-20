const checkbox = document.querySelector("input[name=mode]");
const link = document.querySelector("link[rel='icon']");
const navItem = document.querySelectorAll("#nav_item");
const navBtn = document.querySelector("#click");

checkbox.addEventListener("change", function () {
  if (!this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
    link.href = "favicon_light/favicon-32x32.png";
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
    link.href = "favicon/favicon-32x32.png";
  }
});

function closePopupNavbar(e) {
  const targetIsNotNavBtn = e.target !== navBtn;
  const navBtnChecked = navBtn.checked;
  if (targetIsNotNavBtn && navBtnChecked) {
    e.preventDefault();
    navBtn.checked = !navBtn.checked;
  }
}

["click", "scroll"].forEach((e) =>
  window.addEventListener(e, (e) => {
    closePopupNavbar(e);
  })
);

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

console.log("bruh moment");
