import React from "react";
import { Container } from "react-bootstrap";
import {BrowserRouter as Router,Route} from 'react-router-dom'
//import component
import Header from "./components/Header";
import Footer from "./components/Footer";

//import screens
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path="/" exact component={HomeScreen}/>
          <Route path="/product/:id" component={ProductScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
