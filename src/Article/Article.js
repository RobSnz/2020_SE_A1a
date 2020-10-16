import React from "react";
import storeArticle from "./storeArticle";
import { Card } from "react-bootstrap";
import styles from "../mystyle.module.css";

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      year: "",
      author: "",
      month: "",
      volume: "",
      pagesNum: "",
      numOfPages: "",
      ePrint: "",
      ePrintType: "",
      ePrintClass: "",
      annote: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let inputTitle;
    if (this.state.title.trim() == "") {
      inputTitle = "N/A";
    } else {
      inputTitle = this.state.title;
    }
    let inputYear;
    if (this.state.year.trim() == "") {
      inputYear = "N/A";
    } else {
      inputYear = this.state.year;
    }
    let inputAuthor;
    if (this.state.author.trim() == "") {
      inputAuthor = "N/A";
    } else {
      inputAuthor = this.state.author;
    }
    let inputMonth;
    if (this.state.month.trim() == "") {
      inputMonth = "N/A";
    } else {
      inputMonth = this.state.month;
    }
    let inputVolume;
    if (this.state.volume.trim() == "") {
      inputVolume = "N/A";
    } else {
      inputVolume = this.state.volume;
    }
    let inputPagesNum;
    if (this.state.pagesNum.trim() == "") {
      inputPagesNum = "N/A";
    } else {
      inputPagesNum = this.state.pagesNum;
    }
    let inputNumOfPages;
    if (this.state.numOfPages.trim() == "") {
      inputNumOfPages = "N/A";
    } else {
      inputNumOfPages = this.state.numOfPages;
    }
    let inputEPrint;
    if (this.state.ePrint.trim() == "") {
      inputEPrint = "N/A";
    } else {
      inputEPrint = this.state.ePrint;
    }
    let inputEPrintType;
    if (this.state.ePrintType.trim() == "") {
      inputEPrintType = "N/A";
    } else {
      inputEPrintType = this.state.ePrintType;
    }
    let inputEPrintClass;
    if (this.state.ePrintClass.trim() == "") {
      inputEPrintClass = "N/A";
    } else {
      inputEPrintClass = this.state.ePrintClass;
    }
    let inputAnnote;
    if (this.state.annote.trim() == "") {
      inputAnnote = "N/A";
    } else {
      inputAnnote = this.state.annote;
    }

    const articleSave = {
      title: inputTitle,
      year: inputYear,
      author: inputAuthor,
      month: inputMonth,
      volume: inputVolume,
      pagesNum: inputPagesNum,
      numOfPages: inputNumOfPages,
      ePrint: inputEPrint,
      ePrintType: inputEPrintType,
      ePrintClass: inputEPrintClass,
      annote: inputAnnote,
      status: "toModerate",
    };

    storeArticle(articleSave);

    this.setState({
      title: "",
      year: "",
      author: "",
      month: "",
      volume: "",
      pagesNum: "",
      numOfPages: "",
      ePrint: "",
      ePrintType: "",
      ePrintClass: "",
      annote: "",
    });
  }

  render() {
    return (
      <div>
        <div>
          <Card style={{ width: "100%", border: "none" }}>
            <div className={styles.submitBox}>
              <form onSubmit={this.handleSubmit}>
                <h1>SUBMIT ARTICLE</h1>
                <div>
                  <ul>
                    <input
                      onKeyDown={(e) => {
                        if (e.key === 13) this.handleSubmit(e);
                      }}
                      type="text"
                      placeholder="Article Title"
                      onChange={(e) => this.setState({ title: e.target.value })}
                      value={this.state.title}
                      required="required"
                      style={{ width: "320px" }}
                      className={styles.articleBoxes}
                    />
                  </ul>
                </div>
                <div>
                  <ul>
                    <input
                      onKeyDown={(e) => {
                        if (e.key === 13) this.handleSubmit(e);
                      }}
                      type="text"
                      placeholder="Author/s"
                      onChange={(e) =>
                        this.setState({ author: e.target.value })
                      }
                      value={this.state.author}
                      style={{ width: "320px" }}
                      className={styles.articleBoxes}
                    />
                  </ul>
                </div>
                <div>
                  <ul>
                    <input
                      onKeyDown={(e) => {
                        if (e.key === 13) this.handleSubmit(e);
                      }}
                      type="text"
                      placeholder="Volume"
                      onChange={(e) =>
                        this.setState({ volume: e.target.value })
                      }
                      value={this.state.volume}
                      style={{ width: "100px", marginRight: "10px" }}
                      className={styles.articleBoxes}
                    />
                    <input
                      onKeyDown={(e) => {
                        if (e.key === 13) this.handleSubmit(e);
                      }}
                      type="text"
                      placeholder="Page no(s)."
                      onChange={(e) =>
                        this.setState({ pagesNum: e.target.value })
                      }
                      value={this.state.pagesNum}
                      style={{ width: "100px", marginRight: "10px" }}
                      className={styles.articleBoxes}
                    />
                    <input
                      onKeyDown={(e) => {
                        if (e.key === 13) this.handleSubmit(e);
                      }}
                      type="text"
                      placeholder="No. of pages"
                      onChange={(e) =>
                        this.setState({ numOfPages: e.target.value })
                      }
                      value={this.state.numOfPages}
                      style={{ width: "100px" }}
                      className={styles.articleBoxes}
                    />
                  </ul>
                </div>
                <div>
                  <ul>
                    <input
                      onKeyDown={(e) => {
                        if (e.key === 13) this.handleSubmit(e);
                      }}
                      type="text"
                      placeholder="Year"
                      onChange={(e) => this.setState({ year: e.target.value })}
                      value={this.state.year}
                      style={{ width: "155px", marginRight: "10px" }}
                      className={styles.articleBoxes}
                    />
                    <input
                      onKeyDown={(e) => {
                        if (e.key === 13) this.handleSubmit(e);
                      }}
                      type="text"
                      placeholder="Month"
                      onChange={(e) => this.setState({ month: e.target.value })}
                      value={this.state.month}
                      style={{ width: "155px" }}
                      className={styles.articleBoxes}
                    />
                  </ul>
                </div>
                <div>
                  <ul>
                    <input
                      onKeyDown={(e) => {
                        if (e.key === 13) this.handleSubmit(e);
                      }}
                      type="text"
                      placeholder="E-Print"
                      onChange={(e) =>
                        this.setState({ ePrint: e.target.value })
                      }
                      value={this.state.ePrint}
                      style={{ width: "155px", marginRight: "10px" }}
                      className={styles.articleBoxes}
                    />
                    <input
                      onKeyDown={(e) => {
                        if (e.key === 13) this.handleSubmit(e);
                      }}
                      type="text"
                      placeholder="E-Print Type"
                      onChange={(e) =>
                        this.setState({ ePrintType: e.target.value })
                      }
                      value={this.state.ePrintType}
                      style={{ width: "155px" }}
                      className={styles.articleBoxes}
                    />
                  </ul>
                </div>
                <div>
                  <ul>
                    <input
                      onKeyDown={(e) => {
                        if (e.key === 13) this.handleSubmit(e);
                      }}
                      type="text"
                      placeholder="E-Print Class"
                      onChange={(e) =>
                        this.setState({ ePrintClass: e.target.value })
                      }
                      value={this.state.ePrintClass}
                      style={{ width: "155px", marginRight: "10px" }}
                      className={styles.articleBoxes}
                    />
                    <input
                      onKeyDown={(e) => {
                        if (e.key === 13) this.handleSubmit(e);
                      }}
                      type="text"
                      placeholder="Annote"
                      onChange={(e) =>
                        this.setState({ annote: e.target.value })
                      }
                      value={this.state.annote}
                      style={{ width: "155px" }}
                      className={styles.articleBoxes}
                    />
                  </ul>
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className={styles.submitButton}
                />
              </form>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Article;

