import React, { Component } from "react";
// import Book from "./book";
import Category from "./categories";
import _ from "lodash";
import Pagination from "./pagination";
import { Link } from "react-router-dom";

class Books extends Component {
  state = {
    books: [
      {
        _id: 1,
        title: "Unlocking Android",
        pageCount: 416,
        publishedDate: "2009-04-01",
        authors: "W. Frank Ableson",
        categories: ["Android"],
      },
      {
        _id: 2,
        title: "Android in Action, Second Edition",
        pageCount: 592,
        publishedDate: "2011-01-14",
        authors: "W. Frank Ableson",
        categories: ["Java"],
      },
      {
        _id: 3,
        title: "Specification by Example",
        pageCount: 0,
        publishedDate: "2011-06-03",
        authors: ["Gojko Adzic"],
        categories: ["Software Engineering"],
      },
      {
        _id: 4,
        title: "Flex 3 in Action",
        pageCount: 576,
        publishedDate: "2009-02-02",
        authors: "Tariq Ahmed with Jon Hirschi",
        categories: ["Internet"],
      },
      {
        _id: 5,
        title: "Flex 4 in Action",
        pageCount: 600,
        publishedDate: "2010-11-15",
        authors: ["Tariq Ahmed"],
        categories: ["Internet"],
      },
      {
        _id: 6,
        title: "Collective Intelligence in Action",
        pageCount: 425,
        publishedDate: "2008-10-01",
        authors: ["Satnam Alag"],
        categories: ["Internet"],
      },
      {
        _id: 7,
        title: "Zend Framework in Action",
        pageCount: 432,
        publishedDate: "2008-12-01",
        authors: ["Rob Allen"],
        categories: ["Web Development"],
      },
      {
        _id: 8,
        title: "Flex on Java",
        pageCount: 265,
        publishedDate: "2010-10-15",
        authors: ["Bernerd Allmon"],
        categories: ["Internet"],
      },
      {
        _id: 9,
        title: "Griffon in Action",
        pageCount: 375,
        publishedDate: "2012-06-04",
        authors: "Andres Almiray",
        categories: ["Java"],
      },
      {
        _id: 10,
        title: "OSGi in Depth",
        pageCount: 325,
        publishedDate: "2011-12-12",
        authors: ["Alexandre de Castro Alves"],
        categories: ["Java"],
      },
      {
        _id: 11,
        title: "Flexible Rails",
        pageCount: 592,
        publishedDate: "2008-01-01",
        authors: ["Peter Armstrong"],
        categories: ["Web Development"],
      },
      {
        _id: 13,
        title: "Hello! Flex 4",
        pageCount: 258,
        publishedDate: "2009-11-01",
        authors: ["Peter Armstrong"],
        categories: ["Internet"],
      },
      {
        _id: 14,
        title: "Coffeehouse",
        pageCount: 316,
        publishedDate: "1997-07-01",
        authors: ["Levi Asher"],
        categories: ["Miscellaneous"],
      },
      {
        _id: 15,
        title: "Team Foundation Server 2008 in Action",
        pageCount: 344,
        publishedDate: "2008-12-01",
        authors: ["Jamil Azher"],
        categories: ["Microsoft .NET"],
      },
      {
        _id: 16,
        title: "Brownfield Application Development in .NET",
        pageCount: 550,
        publishedDate: "2010-04-16",
        authors: ["Kyle Baley"],
        categories: ["Microsoft"],
      },
      {
        _id: 17,
        title: "MongoDB in Action",
        pageCount: 0,
        publishedDate: "2011-12-12",
        authors: ["Kyle Banker"],
        categories: ["Next Generation Databases"],
      },
      {
        _id: 18,
        title: "Distributed Application Development with PowerBuilder 6.0",
        pageCount: 504,
        publishedDate: "1998-06-01",
        authors: ["Michael J. Barlotta"],
        categories: ["PowerBuilder"],
      },
      {
        _id: 19,
        title: "Jaguar Development with PowerBuilder 7",
        pageCount: 550,
        publishedDate: "1999-08-01",
        authors: ["Michael Barlotta"],
        categories: ["PowerBuilder"],
      },
    ],
    subbook: [],
    wishlist: [],
    cate: [
      { name: "PowerBuilder" },
      { name: "Next Generation Databases" },
      { name: "Microsoft" },
      { name: "Microsoft .NET" },
      { name: "Android" },
      { name: "Java" },
      { name: "Software Engineering" },
      { name: "Internet" },
      { name: "Web Development" },
      { name: "Miscellaneous" },
    ],
    pageSize: 6,
    selectedPage: 1,
  };
  nid = (name) => {
    var mov1 = this.state.books.filter((m1) => name == m1.categories);
    this.setState((this.state.subbook = mov1));
    this.setState({ selectedPage: 1 });
  };

  wish = (id) => {
    var boo = this.state.books.filter((b1) => b1._id == id._id);
    console.log(boo[0]);

    var wishlist = [boo[0], ...this.state.wishlist];
    this.setState((this.state.wishlist = wishlist));
  };

  allbooks = () => {
    var mov1 = this.state.books;
    this.setState((this.state.subbook = mov1));
  };
  wishli = () => {
    var subbook = this.state.wishlist;
    this.setState({ subbook });
  };
  paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
  };
  handlePageSelect = (page) => {
    this.setState({ selectedPage: page });
  };
  render() {
    const paginatedMovies = this.paginate(
      this.state.subbook,
      this.state.selectedPage,
      this.state.pageSize
    );
    return (
      <div>
        <div className="row">
          <div className="col-lg-3">
            {" "}
            <Category
              dd1={this.state.cate}
              dd2={this.nid}
              all={this.allbooks}
              wishli={this.wishli}
            />
          </div>


          <div className="col-lg-9">

            
            <div class="row row-cols-1 row-cols-md-3">
              {paginatedMovies.map((m1) => (
                <div class="col mb-3">
                  <div class="card h-100">
                    <img
                      src="https://picsum.photos/200/300/?blur=2"
                      class="card-img-top"
                     height = "100px"
                     width = '100px'
                      alt="..."
                    />
                    <div class="card-body">
                      <h4>Title:{m1.title}</h4>
                      <p class="card-text">
                        <h5>Author:{m1.authors}</h5>
                      </p>
                      <small id="passwordHelpInline" class="text-muted ml-4">
                        Published Date:{m1.publishedDate}
                      </small>
                      <div>
                        {" "}
                        <button
                          href="#"
                          class="btn btn-primary"
                          onClick={() => this.wish(m1)}
                        >
                          Add To wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Pagination
          pageSize={this.state.pageSize}
          total={this.state.subbook.length}
          selectedPage={this.state.selectedPage}
          handlePageSelect={this.handlePageSelect}
        />
      </div>
    );
  }
}

export default Books;
