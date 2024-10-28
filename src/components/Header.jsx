import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import ThemeContext from "../context/theme-context";

export default function Header() {
	const { theme, changeTheme,setTheme } = useContext(ThemeContext);
	return (
		<header className={styles[`header-${theme}`]}>
			<Link
				onClick={() => {
					changeTheme(theme);
				}}
			>
				{theme === "light" ? (
					<i class="fa-solid fa-moon"></i>
				) : (
					<i class="fa-solid fa-sun"></i>
				)}
			</Link>
			<Link to="/register">Register</Link>
			<Link to="/">Home</Link>
			<Link to="/">Some other link</Link>
		</header>
	);
}
