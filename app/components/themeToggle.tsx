import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setDarkMode(savedTheme === "dark");
			document.documentElement.classList.toggle(
				"dark",
				savedTheme === "dark"
			);
		} else {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			setDarkMode(prefersDark);
			document.documentElement.classList.toggle("dark", prefersDark);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = !darkMode ? "dark" : "light";
		setDarkMode(!darkMode);
		document.documentElement.classList.toggle("dark", !darkMode);
		localStorage.setItem("theme", newTheme);
	};

	return (
		<button
			className="p-2 rounded-md border border-gray-400 dark:border-gray-600"
			onClick={toggleTheme}
		>
			{darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
		</button>
	);
}
