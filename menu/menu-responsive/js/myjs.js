addEventListener("DOMContentLoaded", () => {
  const btn_menu = document.querySelector(".btn_menu");
  if (btn_menu) {
    btn_menu.addEventListener("click", () => {
      const menu_items = document.querySelector(".menu");
      const btn = document.getElementById("btn-icono");
      menu_items.classList.toggle("show");
      btn.classList.toggle("fa-times");
      btn.classList.toggle("fa-bars");
    });
  }
});
