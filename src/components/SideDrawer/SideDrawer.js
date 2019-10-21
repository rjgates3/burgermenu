import React from 'react';
import { Link } from 'react-router-dom';
import MenuContext from '../../contexts/MenuContext';

import './sideDrawer.css'

class SideDrawer extends React.Component {

    static contextType = MenuContext;

    handleLinkClicked = () => {
        this.context.close();
    }

    render() {
        return(
            <nav className={ this.context.drawerClass }>
                <div className="sidebar-navigation-items">    
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className="menu"
                                onClick = { this.handleLinkClicked }>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="menu"
                                onClick = { this.handleLinkClicked }>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/somepage"
                                className="menu"
                                onClick = { this.handleLinkClicked }>
                                Some Page
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default SideDrawer