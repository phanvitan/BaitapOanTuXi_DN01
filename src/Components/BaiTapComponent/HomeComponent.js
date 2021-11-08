import React, { Component } from 'react'
import FooterComponent from '../FooterComponent'
import ContentComponent from './ContentComponent'
import HeaderComponent from './HeaderComponent'
import NavComponent from './NavComponent'

export default class HomeComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12" >
                        {/* header component */}
                        <HeaderComponent/>
                    </div>
                    <div className="col-4" >
                        {/* navigation component */}
                        <NavComponent/>
                    </div>
                    <div className="col-8" >
                        {/* content component */}
                        <ContentComponent/>
                    </div>
                    <div className="col-12" >
                        {/* footer component */}
                        <FooterComponent/>
                    </div>
                </div>
            </div>
        )
    }
}
