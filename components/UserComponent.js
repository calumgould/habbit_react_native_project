import {useEffect} from 'react';

import Database from '../Database';

const db = new Database();

const User = ({newUser}) => {

    const saveUser = (newUser) => {;
        if(Object.keys(newUser).length === 0) return;
        console.log('NEWUSERNEWUSERNEWUSER>>>>>>>>', newUser)
        
        db.addUser(newUser)
        .then((result) => {
            console.log('result', result);
        })
        .catch((err) => {
            console.log('error', err);
        })
    }

    useEffect(() => {
        saveUser(newUser)
    }, [newUser])

    return null;
}
 
export default User;


