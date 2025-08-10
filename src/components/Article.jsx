export default function Article({ article, onBackClick }) {
    return (
        <div className="article-page">
            <button onClick={onBackClick} className="back-btn">
                <span>← Back to articles</span>
            </button>
            <h1 className="article-title">{article.title}</h1>
            <p className="article-author">{article.author} - {article.date}</p>
            <p className="article-category">{article.category}</p>
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-content">
                <p>{article.content}</p>
            </div>
        </div>
    );
}