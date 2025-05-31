import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          navigate("/browse");
          // ...
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
          // ...
        }
      });
      return () => unsubscribe();
}, [])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src={LOGO}
    alt='logo'/>
    {user && (<div className='flex p-2'>
      {showGPTSearch && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang=>
            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
          )}
      </select>}
      <button className='py-2 px-4 mx-4 my-4 bg-purple-800 text-white rounded-lg' onClick={handleGPTSearchClick}>{showGPTSearch? "Homepage" : "GPT Search"}</button>
    <img className='w-12 h-12' src={user?.photoURL} alt='usericon'/>
    <button className='font-bold text-white' onClick={handleSignOut}>(SignOut)</button>
    </div>)}
    </div>
  )
}

export default Header