import React,{useEffect} from 'react';
import CardBeranda from './../Komponen/CardBeranda';
import userBerandaAction from '../redux/beranda/berandaAction';
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import logonav from "../image/notelist.svg"



export const Beranda = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        const loggedInUser = localStorage.getItem("user")

        if(loggedInUser){
            dispatch(userBerandaAction.fetchBeranda())
        }
        // esLint-disable-next-line
    },[])

    const {user} = useSelector((state)=>state.userBeranda)

    if(user === null){
        return<div>loading</div>
    }

    

    const logout = ()=>{
        localStorage.clear()
        navigate("/")
        window.location.reload()
    }




    return (
        <div>
            <h2 className='mt-4' style={{marginLeft:'-600px'}}>Welcome on my Beranda {user.user.nama}  </h2>
            <div>
           
           <div className="row mt-5 mb-5 " >
            
           <Card  className='cardnya mb-5' style={{    height :'600px' ,width: '400px', backgroundImage: 'linear-gradient(to left,#10B8B3,#F18504)', margin: 'auto', borderRadius: '15px' }}>
                           <Card.Img variant="top" src={logonav} className="fotokontak" />
                               <Card.Body>
                                   <Card.Title className="namanya">Nama anda adalah {user.user.nama}</Card.Title>
                                   <Card.Text className="nomornya"> 
                                   Email anda adalah {user.user.email}
                                   
                                   </Card.Text>
                                   
                               </Card.Body>
                           </Card>
       
           </div>
           </div>
           <span>
        <Button type='submit' className='logout' onClick={logout}>LogOut</Button>

        </span>
        </div>
    );
};

