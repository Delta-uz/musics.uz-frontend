import {AiOutlineHome} from 'react-icons/ai'
export default function LeftMenu(props){
    const isDarkTheme = props.isDarkTheme
    return(
        <div className={props.isDarkTheme?'LeftMenu-light':'LeftMenu-dark'}>
            <div className='menu-header'>
                <h2>Dream Music</h2>
            </div>
            <h3 className='under-manu-header'>Recommend</h3>
            <button className='menu-btn'> <AiOutlineHome className='left-menu-icon'/> Home</button>
        </div>
    )
}