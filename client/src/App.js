import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomeFeed from './Components/HomeFeed';
import Bookmarks from './Components/Bookmarks';
import Profile from "./Components/Profile";

import Notifications from './Components/Notifications';
import GlobalStyles from './GlobalStyles';
import Sidebar from './Components/Sidebar';
import {TweetDetails} from "./Components/TweetDetails";
import Error from "./Components/Error";
import styled from "styled-components";



//put the useeffect from current user contex here
function App() {
  return (
    <>
      <Wrapper>
        <Router>
          <GlobalStyles />
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
            <Route exact path="/profile/:profileId">
              <Profile />
            </Route>
            <Route path = "/error">
              <Error />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  display: flex;
`

export default App;
