const projectsButton = document.getElementById("my-projects");

const contactButton = document.getElementById("contact");

projectsButton.onmouseover = () => {
  adjustButton(projectsButton, "3em", "1");
  adjustButton(contactButton, "2em", "0.3");
};

contactButton.onmouseover = () => {
  adjustButton(contactButton, "3em", "1");
  adjustButton(projectsButton, "2em", "0.3");
};

contactButton.onmouseleave = () => {
  contactButton.setAttribute("style", "opacity:1;");
  projectsButton.setAttribute("style", "opacity:1;");
};

projectsButton.onmouseleave = () => {
  contactButton.setAttribute("style", "opacity:1;");
  projectsButton.setAttribute("style", "opacity:1;");
};

function adjustButton(button, size, opacity) {
  button.setAttribute(
    "style",
    "font-size:" + size + "; opacity:" + opacity + ";"
  );
}
