import React, { Component } from "react";

class Category extends Component {
  state = {};
  render() {
    return (
      <div>
        <h4 className="list-group-item list-group-item-action disabled my-3">
          BOOKS WORLD
        </h4>
        <button
          className="list-group-item list-group-item-action "
          type="button"
          onClick={this.props.wishli}
        >
          My WishList
        </button>
        <button
          className="list-group-item list-group-item-action "
          type="button"
          onClick={this.props.all}
        >
          All Collections{" "}
        </button>
      {/* category name ni map function dwara vadi anni vachaela chesam */}
        <div className="list-group py-3">
          {this.props.dd1.map(m1 => (
            <button
              className="list-group-item list-group-item-action"
              style={{ textAlign: "center" }}
              onClick={() => this.props.dd2(m1.name)}
            >
            {m1.name}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Category;
