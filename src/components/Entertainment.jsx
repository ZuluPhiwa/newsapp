import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import def from "../assets/def.jpg";
const Entertainment = () => {
  const url =
    "https://newsapi.org/v2/everything?q=entertainment&apiKey=3a25d0c75474437da2690f230130cb4e";
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(url);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);

  return (
    <div className="p-8">
      <h1 className=" text-center font-bold text-5xl my-8">
        Entertainment news
      </h1>

      <div className="grid md:grid-cols-3 ">
        {articles.slice(0, 18).map((article) => (
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white line-clamp-2"
              >
                {article.title}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={article.urlToImage || def}
                  height="1000"
                  width="1000"
                  className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 line-clamp-2 text-ellipsis dark:text-neutral-300"
              >
                {article.description}
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <a href={article.url}>Full Story</a>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Entertainment;
