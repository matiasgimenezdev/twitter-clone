import React, { useState } from 'react';
import './Item.scss';
import { RiMoreFill } from 'react-icons/ri';
import { GoVerified } from 'react-icons/go';

function Item(props) {
	const { itemData, type, buttonVisible } = props;
	const [following, setFollowing] = useState(false);

	function handleClick() {
		setFollowing(!following);
	}

	function renderButton() {
		if (buttonVisible) {
			if (following) {
				return (
					<button className='followingButton' onClick={handleClick}>
						<span className='followingText'>Following</span>
						<span className='unfollowText'>Unfollow</span>
					</button>
				);
			} else {
				return (
					<button className='followButton' onClick={handleClick}>
						Follow
					</button>
				);
			}
		} else {
			return null;
		}
	}

	return type === 'people' ? (
		<li className='userItem profile'>
			<div className='userContainer'>
				<img
					className='userPicture'
					src={itemData.picture}
					alt={itemData.user}
				/>
				<div className='userData'>
					{itemData.verified === 'true' ? (
						<p className='name'>
							{itemData.name}{' '}
							<GoVerified className='verifiedIcon' />
						</p>
					) : (
						<p className='name'>{itemData.name}</p>
					)}

					<p className='user'>{itemData.user}</p>
				</div>
			</div>
			{renderButton()}
		</li>
	) : (
		<li className='trendingItem'>
			<div className='trendingData'>
				<p className='topic'>{itemData.topic}</p>
				<p className='title'>{itemData.title}</p>
			</div>
			<RiMoreFill className='moreButton' />
		</li>
	);
}

export default Item;
