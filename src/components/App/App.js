import React from 'react';
import { Route, Switch } from "react-router-dom";

//import routes
import Home from '../../Routes/Home/Home'
import AboutUs from '../../Routes/AboutUs/AboutUs'
import SomePage from '../../Routes/SomePage.js/SomePage'

//import additional components
import Header from '../Header/Header'
import SideDrawer from '../SideDrawer/SideDrawer'
import BackDrop from '../BackDrop/BackDrop'

import MenuContext from '../../contexts/MenuContext'

class App extends React.Component {

    static contextType = MenuContext;

    state = {
        sideDrawerIsOpen: false,
        drawerClass: 'side-drawer',
    }

    handleOpenSideDrawer = () => {

        this.setState({
            sideDrawerIsOpen: true,
            drawerClass: 'side-drawer is-open'
        })
    }

    handleCloseSideDrawer = () => {

        this.setState({
            sideDrawerIsOpen: false,
            drawerClass: 'side-drawer'
        })
    }


    render() {
        
        let backDrop;
        if(this.state.sideDrawerIsOpen) {
            backDrop = <BackDrop click = { this.handleCloseSideDrawer } />
        }
        return(
            <div style={ { height: '100%' } }>

                <MenuContext.Provider
                    value = { {
                        sideDrawerIsOpen: this.state.sideDrawerIsOpen,
                        drawerClass: this.state.drawerClass,
                        open: this.handleOpenSideDrawer,
                        close: this.handleCloseSideDrawer
                    }}>

                    <Header />
                    <SideDrawer />
                    { backDrop }

                </MenuContext.Provider>
                
                <main style={ { marginTop: '56px' } }>
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={ Home } 
                    />
                    <Route
                        path='/about'
                        component={ AboutUs } 
                    />
                    <Route 
                        path='/somepage'
                        component={ SomePage }
                    />
                </Switch>
                </main>
            </div>
        )
    }
}

export default App;
