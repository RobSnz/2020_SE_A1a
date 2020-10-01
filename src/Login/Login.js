import React from 'react';
import { Card } from 'react-bootstrap';
import styles from '../mystyle.module.css';
import { BsFillLockFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state={ email: '', password: '', cPassword: '', fName: '', lName: '', isLogin: true};
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

        this.setState({ email: '', password: ''})
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
                                            type='text' placeholder='First Name' onChange={(event) => this.setState({fName: event.target.value})}
                                            value={ this.state.fName } className={ styles.inputStyle }
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <BsFillPersonFill size="40px" style={{ verticalAlign: 'center' }}/>
                                        <input onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='Last Name' onChange={(event) => this.setState({lName: event.target.value})}
                                            value={ this.state.lName } className={ styles.inputStyle }
                                        />
                                    </ul>
                                </div>
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
                                <div>
                                    <ul>
                                        <BsFillLockFill size="40px" style={{ verticalAlign: 'center' }}/>
                                        <input onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='Confirm Password' onChange={(event) => this.setState({cPassword: event.target.value})}
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