import { useRoutes } from 'react-router-dom';

// routes
import SampleRoutes from './SampleRoutes';
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, AuthenticationRoutes, SampleRoutes]);
}
