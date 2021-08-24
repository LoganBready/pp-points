import "./App.css";
// import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import AddStudent from "../src/pages/AddStudent";
import StudentDirectory from "../src/pages/StudentDirectory";
import AdminLogin from "../src/pages/AdminLogin";
import Home from "../src/pages/Home";
import StudentDirectoryAdmin from "./pages/StudentDirectoryAdmin";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./pages/PrivateRoute";
import AccountInfo from "./pages/Accountinfo";

export default function App() {
  return (
    <AuthProvider>
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/StudentDirectory"
              component={StudentDirectory}
            ></Route>
            {/* <Route path="/AddStudent" component={AddStudent}></Route> */}
            <PrivateRoute path="/AddStudent" component={AddStudent} />
            <Route path="/AdminLogin" component={AdminLogin}></Route>
            <PrivateRoute
              path="/studentdirectoryadmin"
              component={StudentDirectoryAdmin}
            />
            <PrivateRoute path="/accountinfo" component={AccountInfo} />
          </Switch>
        </main>
      </div>
    </AuthProvider>
  );
}
