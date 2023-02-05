import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import IntroMessage from "./components/IntroMessage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
    return (
        <div className="App">
            <IntroMessage></IntroMessage>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
}

export default App;
