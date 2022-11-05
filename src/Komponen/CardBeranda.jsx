import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logonav from "../image/notelist.svg"

const CardBeranda = () => {
    return (
        <div>
           
        <div className="row mt-5 mb-5 " >
            
        <Card  className='cardnya mb-5' style={{    height :'300px' ,width: '250px', backgroundImage: 'linear-gradient(to left,#10B8B3,#F18504)', margin: 'auto', borderRadius: '15px' }}>
                        <Card.Img variant="top" src={logonav} className="fotokontak" />
                            <Card.Body>
                                <Card.Title className="namanya"></Card.Title>
                                <Card.Text className="nomornya"> 
                                <p>Cek</p>
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
    
        </div>
        </div>
    );
};

export default CardBeranda;