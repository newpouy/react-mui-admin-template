// project imports
import MainLayout from 'layout/MainLayout';
import DashboardDefault from 'views/dashboard/Default';
import UserPage from 'views/user';
import OrderPage from 'views/order';
import MatchPage from 'views/match';
import ProductPage from 'views/product';

// ==============================|| MAIN ROUTING ||============================== //

const mainRoutes = {
  path: '',
  element: <MainLayout />,
  children: [
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'user',
      element: <UserPage />
    },
    {
      path: 'user',
      children: [
        {
          path: 'list',
          element: <UserPage />
        }
      ]
    },
    {
      path: 'order',
      element: <OrderPage />,
      children: [
        {
          path: 'list',
          element: <OrderPage />
        }
      ]
    },
    {
      path: 'match',
      element: <MatchPage />,
      children: [
        {
          path: 'list',
          element: <MatchPage />
        }
      ]
    },
    {
      path: 'product',
      element: <ProductPage />,
      children: [
        {
          path: 'list',
          element: <ProductPage />
        }
      ]
    }
  ]
};

export default mainRoutes;
