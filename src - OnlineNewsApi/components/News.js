import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
        constructor(){
        super();
        this.state = {
          articles : [],
          loading: false,
          page:1
        }
    }
    async componentDidMount(){
          let url="https://newsapi.org/v2/everything?q=pakistan&searchIn=title&sortBy=publishedAt&sortBy=popularity&apiKey=89c5c791d8ba4d7faf2ae4a6d6f44249&page=1&pageSize=20"
          let data = await fetch(url);
          let parsedData = await data.json();
          console.log(parsedData);
          this.setState({articles:parsedData.articles, totalResults: parsedData.totalResults});
        }

    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/everything?q=pakistan&searchIn=title&sortBy=publishedAt&sortBy=popularity&apiKey=89c5c791d8ba4d7faf2ae4a6d6f44249&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    handleNextClick = async () => {
    console.log("Next");
    //Free account at News Api can view only 100 items
    if (this.state.page + 1 > 5) {
    }
    else {
        let url = `https://newsapi.org/v2/everything?q=pakistan&searchIn=title&sortBy=publishedAt&sortBy=popularity&apiKey=89c5c791d8ba4d7faf2ae4a6d6f44249&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }
}
  render() {
    return (
      <div>
        <div className="container my-2">
          <h2>ZeeTechV News - Latest New about Pakistan</h2>
          <div className="row">
          {this.state.articles?.map((element)=>{
            if((element.title==="[Removed]") || (element.urlToImage===null))
            {
              return null;
            }
            else{ 
            return( <div className="col-md-3" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,58):""} description={element.description?element.description.slice(0,90):""}
               imgUrl={element.urlToImage} 
               newsUrl={element.url}
               imgAlt={element.title}/>
            </div>);
            }
  })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>


      </div>
    );
  }
}

export default News;
