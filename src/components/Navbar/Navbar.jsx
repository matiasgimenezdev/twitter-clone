import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BiBookmarkHeart } from 'react-icons/bi';
import { TbMessages } from 'react-icons/tb';
import { FaHome } from 'react-icons/fa';
import { MdOutlineTravelExplore, MdOutlineEmojiPeople } from 'react-icons/md';
import { RiNotification2Fill } from 'react-icons/ri';
import { BsListCheck, BsPenFill } from 'react-icons/bs';
import { CgMoreR } from 'react-icons/cg';
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
					<span>Home</span>
				</p>
				<p className='exploreItem'>
					<MdOutlineTravelExplore className='icon' />
					<span>Explore</span>
				</p>
				<p className='notificationsItem'>
					<RiNotification2Fill className='icon' />
					<span>Notifications</span>
				</p>
				<p className='messagesItem'>
					<TbMessages className='icon' />
					<span>Messages</span>
				</p>
				<p className='bookmarksItem'>
					<BiBookmarkHeart className='icon' />
					<span>Bookmarks</span>
				</p>
				<p className='listsItem'>
					<BsListCheck className='icon' />
					<span>Lists</span>
				</p>
				<p className='profileItem'>
					<MdOutlineEmojiPeople className='icon' />
					<span>Profile</span>
				</p>
				<p className='moreItem'>
					<CgMoreR className='icon' />
					<span>More</span>
				</p>
				<button className='matweetButton'>
					<span>Matweet</span>

					<BsPenFill className='penIcon' />
				</button>
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
