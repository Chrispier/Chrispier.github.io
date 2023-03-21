function darkMode() {
    const themeBtn = document.getElementById("theme-btn");
    themeBtn.onclick = () => {
          themeBtn.classList.toggle("fa-sun");
          if (themeBtn.classList.contains("fa-sun")) {
            document.body.classList.add("darkModeBody");
          } else {
            document.body.classList.remove("darkModeBody");
          }
        }
  }