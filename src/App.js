import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Store from './components/Store';
import Navbar from './components/Navbar';
import Default from './components/Default';
import Detail from './components/Detail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/Modal';
import Credit from './components/Credit';

function App() {

    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/" component={Store}></Route>
                <Route exact path="/Detail" component={Detail}></Route>
                <Route exact path="/Cart" component={Cart}></Route>
                <Route component={Default}></Route>
            </Switch>
            <Modal />
            <Credit />

        </React.Fragment>);
    }

    export default App;