import React, { Component } from 'react';
// COMPONENTS
import PostList from './PostList';

class App extends Component {

    render() {
        return(
            <div className="ui container">
                <PostList />
            </div>
        );
    }
}
export default App;