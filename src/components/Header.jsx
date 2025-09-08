export default function Header({ onHome }) {
  return (
    <header className="header">
      <div className="header-container">
          <h1 onClick={onHome} className="logo">INDICIUM</h1>
          <div className="header-right">
            <div className="words-container">
              <div className="word-list">
                <span>Invest</span>
                <span>Learn</span>
                <span>Grow</span>
                <span>Save</span>
              </div>
            </div>
            <span className="future-text">in your future.</span>
          </div>
        </div>
    </header>
  );
};