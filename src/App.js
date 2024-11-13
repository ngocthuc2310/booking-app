import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import { AppContextProvider } from "./store/appContext";
import { Booking } from "./pages/book/Booking.jsx";
import { Transaction } from "./pages/transaction/Transaction.jsx";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="*" element={<h1>Not found page</h1>} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
