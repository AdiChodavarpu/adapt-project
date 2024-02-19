import Header from "./Header";
import NavigationBar from "./NavigationBar";
import OrderSection from "./OrdersSection";

import "./App.css";

const App = () => (
  <div className="orders-main-section">
    <Header />
    <div className="Orders-Section">
      <NavigationBar />
      <OrderSection />
    </div>
  </div>
);

export default App;
