import React from "react"
import Link from 'gatsby-link'
import './header.scss'
import burger from '../images/burger.svg'
import close from '../images/close.svg'




class Header extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      hasScrolled: false
    }

    this.state = {
      isSwitchOn: false
    }

    
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
}

handleScroll = (event) => {
  const scrollTop = window.pageYOffset

  if (scrollTop > 50) {
    this.setState({ hasScrolled: true })
  } else {
    this.setState({ hasScrolled: false })
  }
}




  render() {
  
    console.log(this.state.isSwitchOn)


    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          {/* <Link to="/work">work</Link> */}
          <Link to="/">home</Link>
          {/* <Link to="/articles">articles</Link> */}
          <Link to="/about">about</Link>
           <Link to="/contact">contact</Link>
        </div>

        <div className="HeaderGroupMob">
          <div onClick={ () => this.setState({isSwitchOn: true})}>
            <img src={burger}/>
          </div>

          {/* <div className="inactive"> */}
          <div className={ this.state.isSwitchOn ? "active" : "inactive"}>
            <div className="MobMenuGroup">
              
              <div onClick={ () => this.setState({isSwitchOn: false})}>
               <img src={close}/>
              </div>

              <a href="/"><h1>home</h1></a>
              <a href="/about"><h1>about</h1></a>
              <a href="/contact"><h1>contact</h1></a> <br></br>
            </div>
          </div>

         {/* <MobMenu></MobMenu>  */}
        </div>
      </div>
      )
  }
}


 export default Header