import * as React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  RouteComponentProps
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Suspense } from "react";

import ProductsPage from "./ProductsPage";
import ProductPage from "./ProductPage";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";

// import AdminPage from "./AdminPage";
const AdminPage = React.lazy(() => import("./AdminPage"));

// implementing a function component in a typescript file

const Routes: React.SFC<RouteComponentProps> = props => {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={props.location.key}
          timeout={500}
          classNames="animate"
        >
          <Switch>
            <Redirect exact={true} from="/" to="/products"></Redirect>
            <Route exact={true} path="/products" component={ProductsPage} />
            <Route path="/products/:id" component={ProductPage} />
            <Route path="/admin" component={AdminPage}>
              {loggedIn ? (
                <Suspense
                  fallback={
                    <div className="page-container">
                      Loading, please wait...
                    </div>
                  }
                >
                  <AdminPage />
                </Suspense>
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/login" component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

const RoutesWrap: React.SFC = () => {
  return (
    <Router>
      <Route component={Routes} />
    </Router>
  );
};

export default RoutesWrap;
