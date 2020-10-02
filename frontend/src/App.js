import React from "react";
import { Container } from "react-bootstrap";

//import component
import Header from "./components/Header";
import Footer from "./components/Footer";

//import screens
import Home from './Screens/HomeScreen';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Home/>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
