import {React, useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom';
import './Dropdown.css';
// import './../Header.css';
import glogo from './glogo.svg';
import left from './left.svg';
import { CSSTransition } from 'react-transition-group';

// import { ReactComponent as BellIcon } from './icons/bell.svg';
// import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
// import { ReactComponent as CaretIcon } from './icons/caret.svg';
// import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
// import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import {ReactComponent as BurgerIcon} from './icons/burger.svg';
import {ReactComponent as CloseIcon} from './icons/cross.svg';


 function Trigger(){
     
    const[click, setClick] = useState(false);
    
    const handleClick1 = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

      const node = useRef();
      const handleClick = e => {
        if (node.current.contains(e.target)) {
          // inside click
          return;
        }
        // outside click
        setClick(false);
      };

      const handleChange = selectedValue => {
        // onChange(selectedValue);
        setClick(false);
      };

      useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, [node]);
    
    return(

        <nav className="mobile-navbar" ref={node} >
                
                <div className="polo">

                  <div>
                      <Link className="" to="/">
                          <img src={glogo} className=""  alt=""/>
                      </Link>
                   </div> 
                
                  <div className=" "  onClick={handleClick1}>
                          {click ? <CloseIcon /> : <BurgerIcon/> }
                  </div>

                </div>
                

                  
                 <ul  className={click ? 'nav-menu active' : 'nav-menu'}>

                    <div style={{ width: '100%', height: 'auto',backgroundColor:'#dfdadac4', display: 'flex',flexDirection: 'column',padding: '1rem '}}>
                      
                      <div style={{ width: '100%', display: 'flex',alignItems: 'center',gap:'1rem',}}>
                       
                            <img style={{ padding:'1rem .5em',backgroundColor:'#FEE419',borderRadius:'5px'}} src={glogo} className=""  alt=""/>
                          
                            <span>
                                <p>Hi , Username</p>
                                <Link to="/dashboard/overview" className="s12">Go to Dashboard</Link>
                            </span> 

                      </div>
                      
                     {/* <div style={{display: 'flex',flexDirection: 'column',}}>
                          <Link to='login' onClick={closeMobileMenu}>Login</Link>   
                          <Link to='/signup' onClick={closeMobileMenu}>Signup</Link>   
                     </div>  */}

                   </div> 

                      <Dropdown />
                 </ul>
        </nav>

    );


function Dropdown() {
    


    const [activeMenu, setActiveMenu] = useState('main'); // Trigeger 
    const [menuHeight, setMenuHeight] = useState(null);   // Height of menu
    const dropdownRef = useRef(null);

    useEffect(() => {
            //  setMenuHeight(dropdownRef.current.firstChild.offsetHeight)
            //  setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)

  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

function DropdownItem(props) {
    return (
      <span className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        {/* <span className="icon-button">{props.leftIcon}</span> */}
        {props.children}
        {/* <span className="icon-right">{props.rightIcon}</span> */}
      </span>
    );
  }

return (


<div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

                <CSSTransition in={activeMenu === 'main'} timeout={500} classNames="menu-primary" unmountOnExit onEnter={calcHeight}>
                  
                    <div className="menu">
                          
                        <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} goToMenu="settings"> <p className="opa"> Entrance Test Prep </p>  </DropdownItem>

                        <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} goToMenu="webapp"> <p className="opa"> Loksewa Ayog Prep </p> </DropdownItem>
                        <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} goToMenu="webapp"> <Link to="/about" onClick={closeMobileMenu} className="">About </Link> </DropdownItem>

                       

                    </div>
                </CSSTransition>

                 <CSSTransition in={activeMenu === 'settings'} timeout={500} classNames="menu-secondary" unmountOnExit onEnter={calcHeight}>
                    <div className="menu">

                        <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>  <ArrowIcon  style={{color:'#444857',width: '20px', height: '20px'}} src={left} alt="" /> </DropdownItem>
                        
                        <DropdownItem leftIcon="🦘"><Link  className="wide-menu__link" to="/engineering" onClick={closeMobileMenu}>Engineering Entrance Test </Link> </DropdownItem>
                        <DropdownItem leftIcon="🦘"><Link className="wide-menu__link" to="/medical"onClick={closeMobileMenu}>Medical Entrance Test</Link></DropdownItem>
                        <DropdownItem leftIcon="🦘"><Link className="wide-menu__link" to="/engineering"onClick={closeMobileMenu}>TET</Link></DropdownItem>
                        <DropdownItem leftIcon="🦘"><Link className="wide-menu__link" to="/engineering"onClick={closeMobileMenu}>NTA</Link></DropdownItem>

                    </div>
                </CSSTransition>

                 <CSSTransition in={activeMenu === 'webapp'} timeout={500} classNames="menu-secondary" unmountOnExit onEnter={calcHeight}>
                    <div className="menu">
                    
                        <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>  <ArrowIcon  style={{color:'#444857',width: '20px', height: '20px'}} src={left} alt="" /> </DropdownItem>

                        <DropdownItem leftIcon="🦘"><Link  className="wide-menu__link" to="/engineering" onClick={closeMobileMenu}>Engineering Entrance Test </Link> </DropdownItem>
                        <DropdownItem leftIcon="🦘"><Link className="wide-menu__link" to="/medical"onClick={closeMobileMenu}>Medical Entrance Test</Link></DropdownItem>
                        <DropdownItem leftIcon="🦘"><Link className="wide-menu__link" to="/engineering"onClick={closeMobileMenu}>TET</Link></DropdownItem>
                        <DropdownItem leftIcon="🦘"><Link className="wide-menu__link" to="/engineering"onClick={closeMobileMenu}>NTA</Link></DropdownItem>

                    </div>
                </CSSTransition>


        </div>
    
    )
 }
 
 
}
 export default Trigger ;
