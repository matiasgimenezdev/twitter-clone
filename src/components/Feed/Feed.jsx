import React from 'react';
import './Feed.scss';
import tweets from '../../utils/tweets.json';
import Tweet from '../Tweet/Tweet';

function Feed() {
	return (
		<div className='feed'>
			{tweets.map((tweetData) => {
				return <Tweet tweetData={tweetData} key={tweetData.user} />;
			})}
		</div>
	);
}

export default Feed;
