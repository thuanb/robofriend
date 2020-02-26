import React from 'react';


//onchange event (same with HTML)
const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input className='pa3 ba b--green bg-lightest-blue'
			 type='search' 
			 placeholder='search something'
			 onChange={searchChange} />
		</div>
		);
}

export default SearchBox;