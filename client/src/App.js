import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomeFeed from './Components/HomeFeed';
import Bookmarks from './Components/Bookmarks';
import Profile from "./Components/Profile";

import Notifications from './Components/Notifications';
import GlobalStyles from './GlobalStyles';
import Sidebar from './Components/Sidebar';
import TweetDetails from "./Components/TweetDetails";
import { TweetContextProvider } from "./Components/TweetContext";
import ProfileFeed from "./Components/ProfileFeed";


//put the useeffect from current user contex here
function App() {
  return (
    <Router>
      <GlobalStyles />
      <TweetContextProvider>
      <Sidebar />
      <Switch>
        <Route exact path="/" >
          <HomeFeed />
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route path="/tweet/:tweetId">
        <TweetDetails />
        </Route>
        <Route path="/:handle">
          <ProfileFeed />
        </Route>
      </Switch>
      </TweetContextProvider>
    </Router>
  )
}

export default App;
