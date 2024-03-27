import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    const boxes = Array.isArray(box) ? box : [];

    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
                {boxes.map((item, index) => (
                    <div
                        key={index}
                        className='bounding-box'
                        style={{
                            top: item.topRow,
                            right: item.rightCol,
                            bottom: item.bottomRow,
                            left: item.leftCol,
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default FaceRecognition;