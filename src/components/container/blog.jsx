// main container that renders a complete new  blog
// this will contain the state
// information will be passed down to reusable components in form of props
// any event handler or function will be stored in here

// this component renders a single blog

import React from "react";
import RE from "../../banner.png";
import BannerImage from "../common/bannerImage";
import Title from "../common/title";
import Paragraph from "../common/paragraph";
import SidePanel from "../common/sidePanel";
import "./blog.style.css";
import { Data } from "../../api/data";
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogData: [], // objec with single blog data,
      imageUrl: RE,
      currentId: 1,
    };
  }

  componentDidMount() {
    function randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let index = randomInteger(0, Data.length - 1);
    console.log(index);
    this.setState({
      blogData: [Data[index]],
      currentId: Data[index].id,
    });
  }

  changeBlog = (event) => {
    //onclick handler
    let blogData = Data.filter((blog) => {
      return blog.id === event.target.id;
    });
    console.log("Filtered blog data ", blogData);
    this.setState({
      currentId: event.target.id,
      blogData: [...blogData],
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.blogData.map((blog) => {
          return (
            <React.Fragment key={blog.id}>
              <div className="blog-elements">
                <div className="blog-content">
                  <Title title={blog.title} />
                  <BannerImage imageUrl={blog.imageUrl} />
                  <Paragraph body={blog.content} />
                </div>
                <div className="side-panel">
                  <SidePanel
                    relatedLinks={blog.links}
                    changeBlog={this.changeBlog}
                  />
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Blog;
