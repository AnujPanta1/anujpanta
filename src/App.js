import "./App.css";
import About from "./components/About";
import IntroMessage from "./components/IntroMessage";
import Projects from "./components/Projects";
function App() {
    return (
        <div className="App">
            <IntroMessage></IntroMessage>
            <About></About>
            <Projects></Projects>
        </div>
    );
}

export default App;
