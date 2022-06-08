import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { apiItemNews } from '../API/Api';

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
        <div>
          <h2>{news.title}</h2>
          <p>{news.body}</p>
        </div>

        <button type="button" onClick={onBack}>
          Вернуться назад к новостям
        </button>
      </>
    )
  );
}

export default NewsItem;
