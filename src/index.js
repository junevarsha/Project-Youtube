/**
what is react?
react is a js library 
used to produce HTML shown to user in web browser

Components are snippets that produce HTML
-> writing js that ultimately produces html

ES6 -> webpack and babel transpile the JSX(subset of js but looks like HTML)

JSX purpose -> to make code more legible

ReactDOM vs React -> to render to DOM use ReactDOM

React - > works with react components
knows how to nest them together, render 

*/

import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDKa0ezpNqKcrdnQx0T0M_rREb3WRL2mSg'

// Downwards data flow
// most parent component in app should be responsible
// for fetching data

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('React Conf')

	}
	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ videos, selectedVideo: videos[0] });
		});
	}
	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
				videos={this.state.videos} />
			</div>
		);
	}
}

// Pass an instance not a class, to pass an instance
// just wrap it in a jsx tags


ReactDOM.render(<App />, document.querySelector('.container'));
