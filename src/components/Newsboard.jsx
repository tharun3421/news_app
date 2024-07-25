import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Newslist from "./Newslist";

const Newsboard = ({ category }) => {
  const [articles, setArticle] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_NEWS_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles))
      .catch((error) => console.error("Error fetching data:", error));
  }, [category]);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <Newslist
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default Newsboard;
