import DisclosureMenu from "../../src/disclosureMenu.js";

/**
 * Toggles the hover state of a menu and its submenus.
 *
 * @param {DisclosureMenu} menu - The menu to toggle.
 */
function toggleHover(menu) {
  menu.isHoverable = !menu.isHoverable;
}

const navs = document.querySelectorAll("nav");
const menus = [];

Array.from(navs).forEach(nav => {
  const menuElement = nav.querySelector("ul");
  const submenuItemSelector = "li.dropdown";
  const controllerElement = nav.id === "main-menu" ? nav.querySelector("button") : null;
  const containerElement = nav.id === "main-menu" ? nav : null;

  menus.push(new DisclosureMenu({
    menuElement,
    submenuItemSelector,
    controllerElement,
    containerElement,
    isHoverable: window.innerWidth >= 1070,
  }));
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1070 && !menus[0].isHoverable) {
    toggleHover(menus[0]);
  } else if (window.innerWidth < 1070 && menus[0].isHoverable) {
    toggleHover(menus[0]);
  }
});

document.addEventListener("accessibleMenuExpand", event => {
  console.log(event);
});

document.addEventListener("accessibleMenuCollapse", event => {
  console.log(event);
});