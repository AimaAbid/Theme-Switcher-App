import { createContext, useState } from "react";
const ThemeContext = createContext();

function Provider({ children }) {
	const [theme, setTheme] = useState("light");
	function changeTheme(theme){
		if (theme === "light") {
			setTheme("dark");
		} else if (theme === "dark") {
			setTheme("light");
		}
	};

    var share={theme,changeTheme};

    return(
        <ThemeContext.Provider value={share}>
            {children}

        </ThemeContext.Provider>
    )
}

export default ThemeContext;
export {Provider};

