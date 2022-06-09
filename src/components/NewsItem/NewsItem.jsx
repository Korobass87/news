import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { apiItemNews } from '../API/Api';
import './newsItem.scss';

function NewsItem() {
  const [news, setNews] = useState(null);
  const location = useLocation();
  const history = useHistory();
  const newsId = useParams();

  useEffect(() => {
    apiItemNews(newsId.newsId).then(({ data }) => {
      setNews(data);
    });
  }, [newsId.newsId]);

  function onBack() {
    history.push(location?.state?.from ?? '/');
  }

  return (
    news && (
      <>
        <div className="news-container">
          <button type="button" onClick={onBack}>
            Назад к новостям
          </button>
          <div>
            <h2>{news.title}</h2>
            <p>{news.body}</p>
          </div>
        </div>
      </>
    )
  );
}

export default NewsItem;
