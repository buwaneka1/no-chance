import React, { Component } from 'react';
import Header from './Header'; 
import Loader from './Loader'; 
import RantList from './RantList';
import RantDetails from './RantDetails';
import Login from './Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/app.css';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoading: false,
            isOpen: false
        };

        this.handleLoginModal = this.handleLoginModal.bind(this);
    }


    handleLoginModal() {
        let isOpen = this.state.isOpen;
        this.setState({
            isOpen: !isOpen
        });
    }

    render() {
        const isLoading = this.state.isLoading;
        const isOpen = this.state.isOpen;

        return (
            <Router>
                <div className="App">
                    <div className="page">

                        <Header handleLoginModal={this.handleLoginModal} />

                        <section className="main layout--center">
                            <div className="main__content layout--wrapped">
                                <Loader isLoading={isLoading} />
                                <Route path="/" exact component={RantList} />
                                <Route path="/rant/:id" component={RantDetails} />
                                <Login isOpen={isOpen} handleLoginModal={this.handleLoginModal} />
                            </div>
                        </section>

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;