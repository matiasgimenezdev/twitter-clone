import React from 'react';
import './Tweet.scss';
import { GoVerified } from 'react-icons/go';

function Tweet(props) {
	const { tweetData } = props;
	return (
		<article className='tweet'>
			<div className='tweetUser'>
				<img
					className='tweetUserPicture'
					src={tweetData.picture}
					alt={tweetData.user}
				/>
				<div className='tweetUserData'>
					{tweetData.verified === 'true' ? (
						<p className='tweetName'>
							{tweetData.name}
							<GoVerified className='verifiedIcon' />
						</p>
					) : (
						<p className='tweetName'>{tweetData.name}</p>
					)}

					<p className='tweetUsername'>
						<span>{tweetData.user}</span>
						<span style={{ fontSize: '2rem' }}>·</span>
						<span>{tweetData.date}</span>
					</p>
				</div>
			</div>
			<div className='tweetContent'>
				{tweetData.text ? (
					<p className='tweetText'>{tweetData.text}</p>
				) : null}

				{tweetData.image ? (
					<img
						className='tweetImage'
						src={tweetData.image}
						alt={`media of ${tweetData.user}'s tweet`}
					/>
				) : null}
			</div>
		</article>
	);
}

export default Tweet;
