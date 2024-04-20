import { Fragment } from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  // const dispatch = useDispatch();

  // let display;
 /*  if (auth) {
    display = <UserProfile />;
  } else {
    display = <Auth />;
  } */
  return (
    <Fragment>
      <Header />
      {auth && <UserProfile/>}
      {!auth && <Auth/>}
      <Counter />
    </Fragment>
  );
}

export default App;
