// import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/Store";
import CakeHooksContainer from "./components/CakeHooksContainer";
import IceCreamHookContainer from "./components/IceCreamHookContainer";
import ChocoHookContainer from "./components/ChocoHookContainer";
import UserContainer from "./components/UserContainer";

/*BASIC WAY OF FLOW : Action Creators -> Reducers -> Store -> Connect*/
//With new version of React-Redux, we use Hooks instead of connect
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <CakeHooksContainer />
        <IceCreamHookContainer />
        <ChocoHookContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
