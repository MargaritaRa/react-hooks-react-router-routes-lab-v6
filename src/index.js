import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import MovieCard from './components/MovieCard';

const router = createBrowserRouter(routes);

ReactDOM.render(
  <RouterProvider router={router}>
    <BrowserRouter>
      <MovieCard />
    </BrowserRouter>
  </RouterProvider>,
  document.getElementById('root')
);

