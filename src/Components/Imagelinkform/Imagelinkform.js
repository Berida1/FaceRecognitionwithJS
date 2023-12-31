import React from 'react';

const Imagelinkform = ({onInputChange, onButtonSubmit}) => {
    return (
        <div className='ma4 mt0'>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Git it a try'}
            </p>
            <div className='center'>
            <div className=' form center pa4 br3 shadow-3'>
                <input className='f4 pa2 w-70 center' type='text'onChange={onInputChange} />
                <button 
                className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
                onclick ={onButtonSubmit}> Detect</button>
                </div>
            </div>
        </div>
    );
}

export default Imagelinkform;