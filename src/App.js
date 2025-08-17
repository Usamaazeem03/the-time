import "./index.css";

import Header from "./components/Header";

import TimerBoxWithTaskBox from "./components/TimerBoxWithTaskBox";

export default function App() {
  return (
    <div className="App">
      <Header />
      <TimerBoxWithTaskBox />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer">
        <span className="footer-emoje" role="img" aria-label="footer emoji">
          🌟
        </span>
        <p>
          Complete 2-hour sessions to build you your streak and unlock
          achievements
        </p>
        <span className="footer-emoje" role="img" aria-label="footer emoji">
          🧠
        </span>
      </div>
    </footer>
  );
}
