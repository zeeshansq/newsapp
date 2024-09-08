import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

    let {title, description, imgUrl, newsUrl, imgAlt} = this.props;
    return (
      <div className='my-2'>
            <div className="card">
            <img src={imgUrl} alt={imgAlt} style={{height:"10rem", width:"16rem", padding:"10px"}} />
            <div className="card-body">
                <h6 className="card-title">{title}...</h6>
                <p className="card-text text-sm">{description}...<a href={newsUrl} target="_blank" rel="noreferrer"> read more</a></p>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem