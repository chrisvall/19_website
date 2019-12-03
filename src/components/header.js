import React from "react"
import Link from 'gatsby-link'
import './header.scss'
import burger from '../images/burger.svg'



class Header extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      hasScrolled: false
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
         <img src={burger}/>
        </div>

      </div>
      )
  }
}


// export default Header
 export default Header