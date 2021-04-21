import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { isLoggedInVar, darkModeVar, client } from "./apollo";
import Layout from "./components/Layout";
import routes from "./routes";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Notfound from "./screens/Notfound";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";
import GlobalStyles from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Router>
            <Switch>
              <Route path={routes.home} exact>
                {isLoggedIn ? (
                  <Layout>
                    <Home />
                  </Layout>
                ) : (
                  <Login />
                )}
              </Route>
              {!isLoggedIn ? (
                <Route path={routes.signUp} exact>
                  <SignUp />
                </Route>
              ) : null}
              <Route path={routes.profile}>
                <Layout>
                  <Profile />
                </Layout>
              </Route>
              {/* 404 Not Found */}
              <Route>
                <Notfound />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
