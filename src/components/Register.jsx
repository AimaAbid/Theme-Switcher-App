import React from "react";
import style from "./Register.module.css";
import { useContext } from 'react';
import ThemeContext from "../context/theme-context"

export default function Register() {
	var {theme}=useContext(ThemeContext);
	return (
		<section className={style[`background-${theme}`]}>
			<h1 className={`${style[`text-${theme}`]} ${style.center}`}>Register</h1>
			<form class={style.center}>
				<input
					type="text"
					name="name"
					id="name"
					className={`${style[`make-block`]} ${style[`input-style`]}`}
				/>
				<input
					type="email"
					name="email"
					id="email"
					className={`${style[`make-block`]} ${style[`input-style`]}`}
				/>
				<br />
				<br />
				<input
					type="submit"
					value="Submit"
					className={`${style[`button-${theme}`]} ${style[`text-${theme}`]}`}
				/>
			</form>
		</section>
	);
}
