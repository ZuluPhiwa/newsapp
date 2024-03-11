import React, { useState, useEffect } from "react";
import banner from "../assets/banner4.jpg";

import axios from "axios";
import def from "../assets/def.jpg";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [tops, setTops] = useState([]);

  const fetchData = async () => {
    const headlinesUrl =
      "https://newsapi.org/v2/top-headlines?country=za&apiKey=3a25d0c75474437da2690f230130cb4e";
    const url =
      "https://newsapi.org/v2/everything?q=football&apiKey=3a25d0c75474437da2690f230130cb4e";

    const headlines = await axios.get(headlinesUrl);
    const article = await axios.get(url);

    axios.all([headlines, article]).then(
      axios.spread((...allData) => {
        const allHeadlines = allData[0].data.articles;
        const allArticle = allData[1].data.articles;

        setTops(allHeadlines);
        setArticles(allArticle);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   const getArticles = async () => {
  //     const response = await axios.get(url);

  //     setArticles(response.data.articles);
  //   };
  //   getArticles();
  // }, []);

  return (
    <div className="p-8">
      <div className="">
        {tops.slice(0, 1).map((top) => (
          <a href={top.url}>
            <div>
              <div className=" bg-black/60 top-[13vh] md:top-[18vh] w-[84vw] md:w-[94vw] h-[80vh] absolute rounded-md" />
              <img
                src={top.urlToImage || def}
                alt="Banner"
                className=" object-cover   h-[80vh] w-[100vw] rounded-md"
              />

              <div className="absolute top-[80vh]">
                <p className=" font-bold  p-8 text-white">{top.title}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <h1 className=" font-bold pb-8 pt-8 text-xl">News</h1>

      <div className="grid md:grid-cols-3 gap-3">
        {articles.slice(0, 6).map((article) => (
          <a href={article.url} target="_blank">
            <div>
              <img
                src={article.urlToImage || banner}
                alt="front image"
                className=" "
              />

              <p className="font-bold my-3">{article.title}</p>

              <p>{article.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
