import React, {Component} from 'react';
import './styles/app.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="page">

                    <section className="header layout--center">
                        <div className="header__content layout--wrapped">
                            <div className="brand">
                                <a href="/"><div className="brand__name"><span>#</span>DEVRANT</div></a>
                            </div>

                            <div className="profile layout--center">
                                <div className="profile__picture">
                                    <svg height="36" width="36">
                                        <circle cx="18" cy="18" r="18" fill="#5c5f6f"></circle>
                                    </svg>
                                </div>
                                <div className="profile__name">Elon</div>
                            </div>

                            <div className="join">
                                <span>Sign Out</span>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        );
    }
}

export default App;