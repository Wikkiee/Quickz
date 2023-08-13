
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.tsx";
import { authenticationUpdate } from "../../redux/reducer/Authentication.tsx";


const Home = () => {
    const isAuthenticated = useAppSelector((state) => state.authenticationReducer.value)
    const dispatch = useAppDispatch();

    return <div>
        <h1>Home page</h1>
        <h1>Current value :{isAuthenticated ? "Authenticated user" : "Unauthenticated user"}</h1>
        <button onClick={() => dispatch(authenticationUpdate(false))}>+</button>
        <button onClick={() => dispatch(authenticationUpdate(true))}>-</button>
    </div>
}

export default Home;