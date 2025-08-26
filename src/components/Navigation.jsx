import React from "react";

export default function Navigation({ onButtonClick, onSearch }) {

    const [ query, setQuery ] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(query)
    }
    return (
        <nav className="secondary-nav">
            <div className="sub-nav">
                <div className="search">
                    <form className="search" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Search for articles..." className="search-input"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}/>
                    </form>
                    <button type="submit" onClick={onSearch} className="search-button">Search</button>
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