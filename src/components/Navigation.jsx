export default function Navigation({ onButtonClick }) {
  return (
    <nav className="secondary-nav">
        <div className="sub-nav">
            <div className="search">
                <input type="text" placeholder="Search for articles..." className="search-input" />
                <button className="search-button">Search</button>
            </div>
            <div className="secondary-nav-container">
                <a onClick={onButtonClick} className="secondary-nav-item">
                    <button>VIEW ALL ARTICLES</button>
                </a>
            </div>
        </div>
    </nav>
  );
};