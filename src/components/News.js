import React, { Component } from "react";
import NewsItem from "./NewsItem";
import newsJson from "./sampleOutput.json";

export class News extends Component {
  render() {
    return (
      <div>
        <div className="container my-2">
          <h2>ZeeTechV - Latest News Headlines</h2>
          <div className="row">
          {newsJson.articles?.map((element, i)=>{
            if((element.title==="[Removed]") || (element.urlToImage===null))
            {
              return null;
            }
            else{ 
            return( <div className="col-md-3" key={i++}>
              <NewsItem  title={element.title?element.title.slice(0,58):""} description={element.description?element.description.slice(0,90):""}
               imgUrl={element.urlToImage} 
               newsUrl={element.url}
               imgAlt={element.title}/>
            </div>);
            }
  })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
