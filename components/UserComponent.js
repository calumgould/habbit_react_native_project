import React, {useState, useEffect} from 'react';

import Database from '../Database'

const db = new Database();

const User = ({user}) => {

    const saveUser = (user) => {
        db.addUser(user)
        .then((result) => {
            console.log('result', result);
        })
        .catch((err) => {
            console.log('error', err);
        })
    }

    useEffect(() => {
        console.log('user', user)
        saveUser(user)
    }, [user])

    return null;
}
 
export default User;