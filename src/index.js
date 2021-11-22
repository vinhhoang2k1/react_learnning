import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./component/ThemContext";
import App from "./App"
import UseEffect from "./learn/UseEffect";




function render() {
    return (
        // <ThemeProvider>
        //     <BrowserRouter>
        //         <App />
        //     </BrowserRouter>
        // </ThemeProvider>
        <>
            <UseEffect />
        </>

    )
}
ReactDOM.render(render(), document.getElementById('root'));
