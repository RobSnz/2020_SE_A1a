import React from 'react';
import { Card } from 'react-bootstrap';
import styles from '../mystyle.module.css';
import { BsFillLockFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state={ email: '', password: '', cPassword: '', fName: '', lName: '', isLogin: true};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFName = this.handleFName.bind(this);
        this.handleLName = this.handleLName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleCPassword = this.handleCPassword.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSwapPages= this.handleSwapPages.bind(this);
    }

    toggleChild = () => {
        console.log("toggleChild");
        this.mainBox.current.classList.toggle("hidden");
    };

    handleSubmit(event) {
        event.preventDefault();

        const { email } = this.state;
        const { password } = this.state;

        console.log(email + " | " + password);

        this.setState({ email: "", password: ""})
    }

    handleEmail(event) {
        this.setState({ email: event.target.value });
    }

    handlePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleFName(event) {
        this.setState({ fName: event.target.value });
    }

    handleLName(event) {
        this.setState({ lName: event.target.value });
    }

    handleCPassword(event) {
        this.setState({ cPassword: event.target.value });
    }

    handleSwapPages(event) {
        event.preventDefault();

        this.setState({ isLogin: !this.state.isLogin });
    }

    render() {
        if(this.state.isLogin) {
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
                                            type='text' placeholder='Email address' onChange={(event) => this.setState({email: event.target.value})}
                                            value={ this.state.email } className={ styles.inputStyle }
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <BsFillLockFill size="40px" style={{ verticalAlign: 'center' }}/>
                                        <input onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='Password' onChange={(event) => this.setState({password: event.target.value})}
                                            value={ this.state.password } className={ styles.inputStyle }
                                        />
                                    </ul>
                                </div>
                                <input type="submit" value="Log in" className={ styles.signupButton }/>
                            </form>
                        </Card>
                        <div>
                            <form onSubmit={ this.handleSwapPages }>
                                <input type="submit" value="Not a member? Register" style={{ marginTop: "100px"}}/>
                            </form>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={ styles.registerBox }>
                    <div>
                        <h2 style={{ paddingBottom: "10px", marginTop: "10%" }}>Log in to your account</h2>
                        <Card style={{ width: "100%", border: "none" }}>
                            <form onSubmit={ this.handleSubmit } className={ styles.secondaryBox }>
                                <div>
                                    <ul>
                                        <BsFillPersonFill size="40px" style={{ verticalAlign: 'center' }}/>
                                        <input onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='First Name' onChange={ this.handleFName }
                                            value={ this.state.fName } className={ styles.inputStyle }
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <BsFillPersonFill size="40px" style={{ verticalAlign: 'center' }}/>
                                        <input onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='Last Name' onChange={ this.handleLName }
                                            value={ this.state.lName } className={ styles.inputStyle }
                                        />
                                    </ul>
                                </div>
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
                                            type='text' placeholder='Password' onChange={ this.handlePassword }
                                            value={ this.state.password } className={ styles.inputStyle }
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <BsFillLockFill size="40px" style={{ verticalAlign: 'center' }}/>
                                        <input onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='Confirm Password' onChange={ this.handleCPassword }
                                            value={ this.state.cPassword } className={ styles.inputStyle }
                                        />
                                    </ul>
                                </div>
                                <input type="submit" value="Register" className={ styles.registerConfirm }/>
                            </form>
                        </Card>
                        <div>
                            <form onSubmit={ this.handleSwapPages }>
                                <input type="submit" value="Already a member? Login" style={{ marginTop: "100px"}}/>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Login;