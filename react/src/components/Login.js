import React, { Component } from 'react';
import Loader from '../components/Loader';
import '../styles/login.css';
import _ from 'lodash';
import { ERR_USERNAME_REQUIRED, ERR_PASSWORD_REQUIRED } from '../Constants';

class Login extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            isLoading: true,
            username: '',
            password: '',
            usernameError: false,
            passwordError: false
        };

        this.state = this.initialState;

        this.handleLoginModal = this.handleLoginModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleLoginModal() {
        this.props.handleLoginModal();
    }

    componentDidMount() {
        this.usernameInput.focus();
    }

    handleInput(e) {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    }

    handleBlur(e) {
        const { name, value } = e.target;

        if (name === 'username') {
            this.setState({
                usernameError: _.isEmpty(value)
            });
        } else {
            this.setState({
                passwordError: _.isEmpty(value)
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (_.isEmpty(this.state.username)) {
            this.setState({
                usernameError: true
            });
            this.usernameInput.focus();
        }

        if (_.isEmpty(this.state.password)) {
            this.setState({
                passwordError: true
            });

            if (!_.isEmpty(this.state.username)) {
                this.passwordInput.focus();
            }
        }
    }

    render() {
        const isLoading = this.state.isLoading;
        const { username, password, usernameError, passwordError } = this.state;

        return(
            <div className="popup popup--open">
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

                                    <input type="text" 
                                            placeholder="USERNAME" 
                                            name="username"
                                            value={username}
                                            ref={(input) => { this.usernameInput = input }} 
                                            onChange={this.handleInput} 
                                            onBlur={this.handleBlur} />
                                    <input type="password" 
                                            placeholder="PASSWORD" 
                                            name="password" 
                                            value={password}
                                            ref={(input) => { this.passwordInput = input }}
                                            onChange={this.handleInput} 
                                            onBlur={this.handleBlur}/>

                                    <Loader isLoading={isLoading}/>

                                    <div className="form__error">
                                        <div>{usernameError ? ERR_USERNAME_REQUIRED : ''}</div>
                                        <div>{passwordError ? ERR_PASSWORD_REQUIRED : ''}</div>
                                    </div>

                                    <input type="submit" value="LET ME IN" onClick={this.handleSubmit}/>
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