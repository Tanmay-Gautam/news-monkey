import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    const [Theme, setTheme] = useState("light");
    const apiKey = process.env.REACT_APP_NEWS_API
    // const apiKey = '476d088183ae4fc291e25ad04e175d83'

    return (
        <div className={`overflow-hidden bg-${Theme === "dark" ? "secondary" : ""}`}>
            <Router>
                <NavBar Theme={Theme} toggleTheme={() => {Theme === "dark" ? setTheme("light") : setTheme("dark")}}/>
                <Switch>
                    <Route exact path="/"><News cardType="Horizontal" Theme={Theme} apiKey={apiKey} key="top" country="in" category="top" /></Route>
                    <Route exact path="/business"><News cardType="Horizontal" Theme={Theme} apiKey={apiKey} key="business" country="in" category="Business" /></Route>
                    <Route exact path="/entertainment"><News cardType="Horizontal" Theme={Theme} apiKey={apiKey} key="entertainment" country="in" category="Entertainment" /></Route>
                    <Route exact path="/sports"><News cardType="Horizontal" Theme={Theme} apiKey={apiKey} key="sports" country="in" category="Sports" /></Route>
                    <Route exact path="/science"><News cardType="Horizontal" Theme={Theme} apiKey={apiKey} key="science" country="in" category="Science" /></Route>
                    <Route exact path="/health"><News cardType="Horizontal" Theme={Theme} apiKey={apiKey} key="health" country="in" category="Health" /></Route>
                    <Route exact path="/technology"><News cardType="Horizontal" Theme={Theme} apiKey={apiKey} key="technology" country="in" category="Technology" /></Route>
                </Switch>
            </Router>
            <Footer Theme={Theme}/>
        </div>
    );
}

export default App