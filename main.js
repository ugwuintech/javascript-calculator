const display = document.querySelector("#display");
const clicked = (num) => {
  console.log(num);
  display.value += num;
};
const toggleTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme == null) {
    localStorage.setItem("theme", "dark");
    document.querySelector("body").classList.add("dark-mode");
    return false;
  }
  if (theme === "light") {
    localStorage.setItem("theme", "dark");
    document.querySelector("body").classList.add("dark-mode");
    return false;
  } else {
    localStorage.setItem("theme", "light");
    document.querySelector("body").classList.remove("dark-mode");
    return false;
  }
};
