import { Route, Routes} from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import Auth from "../components/pages/Auth";
import Menu from "../components/pages/Menu";
import Omp from "../components/pages/Omp";
import CrimeExp from "../components/pages/CrimeExp";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Auth />}/>
            <Route
                path="/menu"
                element={(
                    <PrivateRoute>
                        <Menu />
                    </PrivateRoute>
                )}
            />
            <Route
                path="/omp"
                element={(
                    <PrivateRoute>
                        <Omp />
                    </PrivateRoute>
                )}
            />
            <Route
                path="/expertises/crime"
                element={(
                    <PrivateRoute>
                        <CrimeExp />
                    </PrivateRoute>
                )}
            />
        </Routes>
    );
};

export default AppRouter;