import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return(<div className={s.content}>
        <div>
            <img src='http://ramki-photoshop.ru/priroda/priroda50_small.png'/>
        </div>
        <div>
            <img src='https://cdn.icon-icons.com/icons2/879/PNG/128/olimpycs_17_icon-icons.com_68623.png'/>
        </div>
        <MyPosts />
    </div>)
}

export default Profile;
