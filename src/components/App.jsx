import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import Header from './Header/Header';
// import NewsList from './NewsList/NewsList';
// import NewsItem from './NewsItem/NewsItem';

const Header = lazy(() => import('./Header/Header'));

const NewsList = lazy(() => import('./NewsList/NewsList'));
const NewsItem = lazy(() => import('./NewsItem/NewsItem'));
export const App = () => {
  return (
    <>
      <Suspense fallback={<h2>LOADING....</h2>}>
        <Header />
        <Switch>
          <Route exact path="/news">
            <NewsList />
          </Route>

          <Route path="/news/:newsId">
            <NewsItem />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};
