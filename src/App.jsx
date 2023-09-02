import "./App.css";
import Body from "./Components/Body";
import store from "./Utils/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
