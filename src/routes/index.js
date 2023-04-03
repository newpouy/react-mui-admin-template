import { useRoutes } from 'react-router-dom';

// routes
import sampleRoutes from './sampleRoutes';
import mainRoutes from './mainRoutes';
import AuthenticationRoutes from './authRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([mainRoutes, AuthenticationRoutes, sampleRoutes]);
}
