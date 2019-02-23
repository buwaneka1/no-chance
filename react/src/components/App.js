import React, {Component} from 'react';
import Header from './Header'; 
import Loader from './Loader'; 
import '../styles/app.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="page">

                    <Header/>
                    <Loader/>

                </div>
            </div>
        );
    }
}

export default App;