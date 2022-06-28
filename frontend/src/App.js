import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import ListBooks from './components/ListBooks';
import Header from './components/Header';
import Footer from './components/Footer';
import AddBook from './components/AddBook';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"} element={<ListBooks />} />
        <Route path={"/books"} element={<ListBooks />} />
        <Route path={"/add-book"} element={<AddBook />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
