import React, { Component } from 'react';
import Loader from '../components/Loader';
import '../styles/login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };

        this.handleLoginModal = this.handleLoginModal.bind(this);
    }

    handleLoginModal() {
        this.props.handleLoginModal();
    }

    componentDidUpdate() {
        this.usernameInput.focus();
    }

    render() {
        const isOpen = this.props.isOpen;
        const isLoading = this.state.isLoading;
        const popupClass = isOpen ? 'popup popup--open' : 'popup';

        return(
            <div className={popupClass}>
                <div className="popup__header">
                    <div title="Close" className="close layout--center" onClick={this.handleLoginModal}>
                        X
                    </div>
                </div>
                <div className="popup__body layout--center">
                    <div className="popup__body-inner">

                        <div className="form">
                            <div className="form__title">
                                JOIN <span className="highlight">#</span>DEVRANT
                            </div>
                            <div className="form__description">
                                Vote and comment on others' rants. Post your own.
                            </div>
                            <form className="login">
                                <div className="login">

                                    <input type="text" placeholder="USERNAME" ref={(input) => { this.usernameInput = input }}/>
                                    <input type="password" placeholder="PASSWORD" />

                                    <Loader isLoading={isLoading}/>

                                    <div className="form__error">
                                        Some fields are missing !
                                    </div>

                                    <input type="submit" value="LET ME IN" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;