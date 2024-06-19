import React from 'react';
import './ArticleList.css';

const ArticleList = ({ articles }) => {
return (
    <div className="article-list">
    {articles.map((article, index) => (
        <div key={index} className="article">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
    ))}
    </div>
);
};

export default ArticleList;
