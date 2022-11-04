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
        const loginUser = localStorage.getItem("user")

        if(loginUser){
            dispatch(userBerandaAction.fetchBeranda())
        }
        // esLint-disable-next-line
    },[])

    const {user} = useSelector((state)=>state.userBeranda)

    if(user===null){
        return<div>loading</div>
    }

    console.log(user)

    const logout = ()=>{
        localStorage.clear()
        navigate("/")
        window.location.reload()
    }




    return (
        <div>
            <h2 className='mt-4' style={{marginLeft:'-900px'}}>Welcome </h2>
            <div>
           
           <div className="row mt-5 mb-5 " >
               
           <Card  className='cardnya mb-5' style={{    height :'300px' ,width: '250px', backgroundImage: 'linear-gradient(to left,#10B8B3,#F18504)', margin: 'auto', borderRadius: '15px' }}>
                           <Card.Img variant="top" src={logonav} className="fotokontak" />
                               <Card.Body>
                                   <Card.Title className="namanya"><p></p></Card.Title>
                                   <Card.Text className="nomornya"> 
                                   <p>jika  mau keluar silahkan logout yaa</p>
                                   </Card.Text>
                                   
                               </Card.Body>
                           </Card>
       
           </div>
           </div>
           <span>
        <Button type='submit' className='createdata' onClick={logout}>LogOut</Button>

        </span>
        </div>
    );
};

