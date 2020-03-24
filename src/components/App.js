import React from 'react';

import SearchBar from "./SearchBar";
import youtube from '../api/youtube';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component {
    onTermSubmit = async (term) => {
       const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
       console.log(response)
    };

    render() {

        return (
            <div className="ui container">
                App
                <SearchBar onFormSubmit={this.onTermSubmit}/>
            </div>

        )
    }
}

export default App;