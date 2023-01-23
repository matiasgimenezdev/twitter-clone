import React from 'react';
import './Feed.scss';
import tweets from '../../utils/tweets.json';
import Tweet from '../Tweet/Tweet';

function Feed() {
	function handleClick(e) {
		location.reload();
	}

	return (
		<div className='feed'>
			<h1 className='title'>Home</h1>
			<div className='form'>
				<img
					src='https://pbs.twimg.com/profile_images/1552038036963221513/Jey83930_400x400.jpg'
					alt='profilePic'
					className='formPic'
				/>
				<div
					className='tweetArea'
					contentEditable
					maxLength={240}
					placeholder='What´s happening?'
				/>
				<button className='matweetButton' onClick={handleClick}>
					Matweet
				</button>
			</div>
			{tweets.map((tweetData) => {
				return <Tweet tweetData={tweetData} key={tweetData.user} />;
			})}
		</div>
	);
}

export default Feed;
