import React from 'react';
import MenuContext from '../../contexts/MenuContext';

import './drawerToggleButton.css';

class DrawerToggleButton extends React.Component {

    static contextType = MenuContext;

    handleClick = e => {
        e.preventDefault()
        this.context.sideDrawerIsOpen
        ? this.context.close()
        : this.context.open()
    }

    render() {
        return(
            <section 
                className="drawer-toggle-button"
                onClick = { this.handleClick }>
                <i className="fas fa-bars fa-2x"></i>
            </section>
        )
    }
}

export default DrawerToggleButton