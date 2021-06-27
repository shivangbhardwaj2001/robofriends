import React from 'react';



const SearchBox = ({searchChange}) =>{



return(
 	<div className='f4  pa2'>
	<input 
	className='pa3 ba br4 b--green bg-lightest-blue' 
	type='search'  
	placeholder='type robot name here.. ' 
	onChange={searchChange}
	/>
	</div>
	);



}


export default SearchBox;