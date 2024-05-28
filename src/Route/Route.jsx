import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Details from '../components/DonationDetails/Details';
import Donation from '../components/Donation/Donation';
import Statistics from '../components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
      },
      {
        path: '/donation-details/:id',
        element: <Details></Details>,
        loader: () => fetch('./donation.json'),
      },
    ],
  },
]);

export default router;
