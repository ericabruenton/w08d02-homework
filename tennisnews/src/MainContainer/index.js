import React, { Component } from 'react';
import NewsList from "../NewsList"

class MainContainer extends Component {
	constructor(){
		super();

		this.state = {
			news: []
		}
	}

	getNews = async () => {
		try {
			const news = await fetch('https://newsapi.org/v2/everything?' +
          	'q=Tennis&' +
          	'from=2018-08-01&' +
          	'sortBy=popularity&' +
          	'apiKey=3b26a089ffa3435ebbbffabf9201782a');

			const newsJson = await news.json();
			return newsJson

		} catch (err) {
			return err
		}
	}

	componentDidMount(){//part of the component lifecycle method
  //we want to setState immediatly after we get the data
  this.getNews().then((potatoData) => {
    console.log(potatoData, "this is potatoData")

    this.setState({news: potatoData})
  });
}

  render() {
    return (
      <div><NewsList news={this.state.news}/></div>
    );
  }
}

export default MainContainer;