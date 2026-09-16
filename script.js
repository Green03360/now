const button = document.getElementById("theme-toggle");

button.addEventListener("click", () => {
  const body = document.body;

  if (body.dataset.theme === "dark") {
    body.dataset.theme = "light";
  } else {
    body.dataset.theme = "dark";
  }
});

