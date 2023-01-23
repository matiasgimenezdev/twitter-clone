import React from 'react';
import './Search.scss';
import { FiSearch } from 'react-icons/fi';

function Search() {
	return (
		<div className='searchContainer'>
			<FiSearch color='grey' fontSize='1.4rem' />
			<input
				type='text'
				className='searchBar'
				placeholder='  Search Twitter'
			/>
		</div>
	);
}

export default Search;
