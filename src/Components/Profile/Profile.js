import React from 'react'
import './Profile.css'

import cover from '../../images/cover.jpeg'
import dp from '../../images/dp.jpeg'
import diamond from '../../images/diamond.png'
import tick from '../../images/check.png'
import {Link}  from 'react-router-dom'
const Profile = ({datas}) => {
  return (
    <div className='profile'>
           <div className="users">
           <img src={cover} alt="cover pic"  className='cover'/>
            <div className="user">
            <img src={dp} alt="dp pic"  className='dp'/>
            <div className="details">
                <div className="name">
                    <span>Satyam Kumar</span>
                    <img src={diamond} alt="" />
                    <img src={tick} alt="" />
                </div>
                <div className="follow">
                    <div className='follower'>
                        <div className='follows'>1234</div>
                        <span>followers</span>
                    </div>
                    <div className='following'>
                    <div className='follows'>234</div>
                        <span>followings</span>
                    </div>
                </div>
            </div>
            </div>
           </div>

            <div className="user-details">
                <span className='designation'>Aspiring Front End Developer</span>
                <a href="https://www.instagram.com/the_silent_strome/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/the_silent_strome/</a>
                <div className="attentions">
                    {
                        datas.map((data,idx)=>{
                            return (
                                <div className="data" key={idx}  >
                                    <img src={data.logo} alt="like" style={{background:`${data.bg}`}}/>
                                    <span>{data.count}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    </div>
  )
}

export default Profile