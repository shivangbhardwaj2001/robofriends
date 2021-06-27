import React from 'react';



const Scroll = (props)=>{
	// console.log(props);
	return(
		<div className='bg-blue' style={{  overflowY: 'scroll',height:'500px',border:'5px solid black'}}>
		{props.children}
		</div>		



		);
};

export default Scroll;








 