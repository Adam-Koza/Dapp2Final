import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.receivePosts = this.receivePosts.bind(this);
  //   this.fetchPosts = this.fetchPosts.bind(this);
  // }

  // fetchPosts = async () => {
  //   return dispatch => {
  //     return fetch(`https://gist.githubusercontent.com/thomasmetta/4f86937797f89cc74547d985810dd5b6/raw/374f7ae4b9b9817f74f534b27e97c17a73eb6b4f/random.json`)
  //       .then(response => response.json())
  //       .then(json => dispatch(receivePosts(json)))
  //   }
  // };

  // receivePosts = async (json) => {
  //   return json.filter((item) => {
  //     console.log(item);
  //     return item.isActive == true;
  //   })

  // };

  

  render() {
    async function fetchPosts () {
      return dispatch => {
        return fetch(`https://gist.githubusercontent.com/thomasmetta/4f86937797f89cc74547d985810dd5b6/raw/374f7ae4b9b9817f74f534b27e97c17a73eb6b4f/random.json`)
          .then(response => response.json())
          .then(json => dispatch(receivePosts(json)))
      }
    };
    function receivePosts (json) {
      let filtered = json.filter((item) => {
        console.log(item);
        return item.isActive === true;
      });
      let mapped = filtered.map((items) => {
        return { "first": items.name.first, "last": items.name.last, "balance":items.balance };
      });
      console.log(mapped);
      return mapped;
    };

    fetchPosts();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
