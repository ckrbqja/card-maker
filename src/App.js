import Login from "./components/login"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={["/login", "/"]}>
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App
