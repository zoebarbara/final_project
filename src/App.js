import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

/* PAGES */
import LoginPage from './pages/login';
import HomePage from './pages/index'; 
import SignUpPage from './pages/signup';
import MyWeekPage from './pages/myweek';
import RecipePage from './pages/recipe';
import MyProfile from './pages/myprofile';


/* COMPONENTS */
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

export default function App() {

  return (
    <Router>
      <div>
      <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/myweek">
            <MyWeekPage />
          </Route>
          <Route path="/recipe">
            <RecipePage />
          </Route>
          <Route path="/myprofile">
            <MyProfile />
          </Route>

        </Switch>
      </div>
      <Footer />
    </Router>
  );
}