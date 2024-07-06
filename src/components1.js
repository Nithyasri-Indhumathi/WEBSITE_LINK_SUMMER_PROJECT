import "./css/components1.css"

import img1 from "./images/front.jpg"
import out from "./images/inp.png"
//import op2 from "./images/news.jpg"
import osm from "./images/osm.jpg";
import well from "./images/wellpath.jpg"
import divi from "./images/div.jpg"
import op2 from "./images/area1.jpg"
import ip from "./images/google.jpg"
import op4 from "./images/website.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'




import Vdo from "./video1";
import Header from "./header1";

function Component(){
    return(
        <div>
            <Header />
            <div className="spabs">
                <h2 style={{fontSize:"40px"}}>Abstract</h2>
                <p style={{fontSize:"20px"}}>Farmers often have irregularly shaped fields that need to be divided into smaller sections for various purposes, such as crop rotation, irrigation management, or livestock grazing.However, manually dividing these irregular polygons into equal or desired-sized sections can be time-consuming and challenging. This project aims to address the challenges faced by farmers in subdividing irregularly shaped fields into smaller sections efficiently and automatically. The proposed solution is an algorithm and software tool that allows farmers to input an irregular polygon representing their field and specify the desired subdivision parameters, such as the number of sections or target area for each section.The resulting subdivided sections are generated as new polygons, and the solution also includes visualizations of the original field polygon and the resulting subdivisions to aid farmers in understanding and validating the division.
                </p>
            </div>
            <div className="spvideo">
                <Vdo />
            </div>
            <div className="spout">
                <h2 style={{fontSize:"30px",marginTop:"60px"}}>Algorithms and Results</h2>
                <div className="sp1">
                    <h3 className="spside" style={{fontSize:"30px"}}>Algorithm for Irregular Farm field division</h3>
                    <p className="spcon" style={{fontSize:"20px"}}>The process begins with the initialization of the QGIS plugin, including the setup of the user interface and locale settings. Following this, a user dialog is displayed to gather essential input from the user, such as selecting an active vector layer, specifying an output file path, defining the target area, indicating absorption preferences, choosing the division direction, and setting a tolerance value.With user input in hand, the algorithm proceeds to execute the main task, known as the PolygonDividerTask. This task involves several critical components, including initialization, active vector layer validation, and preparation of the output writer.The subsequent step revolves around the iteration through the features of the active vector layer.</p>
                    <div className="spoutimg1">
                    <img src={osm}></img>
                    <img src={ip}></img>
                    </div>
                    <p className="spcon1" style={{fontSize:"20px"}}> For each feature, the algorithm applies the polygon division process, making decisions based on the desired target areas and the main division direction (horizontal or vertical). The division process involves intricate calculations to ensure an equitable division of polygons.Subdividing features into smaller sections is a complex task that requires the algorithm to calculate optimal cutline coordinates using Brent's method. Error handling and progress tracking are integral aspects of this subdivision process.Following successful subdivision, the algorithm proceeds to write the divided features into the specified output file.Finally, the algorithm wraps up by displaying the resulting divided polygon layer in QGIS. This streamlined approach to polygon subdivision provides a valuable tool for land management, offering efficient and automated solutions for a range of agricultural and planning applications.</p>
                </div>
                <div className="spou">
                    <img src={well}></img>
                    <img src={divi}></img>
                </div>
                <div className="sp1">
                    <h3 className="spside" style={{fontSize:"30px"}}>Algorithm for Area Calculation</h3>
                    <p className="spcon" style={{fontSize:"20px"}}>The algorithm initializes a hidden Tkinter window for user interaction and opens dialogs for selecting unused field(well,path) and divided farm field shapefiles.It calculates the total area of those two shapefiles separately, taking into account their geometries using GeoPandas.Users provide the farm name and farmer's name for the report.The total area is computed by summing the areas of the both input shapefiles.A report data string is generated, including the farm and farmer details, unused areas for divided polygons, used areas for divided regions, and the overall total area in both acres and square feet.In case of any errors during shapefile processing or if shapefiles are not selected, appropriate messages are displayed.This algorithm offers an intuitive way to generate informative reports for farm or land management, empowering users to assess and document their land division and usage efficiently.
                    </p>
                </div>
                <div className="spoutimg2">
                    <img src={op2} style={{marginLeft: "500px"}}></img>
                </div>
                <div className="sp1">
                    <h3 className="spside" style={{fontSize:"30px"}}>User Friendly Interface</h3>
                    <p className="spcon" style={{fontSize:"20px"}}>We have developed a user friendly website using react js which helps users to navigate into QGIS tool and also helps to extract farmfield from Open Street Map directly from our website itself.It helps to receive messages or queries from farmers through mails.We also update our new launches to farmers for those who are signed in for latest updates in our website.Blogs page has review or testimonials about our project which will help new users to know about uses of our project. There are some more pages like services,about us to know more about our project.
                    </p>
                </div> 
                <div className="spoutimg3">
                    <img src={op4} style={{marginLeft: "400px"}}></img>
                </div>
            </div>   
        <div>
            {/* Your existing component content */}
            
            <h4 style={{fontSize:"30px",textAlign:"center",marginBottom:"0px"}}>Reference Papers</h4>
            <div className="reference-paper-buttons">
                <div className="b1" style={{paddingRight:"20px"}}>
                <a href="https://ieeexplore.ieee.org/document/9790962" className="reference-button">
                    <span className="icon">
                        <i className="fas fa-file-pdf"></i>
                        <FontAwesomeIcon icon={faFilePdf} style={{color: "white",width: "30px",height: "30px" }} />
                    </span>
                    <span>Paper 1</span>
                </a>
                </div>
                <div className="b2" style={{paddingRight:"30px"}}>
                <a href="https://danielritchie.notion.site/Turning-Dirt-into-Data-with-Quantum-GIS-4fd0479642e043739eb4beef39593bc7#44ba07a634a14a43894e4dc8628325c4" className="reference-button">
                    <span className="icon">
                        <i className="fas fa-file-pdf"></i>
                        <FontAwesomeIcon icon={faFilePdf} style={{color: "white",width: "30px",height: "30px" }} />
                    </span>
                    <span>Paper 2</span>
                </a>
                </div>
                <div className="b3" style={{paddingRight:"30px"}}>
                <a href="https://sjar.revistas.csic.es/index.php/sjar/article/view/17774/5921" className="reference-button">
                    <span className="icon">
                        <i className="fas fa-file-pdf"></i>
                        <FontAwesomeIcon icon={faFilePdf} style={{color: "white",width: "30px",height: "30px" }} />
                    </span>
                    <span>Paper 3</span>
                </a>
                </div>
            </div>
        </div>
        <div>
            <h4 style={{fontSize:"30px",textAlign:"center",marginBottom:"0px"}}>Under the Guidance of </h4>
            <p style={{fontSize:"30px",textAlign:"center",marginTop:"0px"}}>  Dr. M. Deivamani, Assistant Professor,</p>
        </div>
        <div className="contri">
            <h4 style={{fontSize:"30px",textAlign:"center",marginBottom:"0px"}}>Team Members</h4>
            <div className="comp" style={{marginTop:"0px",marginBottom:"70px"}}>
                <div className="con1" style={{fontSize:"30px",paddingTop:"5px",paddingRight:"20px"}}>
                    <h9>Muthu Rathnashri C</h9>
                </div>
                <div className="con2" style={{fontSize:"30px",paddingTop:"5px",paddingRight:"20px"}}>
                    <h9>Nithyasri Indhumathi S</h9>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Component