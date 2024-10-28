import { createContext, useState } from "react";
const ThemeContext = createContext();

function Provider({ children }) {
	const [theme, setTheme] = useState("light");
	function changeTheme(theme){
		var newTheme;
		if (theme === "light") {
		    newTheme="dark";
			setTheme(newTheme);
			localStorage.setItem("theme", newTheme);
			
		} else if (theme === "dark") {
			newTheme="light";
			setTheme(newTheme);
			localStorage.setItem("theme", newTheme);
		}
		
	};

	
	function getTheme(){
		if (localStorage.getItem("theme")) {
		  var temp=localStorage.getItem("theme");
		  setTheme(temp);
		}
	
	   }

    var share={theme,setTheme,changeTheme,getTheme};

    return(
        <ThemeContext.Provider value={share}>
            {children}

        </ThemeContext.Provider>
    )
}

export default ThemeContext;
export {Provider};

