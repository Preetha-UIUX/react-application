import React from 'react'
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleTheme } from '../redux/feedbackThemeSlice';

const Header = ({title}) => {

    const dispatch = useDispatch();
    const isDark = useSelector((state) => state.feedbackTheme.isDark);

    const style = {
        backgroundColor: isDark ? '#333' : '#f8f8f8',
        color: isDark ? '#fff' : '#000',
        padding: '20px 0'
    };

  return (
    <header style={style}>
        <div className='container flex items-center justify-between'>
            <Link to="/"><h1 className={`text-2xl text-left ${isDark ? 'text-white' : 'text-black'}`}>{title}</h1></Link>
            <div className="flex items-center gap-4">
                <Link to="/about" className={`${isDark ? 'text-white' : 'text-black'}`}>About</Link>
                <button className='btn btn-secondary flex items-center' onClick={() => dispatch(toggleTheme())}>
                    {isDark ? 'Light' : 'Dark'}
                    <span className='pr-2'>{isDark ? <CiLight /> : <CiDark />}</span>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header
