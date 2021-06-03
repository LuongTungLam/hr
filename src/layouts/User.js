import Home from "views/user/Home";
import { Route, Switch, Redirect } from "react-router-dom";
import UserVacancy from "views/user/UserVacancy";

const User = () => {
    return (
        <>
            <Switch>
                <Route path='/user/home' component={Home} />
                <Route path='/user/vacancy' component={UserVacancy} />
                <Redirect from="*" to="/auth/login" />
            </Switch>
        </>
    )
}

export default User;