document
  .getElementById("shrine-nav-icon")
  .addEventListener("click", function(evt) {
    evt.preventDefault();
    document.getElementById("shrine-nav-menu").MDCTemporaryDrawer.open = true;
  });
mdc.autoInit();
