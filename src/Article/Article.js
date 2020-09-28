import React from "react";
import storeArticle from "./storeArticle";
import { Card } from 'react-bootstrap';

class Article extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {title: '', year: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const articleSave = {
            title: this.state,
            year: this.state
        }

        storeArticle(articleSave);
    }

    render() {
        return (
            <div>
                <div>
                <Card style={{ width: "100%", border: "none" }}>
                    <form onSubmit={ this.handleSubmit }>
                        <div>
                            <ul>
                                <input onKeyDown={ (e) => { if(e.key === 13) this.handleSubmit(e);}}
                                    type='text' placeholder='Title' onChange={(e) => this.setState({ title: e.target.value })}
                                    value={ this.state.title }
                                />
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <input onKeyDown={ (e) => { if(e.key === 13) this.handleSubmit(e);}}
                                    type='text' placeholder='Year' onChange={(e) => this.setState({ year: e.target.value })}
                                    value={ this.state.year }
                                />
                            </ul>
                        </div>
                        <input type="submit" value="Submit Article"/>
                    </form>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Article;