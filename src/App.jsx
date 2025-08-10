import React from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Card from './components/Card'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Article from './components/Article'
import { articles } from './assets/articles.js'

function App() {

  const [currentArticle, setCurrentArticle] = React.useState(null);
  const [showContactModal, setShowContactModal] = React.useState(false);

  function handleContactClick() {
    setCurrentArticle(null);
    setShowContactModal(true);
  }

  function handleCloseContact() {
    setShowContactModal(false);
  }

  function handleCardClick(article) {
    setCurrentArticle(article);
    // Logic to open a detailed view can be added here
    console.log(`Card clicked: ${article.title}`);
  }

  function handleBackClick() {
    setCurrentArticle(null);
  }

  function handleViewAllArticles() {
    setCurrentArticle(null);
    setShowContactModal(false);
  }

  const articlesList = articles.map((article) => {
    return (
      <Card
        key={article.id}
        image={article.image}
        title={article.title}
        author={article.author}
        date={article.date}
        category={article.category}
        content={article.content}
        onCardClick={() => handleCardClick(article)}
      />
    )
  });

  return (
    <>
      <Header />
      <Navigation onButtonClick={handleViewAllArticles}/>
      <div className="catalogue">
        {!showContactModal && currentArticle == null && articlesList}
      </div>
      {showContactModal && currentArticle == null && <Contact close={handleCloseContact} />}
      {currentArticle && <Article article={currentArticle} onBackClick={handleBackClick}/>}
      <Footer onContactClick={handleContactClick}/>
    </>
  )
}

export default App
