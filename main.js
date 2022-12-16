// DISPLAY;
const display = document.querySelector("#display");
const history = document.querySelector("#display-1");
const clicked = (num) => {
  console.log(num);
  display.value += num;
};

// EQUAL TO
function equalTo() {
  const displayValue = display.value;
  const result = eval(displayValue);
  display.value = result;
  history.value = displayValue;
}

// TOGGLE
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
