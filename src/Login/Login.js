import React from 'react';
import { Card } from 'react-bootstrap';
import styles from '../mystyle.module.css';
import { BsFillLockFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state={ email: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const { email } = this.state;
        const { password } = this.state;

        console.log(email + " | " + password);

        this.setState({ email: '', password: ''})
    }

    handleEmail(event) {
        this.setState({ email: event.target.value });
    }

    handlePassword(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div className={ styles.mainBox }>
                <div>
                    <h2 style={{ paddingBottom: "10px", marginTop: "10%" }}>Log in to your account</h2>
                    <Card style={{ width: "100%", border: "none" }}>
                        <form onSubmit={ this.handleSubmit } className={ styles.secondaryBox }>
                            <div>
                                <ul>
                                    <BsFillPersonFill size="40px" style={{ verticalAlign: 'center' }}/>
                                    <input onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}}
                                        type='text' placeholder='Email address' onChange={ this.handleEmail }
                                        value={ this.state.email } className={ styles.inputStyle }
                                    />
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <BsFillLockFill size="40px" style={{ verticalAlign: 'center' }}/>
                                    <input onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}}
                                        type='password' placeholder='Password' onChange={ this.handlePassword }
                                        value={ this.state.password } className={ styles.inputStyle }
                                    />
                                </ul>
                            </div>
                            <input type="submit" value="Log in" className={ styles.submitButton }/>
                        </form>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Login;