import React, { Component } from 'react'
export default class StateDemo extends Component {
    // isLogin = false;
    username = "HV001";
    state = {
        isLogin: false
    }
    renderLogin = () => {
        if (this.state.isLogin) {
            return <span className="text-white">{this.username}</span>;
        }
        return <button className="btn btn-success" onClick={this.handleLogin}>LOGIN</button>;
    }
    handleLogin = async() => {
        // this.isLogin = true;
        // console.log(this.isLogin);
        let newState = {
            isLogin: true
        }

//CACH 1:  
        // this.setState(newState, () => {
        //     console.log(this.state.isLogin)
        // });

        //CACH 2:  
        // SE BI BẤT ĐỒNG BỘ
        // this.setState(newState);
        // console.log(this.state.isLogin);


        //CACH 3:  async await
      await  this.setState(newState);
        console.log(this.state.isLogin);

    }
    render() {
        return (
            <div className="container">
                {/* <h1>State demo</h1>*/}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                            </li>
                        </ul>

                        {this.renderLogin()}
                        {/* {this.isLogin === true ? <span className="text-white">{this.username}</span> : <button className="btn btn-success">LOGIN</button>} */}
                        {/* {this.isLogin ? <span className="text-white">{this.username}</span> : <button className="btn btn-success">LOGIN</button>} */}
                    </div>
                </nav>
            </div>
        )
    }
}
