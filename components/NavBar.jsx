import { useCallback, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux";

export default function NavBar(props){
    const ref = useRef(null);

    const user = useSelector(state => state.UserReducer);

    const menuRef = useRef(null);
    const [visibility, setVisibility] = useState(null)
    const [fixNavBar, setFixNavBar] = useState(false);

    const handler = useCallback((e) =>{
      // let visibility = 1 - (window.pageYOffset/(ref.current.offsetTop + ref.current.offsetHeight))
      let visibility = (1- (window.pageYOffset/ref.current.offsetTop));

      let navbarHeight =visibility > 0.30 || visibility == NaN ? visibility*15 : 5;
      let fontSize = visibility > 0.50 && visibility < 0.50 ? visibility*1.875 : 1;
      const {offsetTop} = ref.current;
      // console.log(`offsetheight: ${offsetHeight}`);
      // console.log( (1- (window.pageYOffset/ref.current.offsetTop)) * offsetHeight);
      ref.current.style.height = navbarHeight+'rem';
      menuRef.current.style.fontSize = fontSize+'rem';

      if(visibility < 0.10)
        setFixNavBar(true);
      else
        setFixNavBar(false);

      if(pageYOffset <= 0){
        ref.current.style.height = 15+'rem';
        menuRef.current.style.fontSize = 1.875+'rem';
      }

      setVisibility(visibility);
    },[])

    useEffect(()=>{
      if(props.page == 'home')
        window.addEventListener('scroll', handler);
    },[])

    return(
        <>
          {/* <div style={{borderRadius: visibility < 0.3 || props.page != 'home' ? '0' : '0 0 100% 100%'}} ref={ref} className={`md:flex xs:hidden hero w-full p-4 ${props.page != 'home' ? 'h-20' :'h-96'} bg-nav justify-${visibility < 0.3 ? "between" : "center"} items-center ${fixNavBar && !props.loginModalOpen ? 'fixed top-0' : ''} z-40 shadow-md`}>
            {visibility < 0.3 && 
              <a href="/" className="lg:w-1/4 flex items-center text-xl text-white md:w-2/12 space-x-2">
                <img className="w-12" src="/images/logo.png" />
                <h4 className="lg:flex md:hidden">Stock &nbsp;<span className="font-bold">Knowledge</span></h4>
              </a>
            }
              <div className={`lg:w-3/4 md:w-full flex items-center text-white text-3xl font-bold`}>
                <ul ref={menuRef} className="flex justify-around w-full lg:text-base md:text-xs">
                  <li>
                    <a href="/#home">Home</a>
                  </li>
                  <li>
                      <a href="/#solution">Solutions</a>
                  </li>
                  <li>
                      <a href="/#story">Story</a>
                  </li>
                  <li>
                    <a href="/#team">Team</a>
                  </li>
                  <li>
                    <a href="/#testimonial">Testimonials</a>
                  </li>
                  <li>
                    <a href="/#sponsor">Partners</a>
                  </li>
                  <li>
                    <a href="/#article">Articles</a>
                  </li>
                  <li>
                    <a href="/#contactus">Contact Us</a>
                  </li>
                </ul>
                <button onClick={e => {props.showModal(true)}} className="bg-green-500 rounded-full font-bold text-base text-white py-2 px-4">{user.isLogin ? 'LMS' : 'Login' }</button>
              </div>
            </div> */}
                  <div
        className={`md:flex xs:hidden lg:w-full reno:w-full md:w-full sm:w-screen xs:w-screen p-4 h-20 justify-between items-center`}
      >
        <a
          href="/"
          className="lg:w-1/4 flex items-center text-xl text-heading md:w-2/12 space-x-2"
        >
          <img className="w-12" src="/images/logo.png" />
          <h4 className="lg:flex md:hidden">
            Stock &nbsp;<span className="font-bold text-skBlue">Knowledge</span>
          </h4>
        </a>
        <div
          className={`lg:w-3/4 md:w-full flex items-center text-subheading text-3xl font-bold`}
        >
          <ul className="flex justify-around w-full lg:text-base md:text-xs">
          <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#solution">Solutions</a>
            </li>
            <li>
              <a href="/#story">Story</a>
            </li>
            <li>
              <a href="/#team">Team</a>
            </li>
            <li>
              <a href="/#testimonial">Testimonials</a>
            </li>
            <li>
              <a href="/#partners">Partners</a>
            </li>
            <li>
              <a href="/#articles">Articles</a>
            </li>
            <li>
              <a href="/#contactus">Contact Us</a>
            </li>
          </ul>
          <button
            onClick={(e) => {
              props.showModal(true);
            }}
            className="bg-green-500 rounded-full font-bold text-base text-white py-2 px-4"
          >
            {user.isLogin ? "LMS" : "Login"}
          </button>
        </div>
        {/* {visibility < 0.3 && 
                <button className="bg-yellow-400 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-yellow-200">Register</button>
              }           */}
      </div>
            {props.path && <div className="xs:hidden md:flex border md:w-full bg-gray-100 h-10 px-10  align-center">
              <p className="self-center text-sm">
                <span className="align-middle text-blue-400">Articles</span><span className="align-middle text-gray-500"> / {props.path}</span>
              </p>
            </div>}
        </>
    )
}