import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import CategoryFilter from './components/CategoryFilter';
import Pagination from './components/Pagination';

const API_KEY = '16607d4443594f1aa540e05bc3d8700e';
const PAGE_SIZE = 5;
const categories = ['Technology', 'Business', 'Sports', 'Health', 'Science', 'Entertainment'];

const App = () => {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('technology');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
        params: {
          category: selectedCategory,
          page: currentPage,
          pageSize: PAGE_SIZE,
          apiKey: API_KEY
        }
      });
      setArticles(response.data.articles);
      setTotalResults(response.data.totalResults);
    } catch (error) {
      console.error('Error fetching the news articles:', error);
    }
  };

  useEffect(() => {
    fetchArticles();
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then('dummy json products', console.log);

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log('placeholders todos', json))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, currentPage]);
  
  return (
    <div className="app">
      <h1>News Articles</h1>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <ArticleList articles={articles} />
      <Pagination currentPage={currentPage} totalResults={totalResults} pageSize={PAGE_SIZE} onPageChange={setCurrentPage} />
    </div>
  );
};

export default App;
