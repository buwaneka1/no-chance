import React, {Component} from 'react';
import Header from './Header'; 
import Loader from './Loader'; 
import RantList from './RantList';
import RantDetails from './RantDetails';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
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
                            </div>
                        </section>

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;