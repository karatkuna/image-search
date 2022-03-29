import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.term)

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui fluid icon input">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
