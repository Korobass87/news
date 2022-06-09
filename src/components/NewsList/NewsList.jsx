import React from 'react';
import { apiNews, apiSearchNews } from '../API/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { limit } from '../API/Api';
import Pagination from '../Pagination/Pagination';
import SearchForm from 'components/SearchForm/SearchForm';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './newsList.scss';

function NewsList() {
  const location = useLocation();
  const [news, setNews] = useState(null);
  const [maxPage, setMaxPage] = useState(null);
  const [page, SetPage] = useState(null);
  const history = useHistory();
  const [query, setQuery] = useState(null);
  const sortQuery = new URLSearchParams(location.search).get('query');
  const sortPage = new URLSearchParams(location.search).get('page');

  useEffect(() => {
    if (sortQuery) {
      setQuery(sortQuery);
    }
  }, [sortQuery]);

  useEffect(() => {
    if (sortPage) {
      SetPage(sortPage);
      return;
    }
    SetPage(1);
  }, [sortPage]);

  useEffect(() => {
    if (!sortQuery && page) {
      apiNews((page - 1) * 10).then(({ data }) => {
        setNews(data.posts);
        setMaxPage(data.total / limit);
        history.push({
          ...location,
          search: `page=${page}`,
        });
      });
    }
  }, [page]);

  function onPage(pageNum) {
    SetPage(pageNum);
  }

  useEffect(() => {
    if (query) {
      apiSearchNews(query).then(({ data }) => {
        setNews(data.posts);

        setMaxPage(null);
        history.push({
          ...location,
          search: `query=${query}`,
        });
        console.log('query');
      });
    }
  }, [query]);

  function filterNews(query) {
    setQuery(query);
  }

  return (
    <>
      <div className="container-news">
        <SearchForm filter={filterNews} />
        <ul className="news-list">
          {news &&
            news.length > 0 &&
            news.map(item => (
              <li key={item.id}>
                <Link
                  className="link-item"
                  to={{
                    pathname: `/news/${item.id}`,
                    state: { from: location },
                  }}
                >
                  <h3 className="news-item-name">{item.title}</h3>
                </Link>
              </li>
            ))}
        </ul>

        {news?.length === 0 && (
          <h3>Извините мы не нашли новости по запросу {query}</h3>
        )}
        {maxPage && (
          <Pagination currentPage={page} onPage={onPage} maxPage={maxPage} />
        )}
      </div>
    </>
  );
}

export default NewsList;
