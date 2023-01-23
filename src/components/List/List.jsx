import React from 'react';
import './List.scss';
import Item from '../Item/Item';

function List(props) {
	const { data, type } = props;

	return type === 'trendings' ? (
		<section className='listContainer'>
			<h2>What's happening</h2>
			<ul className='list'>
				{data.map((value, index) => {
					return <Item key={index} itemData={value} type={type} />;
				})}
				<span className='showMore'> Show more</span>
			</ul>
		</section>
	) : (
		<section className='listContainer '>
			<h2>Who to follow</h2>
			<ul className='list '>
				{data.map((value, index) => {
					return (
						<Item
							key={index}
							itemData={value}
							type={type}
							buttonVisible={true}
						/>
					);
				})}
				<span className='showMore'> Show more</span>
			</ul>
		</section>
	);
}

export default List;
