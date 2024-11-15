import { UserProvider } from './lib/context/user';
import  Login from './pages/Login';
import  Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {

    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route
                            index
                            element={<Home />}
                        />
                        <Route
                            path="login"
                            element={<Login />}
                        />
                        <Route
                            path="*"
                            element={
                                <div>
                                    Not Found
                                </div>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;