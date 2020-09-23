import React from 'react';

const SearchBox =({searchfield, searchChange}) => {
	return (
		<div className='pa1'>
			<input
				className=' tc pa1  ba b--green bg-lightest-blue '
				style={{borderRadius: '20px'}}
				type='search'
				placeholder='search robots'
				onChange={searchChange}
			/>
		</div>
	); 
}

export default SearchBox;