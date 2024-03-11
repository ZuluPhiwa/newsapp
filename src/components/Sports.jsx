import React, { useState, useEffect } from "react";
import axios from "axios";
import { PinContainer } from "../ui/3d-pin";

const Sports = () => {
  const url =
    "https://newsapi.org/v2/everything?q=manchester&united&apiKey=3a25d0c75474437da2690f230130cb4e";

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
      <h1 className=" text-center font-bold text-5xl my-2 md:my-8">
        Sports news
      </h1>
      <div className=" grid md:grid-cols-3 ">
        {articles.slice(0, 21).map((article) => (
          <div className="my-12 flex items-center justify-center ">
            <a href={article.url}>
              <PinContainer title={article.title} href={article.url}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[17rem] md:w-[22rem] md:h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    {article.title}
                  </h3>
                  <img
                    src={article.urlToImage}
                    className="h-[100px] md:h-[150px]"
                    alt="banner"
                  />
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 overflow-hidden line-clamp-3 overflow-ellipsis">
                      {article.description}
                    </span>
                  </div>
                </div>
              </PinContainer>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
