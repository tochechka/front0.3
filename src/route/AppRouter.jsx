import { Route, Routes} from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import Auth from "../components/pages/Auth";
import Omp from "../components/pages/Omp";
import CrimeExp from "../components/pages/CrimeExp";
import Table from "./Table";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Auth />}/>
            <Route
                path="/table"
                element={(
                    <PrivateRoute>
                        <Table />
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
            <Route
                path="/omp"
                element={(
                    <PrivateRoute>
                        <Omp />
                    </PrivateRoute>
                )}
            />
        </Routes>
    );
};

export default AppRouter;