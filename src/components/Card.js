import React from 'react';


const Card = ({name,id,email,textInput}) =>{
    return(

    <div className='tc bg-light-yellow  ba  grow dib br3 pa3 ma2  bw2 shadow-10 '>
        <img alt='Spy of the world' src ={`https://robohash.org/${id}?200x200`} />
       <div>
            
            <h2>{name}</h2>
             <p>{email}</p>
       </div>
       <div>
       <br/><p className='i b code'>( lets chat with {name} )</p>
<input 
className="br4 pa3 ba br4 b--green bg-light-yellow"
 type="text"
  placeholder="chatting disabled"

  onChange={textInput}
  />
       </div>

    </div>

    );
}


export default Card;