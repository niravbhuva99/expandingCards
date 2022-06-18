const panels = document.querySelectorAll(".panel");
const add = document.querySelectorAll("#add");

for (let panel of panels) {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
}
function removeActiveClasses() {
  for (let remove of panels) {
    remove.classList.remove("active");
  }
}
