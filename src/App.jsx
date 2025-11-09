import "./App.scss";
import Nav from "./components/Nav/Nav";
import Logo from "./assets/images/logo.png";
import RightCard from "./components/RightCard/RightCard";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className="main-page">
      <div className="main-page__content">
        <Nav logoPath={Logo} />
        <div className="main-page__content__cards">
          <MainContent
            authorName="Billy Bear"
            sourceName="Debugger"
            articleDateAndDuration="Sep 2 · 5 min read"
          />
          <RightCard />
        </div>
      </div>
    </div>
  );
}

export default App;
