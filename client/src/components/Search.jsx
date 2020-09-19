import React from 'react';
import axios from 'axios';

// when use types in github username, will send post request to github api to search for user's with specified input
// on search, get github users: login, id, repos url

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

  }



  // search / post based on github username
  handleSubmit(e) {
    this.props.onSearch(this.state.term)

    console.log('this is from search')
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={this.onChange}/>
      <button onClick={this.handleSubmit}> Add Repos </button>
    </div>

    )
  }
}

export default Search;