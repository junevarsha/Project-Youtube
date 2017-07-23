import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDKa0ezpNqKcrdnQx0T0M_rREb3WRL2mSg'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {videos: [] };

		YTSearch({key: API_KEY, term: "jab we met songs"}, (videos) => {
			this.setState({ videos });
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}


ReactDOM.render(<App />, document.querySelector('.container'));