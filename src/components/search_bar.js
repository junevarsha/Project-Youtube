import React, { Component } from 'react'

// Dumb component
// class component
// gives us a bunch of functionalities from react.component class
class SearchBar extends Component {
	
	// called everytime when
	// an instance is created

	// initializing state
	// and variables
	constructor(props){
		// this is inheritance
		super(props);
		// this.state = is used only in the constructor function
		// everywhere else we use this.setState
		this.state = { term: ''}
	}

	// always create render
	// whenever we try to render search bar
	// render is called so it must return some JSX

	// Controlled component has its value
	// set by state
	// so value changes only when state changes
	// Before: input tells the state what it should be
	// Ideal way: state should tell the input what its value should be

	// this.setState causes comp. to re-render and *** value is not changed ****
	// value is now set to the new value

	// declarative flow and not imprative
	render() {

		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
					placeholder="Search..." />
			</div>
		)
	}

	// whenever state changes 
	// component re-renders and 
	// and new value of the search bar (event.target.value)
	// is added to the DOM
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;