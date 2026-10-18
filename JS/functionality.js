function darkTheme() {
	document.getElementById("changeTheme").href = "../CSS/darktheme.css";

	localStorage.setItem("theme", "dark");
}

function lightTheme() {
	document.getElementById("changeTheme").href = "../CSS/lighttheme.css";

	localStorage.setItem("theme", "light");
}

let theme = localStorage.getItem("theme");

if (theme == "light") {
	lightTheme();
}

else {
	darkTheme();
}
