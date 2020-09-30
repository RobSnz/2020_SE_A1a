import React from "react";
import storeArticle from "./storeArticle";
import { Card } from 'react-bootstrap';
import styles from '../mystyle.module.css';

class Article extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {title: '', year: '', author: '', month: '', volume: '', pagesNum: '', numOfPages: '', ePrint: '', ePrintType: '', ePrintClass: '', annote: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const articleSave = {
            title: this.state.title,
            year: this.state.year,
            author: this.state.author,
            month: this.state.month,
            volume: this.state.volume,
            pagesNum: this.state.pagesNum,
            numOfPages: this.state.numOfPages,
            ePrint: this.state.ePrint,
            ePrintType: this.state.ePrintType,
            ePrintClass: this.state.ePrintClass,
            annote: this.state.annote
        }

        storeArticle(articleSave);
    }

    render() {
        return (
            <div>
                <div>
                    <Card style={{ width: "100%", border: "none" }}>
                        <div className={styles.submitBox}>
                            <form onSubmit={ this.handleSubmit }>
                                <div >
                                    <ul>
                                        <input onKeyDown={ (e) => { if(e.key === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='Title' onChange={(e) => this.setState({ title: e.target.value })}
                                            value={ this.state.title } className={ styles.articleBoxes }
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <input onKeyDown={ (e) => { if(e.key === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='Author' onChange={(e) => this.setState({ author: e.target.value })}
                                            value={ this.state.author }
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <input onKeyDown={ (e) => { if(e.key === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='Year' onChange={(e) => this.setState({ year: e.target.value })}
                                            value={ this.state.year } style={{ width: "100px", marginRight: "10px"}}
                                        />
                                        <input onKeyDown={ (e) => { if(e.key === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='Month' onChange={(e) => this.setState({ month: e.target.value })}
                                            value={ this.state.month } style={{ width: "100px"}}
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <input onKeyDown={ (e) => { if(e.key === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='Volume Number' onChange={(e) => this.setState({ volume: e.target.value })}
                                            value={ this.state.volume }
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <input onKeyDown={ (e) => { if(e.key === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='Page Number' onChange={(e) => this.setState({ pagesNum: e.target.value })}
                                            value={ this.state.pagesNum }
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <input onKeyDown={ (e) => { if(e.key === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='Number of pages' onChange={(e) => this.setState({ numOfPages: e.target.value })}
                                            value={ this.state.numOfPages }
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <input onKeyDown={ (e) => { if(e.key === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='E-Print' onChange={(e) => this.setState({ ePrint: e.target.value })}
                                            value={ this.state.ePrint }
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <input onKeyDown={ (e) => { if(e.key === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='E-Print Type' onChange={(e) => this.setState({ ePrintType: e.target.value })}
                                            value={ this.state.ePrintType }
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <input onKeyDown={ (e) => { if(e.key === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='E-Print Class' onChange={(e) => this.setState({ ePrintClass: e.target.value })}
                                            value={ this.state.ePrintClass }
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <input onKeyDown={ (e) => { if(e.key === 13) this.handleSubmit(e);}}
                                            type='text' placeholder='Annote' onChange={(e) => this.setState({ annote: e.target.value })}
                                            value={ this.state.annote }
                                        />
                                    </ul>
                                </div>
                                <input type="submit" value="Submit Article"/>
                            </form>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Article;