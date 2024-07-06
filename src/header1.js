import "./css/header1.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

function Header(){
    return(
        <div>
            <div className="spheader">
                <div className="spbody">
                    <div className="sptopic">
                        <br></br>
                        <br></br>
                        <br></br>
                        <h7 style={{fontSize:"40px"}}>SUMMER PROJECT 2023</h7><br></br>
                        <br></br>
                        <h8 style={{fontSize:"30px"}}>Irregular Polygon Subdivider for Farmer use case</h8>
                        <br></br>
                    </div>
                    <div className="splinks">
                        <div className="l1" style={{paddingRight:"30px",paddingLeft:"30px"}}>
                            
                            <a href="https://github.com/MuthuRathnashri/Summer-Project" target="_blank">
                                <FontAwesomeIcon icon={faGithub} style={{color: "black", width: '70px', height: '70px'}} />
                            </a>
                        </div>
                        <div className="l2" style={{paddingRight:"40px",paddingLeft:"40px"}}>
                            <a href="https://docs.google.com/document/d/1mXBGYXv39m-0zuLv9JiYjQAzLAVUf4b9/edit?usp=sharing&ouid=103788704522550780973&rtpof=true&sd=true " target="_blank">
                                <FontAwesomeIcon icon={faFile} size="2xl" style={{color: "black", width: '70px', height: '70px'}}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}  

export default Header