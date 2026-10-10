import { RouterProvider } from 'react-router';
import { appRouter } from './routes/app.router';

export const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
