
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.tsx";
import { authenticationUpdate } from "../../redux/reducer/Authentication.tsx";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const isAuthenticated = useAppSelector((state) => state.authenticationReducer.value)
    const dispatch = useAppDispatch();
    const navigator = useNavigate();
    useEffect(() => {
        console.log(isAuthenticated);

        if (!isAuthenticated) {
            navigator("/login");
        }
    }, [])
    return <div>
        <h1>Home page</h1>
        <h1>Current value :{isAuthenticated ? "Authenticated user" : "Unauthenticated user"}</h1>
        <button onClick={() => dispatch(authenticationUpdate(false))}>+</button>
        <button onClick={() => dispatch(authenticationUpdate(true))}>-</button>
    </div>
}

export default Home;