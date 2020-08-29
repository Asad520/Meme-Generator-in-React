import React, { Component } from "react";
import Styles from "./style.css";

class MemeGen extends Component {
  constructor() {
    super();
    this.state = {
      topTxt: "",
      bottomTxt: "",
      randomImg: "https://imgflip.com/s/meme/One-Does-Not-Simply.jpg",
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({
      randomImg: randMemeImg,
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.memes[0]);
        this.setState({
          allMemeImgs: data.data.memes,
        });
      });
  }
  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Top Text..."
            name="topTxt"
            value={this.state.topTxt}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Bottom Text..."
            name="bottomTxt"
            value={this.state.bottomTxt}
            onChange={this.handleChange}
          />

          <button>Generate</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topTxt}</h2>
          <h2 className="bottom">{this.state.bottomTxt}</h2>
        </div>
      </div>
    );
  }
}
export default MemeGen;
