import React from 'react';
import './Sidebar.scss';
import Search from '../Search/Search';
import List from '../List/List';
import peopleData from '../../utils/people.json';
import trendingsData from '../../utils/trendings.json';

function Sidebar() {
	return (
		<section className='sideBar'>
			<Search />
			<List data={trendingsData} type='trendings' />
			<List data={peopleData} type='people' />
		</section>
	);
}

export default Sidebar;
