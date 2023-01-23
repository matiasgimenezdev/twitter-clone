import React, { useState } from 'react';
import './Tweet.scss';
import { GoVerified } from 'react-icons/go';
import { FaRetweet } from 'react-icons/fa';
import { SiDialogflow } from 'react-icons/si';
import { AiFillStar } from 'react-icons/ai';
import { CgLoadbarSound } from 'react-icons/cg';

function Tweet(props) {
	const [isRetweetActive, setRetweetActive] = useState(false);
	const [isFavouriteActive, setFavouriteActive] = useState(false);
	const { tweetData } = props;

	function handleFavourite() {
		setFavouriteActive(!isFavouriteActive);
	}

	function handleRetweet() {
		setRetweetActive(!isRetweetActive);
	}

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
			<section className='tweetControllers'>
				<div className='controller answer'>
					<SiDialogflow className='icon' />
					<span className='count'>{tweetData.answers}</span>
				</div>
				{isRetweetActive ? (
					<div
						className='controller retweet retweetActive'
						onClick={handleRetweet}
					>
						<FaRetweet className='icon' />
						<span className='count'>{tweetData.retweets}</span>
					</div>
				) : (
					<div className='controller retweet' onClick={handleRetweet}>
						<FaRetweet className='icon' />
						<span className='count'>{tweetData.retweets}</span>
					</div>
				)}

				{isFavouriteActive ? (
					<div
						className='controller favourite favouriteActive'
						onClick={handleFavourite}
					>
						<AiFillStar className='icon' />
						<span className='count'>{tweetData.favourites}</span>
					</div>
				) : (
					<div
						className='controller favourite'
						onClick={handleFavourite}
					>
						<AiFillStar className='icon' />
						<span className='count'>{tweetData.favourites}</span>
					</div>
				)}

				<div className='controller views'>
					<CgLoadbarSound className='icon' />
					<span className='count'>{tweetData.views}</span>
				</div>
			</section>
		</article>
	);
}

export default Tweet;
