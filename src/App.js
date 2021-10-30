import './styles/App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {useContext} from "react";
import {AuthContext} from "./context";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader/Loader";


function App() {
    const {auth} = useContext(AuthContext)
    const [user, loading, error] = useAuthState(auth)
    if (loading) {
        return <Loader/>
    }
    return (

        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </div>

    );

}

export default App;
