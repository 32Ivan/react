import React from 'react';

const Card = ({name,email,id}) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?150x150`} width="200" hight="200"/>
		<div>
				<h4>{name}</h4>
				<h6>{email}</h6>
			</div>
		</div>	
	);
}

export default Card;

  	