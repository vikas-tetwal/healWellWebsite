const appName = "Heal Well";
const elements = document.getElementsByName("appName");

for (let i = 0; i < elements.length; i++) {
  elements[i].textContent = appName;
}