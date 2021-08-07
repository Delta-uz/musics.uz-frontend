//import {Link} from 'react-router-dom'
import LeftMenu from './LeftMenu'
export default function Dashboard(props){
    return(
        <div>
            <LeftMenu isDarkTheme={props.isDarkTheme}/>
        </div>
    )
}