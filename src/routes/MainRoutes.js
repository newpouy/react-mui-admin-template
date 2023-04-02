import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import UserPage from 'views/user';
import OrderPage from 'views/order';
import MatchPage from 'views/match';
import ProductPage from 'views/product';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
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

export default MainRoutes;
