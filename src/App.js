import logo from "./logo.svg";
import "./App.css";
import AddExpences from "./components/AddExpences";
import { Provider } from "react-redux";
import { store } from "./store/redux";
import ExpenseCardCollection from "./components/ExpenseCardCollection";
import TotalAmount from "./components/TotalAmount";
import FilterSection from "./components/FilterSection";

function App() {
  return (
    <Provider store={store}>
      <TotalAmount />
      <AddExpences />
      <FilterSection />
      <ExpenseCardCollection />
    </Provider>
  );
}

export default App;
