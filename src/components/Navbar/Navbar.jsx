import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BiBookmarkHeart } from 'react-icons/bi';
import { TbMessages } from 'react-icons/tb';
import { FaHome } from 'react-icons/fa';
import { MdOutlineTravelExplore, MdOutlineEmojiPeople } from 'react-icons/md';
import { RiNotification2Fill } from 'react-icons/ri';
import { BsListCheck } from 'react-icons/bs';
import { CiSquareMore } from 'react-icons/ci';
import Item from '../Item/Item';
import './Navbar.scss';

function Navbar() {
	const mockProfile = {
		name: 'matías',
		user: '@yomatias',
		picture:
			'https://pbs.twimg.com/profile_images/1552038036963221513/Jey83930_400x400.jpg',
	};

	return (
		<div className='navBar'>
			<nav className='navContainer'>
				<AiFillHeart className='logo' />
				<p className='homeItem'>
					<FaHome className='icon' />
					Home
				</p>
				<p className='exploreItem'>
					<MdOutlineTravelExplore className='icon' />
					Explore
				</p>
				<p className='notificationsItem'>
					<RiNotification2Fill className='icon' />
					Notifications
				</p>
				<p className='messagesItem'>
					<TbMessages className='icon' />
					Messages
				</p>
				<p className='bookmarksItem'>
					<BiBookmarkHeart className='icon' />
					Bookmarks
				</p>
				<p className='listsItem'>
					<BsListCheck className='icon' />
					Lists
				</p>
				<p className='profileItem'>
					<MdOutlineEmojiPeople className='icon' />
					Profile
				</p>
				<p className='moreItem'>
					<CiSquareMore className='icon' />
					More
				</p>
				<button className='matweetButton'>Matweet</button>
				<Item
					itemData={mockProfile}
					type='people'
					buttonVisible={false}
				/>
			</nav>
		</div>
	);
}

export default Navbar;
