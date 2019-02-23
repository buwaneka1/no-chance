import React, { Component } from 'react';
import Header from './Header'; 
import Loader from './Loader'; 
import RantList from './RantList';
import RantDetails from './RantDetails';
import Login from './Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/app.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="page">

                        <Header />

                        <section className="main layout--center">
                            <div className="main__content layout--wrapped">
                                <Loader isLoading={false} />
                                <Route path="/" exact component={RantList} />
                                <Route path="/rant/:id" component={RantDetails} />
                                <Login/>
                            </div>
                        </section>

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;