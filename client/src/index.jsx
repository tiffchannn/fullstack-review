import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      term: ''
    }

    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.getRepoGitHub = this.getRepoGitHub.bind(this);
  }

  componentDidMount() {
    this.getRepoGitHub()
  }

  getRepoGitHub() {
    axios.get('/repos')
      .then((data) => {
        this.setState({
          term: data.data
        })
      }, () => console.log("username github: ", this.state.term))
      .catch(err => console.log(err))
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    }, () => console.log(this.state.term));
  }

  search (e) {
     e.preventDefault();
     axios.post('/repos', {term: this.state.term})
       .then(() => this.getRepoGitHub())
       .catch(err => console.log(err))
    console.log(`${this.state.term} was searched`);

  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      {/* <Search onSearch={this.search.bind(this)}/> */}
      <input value={this.state.term} onChange={this.onChange}></input>
      <h4>Add more repos!</h4>
      <button>Add Repos!</button>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));