import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
import AddContact from "./Pages/AddContact";
import EditContact from "./Pages/EditContact";
import Navbar from "./Components/Navbar";

//added a browser route for the add contact and edit contact.
function App() {
  return (
    <>
      <ToastContainer />
    <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/add" element ={<AddContact/>}/>
          <Route path="/edit/:id" element = {<EditContact />}/>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
