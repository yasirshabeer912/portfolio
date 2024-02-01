import React, { useState, useEffect }  from 'react';
import ShareAppComponent from '../ShareApp';


const FooterComponent = ()=>{
    let  [showApp, setShowApp] = useState(false);
    const  checkPWA = ()=>{
        return navigator && navigator.share ? setShowApp(true) : setShowApp(false);
    }
    useEffect(()=>{
        checkPWA()
    })
    return (
        <>
            <div className="horizontal-footer shadow-footer">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-12 text-center">
                            <ul className="social-icons list-inline mt-5">
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/profile.php?id=100065443672376" target="_blank" rel="noopener noreferrer">
                                        <span className="fs-0">Follow us on Facebook</span>
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a  href="https://www.linkedin.com/in/igyasir00/" target="_blank" rel="noopener noreferrer">
                                        <span className="fs-0">Follow us on linkedin</span>
                                        
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                               
                                <li className="list-inline-item">
                                    <a href="https://stackoverflow.com/users/23075696/muhammad-yasir" target="_blank" rel="noopener noreferrer">
                                        <span className="fs-0">Follow us on stackoverflow</span>
                                        <i className="fa-brands fa-stack-overflow"></i>
                                    </a>
                                </li>
                                
                                <li className="list-inline-item">
                                    <a  href="https://github.com/yasirshabeer912" target="_blank" rel="noopener noreferrer">
                                        <span className="fs-0">Follow us on github</span>
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </li>
                                
                                
                                
                            </ul>
                            <p className="copyright-text mt-3 ">2024 ©. Muhammad Yasir</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                showApp ? <ShareAppComponent /> : ''
            }
            
        </>
    )
}

export default FooterComponent;