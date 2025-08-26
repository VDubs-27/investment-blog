export default function Header({ onHome }) {
  return (
    <header className="header">
      <div className="header-container">
          <h1 onClick={onHome}className="logo">INDICIUM</h1>
          <p>Invest in your future.</p>
      </div>
    </header>
  );
};