import React from 'react';
import { Card } from 'react-bootstrap';
import styles from '../mystyle.module.css';
import { BsFillLockFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state={ email: "", password: "", cPassword: "", fName: "", lName: "", isLogin: true};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFName = this.handleFName.bind(this);
        this.handleLName = this.handleLName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleCPassword = this.handleCPassword.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSwapPages= this.handleSwapPages.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const { email } = this.state;
        const { password } = this.state;

        console.log(email + " | " + password);

        this.setState({ email: "", password: "", cPassword: "", fName: "", lName: ""});
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

        this.setState({ email: "", password: "", cPassword: "", fName: "", lName: ""});
        this.setState({ isLogin: !this.state.isLogin });
    }

    render() {
        if(this.state.isLogin) {
            return (
                <div className={ styles.loginBox }>
                    <div>
                        <h1 style={{ marginTop: "10%", textAlign: "center" }}>LOGIN</h1>
                        <Card style={{ width: "100%", border: "none" }}>
                            <form onSubmit={ this.handleSubmit } className={ styles.secondaryBox }>
                                <div>
                                    <ul>
                                        {/* <BsFillPersonFill size="40px" style={{ verticalAlign: 'center' }}/> */}
                                        <input onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}}
                                            type='email' placeholder='Email address' onChange={ this.handleEmail}
                                            value={ this.state.email } required='required'
                                            style={{ width: "320px"}} className={ styles.articleBoxes}
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        {/* <BsFillLockFill size="40px" style={{ verticalAlign: 'center' }}/> */}
                                        <input onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}}
                                            type='password' placeholder='Password' onChange={ this.handlePassword }
                                            value={ this.state.password } required='required'
                                            style={{ width: "320px"}} className={ styles.articleBoxes}
                                        />
                                    </ul>
                                </div>
                                <input type="submit" value="Login" className={ styles.loginButton }/>
                            </form>
                        </Card>
                        <div>
                            <form onSubmit={ this.handleSwapPages }>
                                <input type="submit" value="Not a member? Register" style={{ marginTop: "100px", width: "100%" }}/>
                            </form>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={ styles.signupBox }>
                    <div>
                        <h1 style={{ marginTop: "10%", textAlign: "center" }}>SIGN UP</h1>
                        <Card style={{ width: "100%", border: "none" }}>
                            <form onSubmit={ this.handleSubmit } className={ styles.secondaryBox }>
                                <div>
                                    <ul>
                                        {/* <BsFillPersonFill size="40px" style={{ verticalAlign: 'center' }}/> */}
                                        <input onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='First Name' onChange={ this.handleFName }
                                            value={ this.state.fName } required='required'
                                            style={{ width: "320px"}} className={ styles.articleBoxes}
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        {/* <BsFillPersonFill size="40px" style={{ verticalAlign: 'center' }}/> */}
                                        <input onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='Last Name' onChange={ this.handleLName }
                                            value={ this.state.lname } required='required'
                                            style={{ width: "320px"}} className={ styles.articleBoxes}
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        {/* <BsFillPersonFill size="40px" style={{ verticalAlign: 'center' }}/> */}
                                        <input onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}}
                                            type='email' placeholder='Email address' onChange={ this.handleEmail }
                                            value={ this.state.email } required='required'
                                            style={{ width: "320px"}} className={ styles.articleBoxes}
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        {/* <BsFillLockFill size="40px" style={{ verticalAlign: 'center' }}/> */}
                                        <input onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}}
                                            type='password' placeholder='Password' onChange={ this.handlePassword }
                                            value={ this.state.password } required='required'
                                            style={{ width: "320px"}} className={ styles.articleBoxes}
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        {/* <BsFillLockFill size="40px" style={{ verticalAlign: 'center' }}/> */}
                                        <input onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}}
                                            type='password' placeholder='Confirm Password' onChange={ this.handleCPassword }
                                            value={ this.state.cpassword } required='required'
                                            style={{ width: "320px"}} className={ styles.articleBoxes}
                                        />
                                    </ul>
                                </div>
                                <input type="submit" value="Register" className={ styles.loginButton }/>
                            </form>
                        </Card>
                        <div>
                            <form onSubmit={ this.handleSwapPages }>
                                <input type="submit" value="Already a member? Login" style={{ marginTop: "100px", width: "100%" }}/>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Login;