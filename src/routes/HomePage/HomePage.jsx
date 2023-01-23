import React from 'react';
import './HomePage.scss';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';

function HomePage() {
	return (
		<div className='mainContainer'>
			<Navbar />
			<Feed />
			<Sidebar />
		</div>
	);
}

export default HomePage;
