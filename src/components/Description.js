export default function Description(props) {
    
    if(props.url==="desc"){
        return (
            <div class="container py-5">
                <div>
                    <h4>Organisers</h4>
                    <ul>
                        <li>Elisabeth Agoritsas (University of Geneva)</li>
                        <li>Misaki Ozawa (University of Grenoble Alpes)</li>
                        <li>Sylvain Patinet (CNRS ESPCI)</li>
                    </ul>
                </div>
                <div>
                    <h4>Program</h4>
                    <p>
                        The program and abstracts can be seen <a href="#">here</a>. (see also a 
                        comprehensive <a href="#">timetable</a>)
                    </p>
                </div>
                <div>
                    <h4>Presentation</h4>
                    <p>
                        Each invited and contributed talk takes 30 minutes, including questions and answers. The poster session will be held at 17:30-19:00 on Wednesday, 24/05.
                    </p>
                </div>
                <div>
                    <h4>Conference dinner</h4>
                    <p>
                        We will have a conference dinner at 19:00-21:30, on Thursday 25/05, at <a href="$">Loxton </a> near the city center.
                    </p>
                </div>
                <div>
                    <h4>Description</h4>
                    <p>
                        Each invited and contributed talk takes 30 minutes, including questions and answers. The poster session will be held at 17:30-19:00 on Wednesday, 24/05.
                    </p>
                </div>
                <div>
                    <h4>References</h4>
                    <a href="#">[1] D. Rodney, A. Tanguy, D. Vandembroucq, Modelling Simul. Mater. Sci. Eng., 19, 083001 (2011)</a>
                    <br></br>
                    <a href="#">[2] A. Nicolas, E. Ferrero, K. Martens, J. Barrat, Rev. Mod. Phys., 90, 045006 (2018)</a>
                </div>
            </div>
        )
    }
    else if(props.url==="part"){
        return(
            <div class="container py-5">
                <h4>Canada</h4>
                <p>Daniel Korchinski ( University of British Columbia ) - Speaker</p>
                <h4>Canada</h4>
                <p>Daniel Korchinski ( University of British Columbia ) - Speaker</p>
                <h4>Canada</h4>
                <p>Daniel Korchinski ( University of British Columbia ) - Speaker</p>
                <h4>Canada</h4>
                <p>Daniel Korchinski ( University of British Columbia ) - Speaker</p>
                <h4>Canada</h4>
                <p>Daniel Korchinski ( University of British Columbia ) - Speaker</p>
            </div>
        )
    }
    else if(props.url==="program"){
        return(
            <div class="container py-5">
                <div>
                    <h4 class="extra-program">All listed times are in Europe/Zurich - GMT+02:00</h4>
                </div>
                <div>
                    <h2>Wednesday May 24th 2023  - Day 1</h2>
                    <p>Morning session</p>
                    <ul>
                        <li>08:50 to 09:00 - Opening remarks</li>
                        <li><a href="#" onclick="openNewsModal(4,13878,'talk');return false">09:00 to 09:30 - GILLES TARJUS - The yielding transition of strained amorphous solids: Nonequilibrium phase transition, finite-size effects and mesoscale modeling</a>
                        </li>
                    </ul>
                    <p>Afternoon session</p>
                    <ul>
                        <li>08:50 to 09:00 - Opening remarks</li>
                        <li><a href="#" onclick="openNewsModal(4,13878,'talk');return false">09:00 to 09:30 - GILLES TARJUS - The yielding transition of strained amorphous solids: Nonequilibrium phase transition, finite-size effects and mesoscale modeling</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Wednesday May 24th 2023  - Day 1</h2>
                    <p>Morning session</p>
                    <ul>
                        <li>08:50 to 09:00 - Opening remarks</li>
                        <li><a href="#" onclick="openNewsModal(4,13878,'talk');return false">09:00 to 09:30 - GILLES TARJUS - The yielding transition of strained amorphous solids: Nonequilibrium phase transition, finite-size effects and mesoscale modeling</a>
                        </li>
                    </ul>
                    <p>Afternoon session</p>
                    <ul>
                        <li>08:50 to 09:00 - Opening remarks</li>
                        <li><a href="#" onclick="openNewsModal(4,13878,'talk');return false">09:00 to 09:30 - GILLES TARJUS - The yielding transition of strained amorphous solids: Nonequilibrium phase transition, finite-size effects and mesoscale modeling</a>
                        </li>
                    </ul>
                </div>
                <p>Workshop End</p>
            </div>
        )
    }
    else if(props.url==="abstract"){
        return(
            <div class="container py-5">
                <h4>Talks</h4>
                <ul>      
                    <li>
                        <a href="#" onclick="openNewsModal(4,13912,'talk');return false">A mapping between the micromechanics of glasses and elasto-plastic models</a>                                 
                        <p>
                            <b>david richard</b>
                            <span></span>
                        </p>                            
                    </li>      
                    <li>                               
                        <a href="#" onclick="openNewsModal(4,13907,'talk');return false">
                            Active mechanics in thin sheet materials
                        </a>                             
                        <p>
                            <b>Daniel Matoz</b> 
                            <span> </span>
                        </p>                           
                    </li>      
                    <li>                               
                        <a href="#" onclick="openNewsModal(4,13921,'talk');return false">
                            An elasto-plastic approach based on microscopic insights for sheared disordered solids
                        </a>                                
                        <p>
                            <b>Kirsten Martens, </b> 
                            <span> 
                                Chen Liu (Columbia university), Suman Dutta (ICTS-TIFR), Pinaki Chaudhuri (Institute of Mathematical Sciences)
                            </span>
                        </p>                            
                    </li>      
                    <li>                               
                        <a href="#" onclick="openNewsModal(4,13893,'talk');return false">
                            Characterizing the irreversibility and yielding transition of a sheared amorphous solid using transition graphs
                        </a>                                 
                        <p>
                            <b>Muhittin Mungan</b> 
                            <span> </span>
                        </p>                           
                    </li>      
                    <li>                               
                        <a href="#" onclick="openNewsModal(4,13858,'talk');return false">
                            Correlations of tensor field components in isotropic systems with applications to stress and strain correlations in equilibrium and driven elastic and viscoelastic bodies
                        </a>                                 
                        <p>
                            <b>Joachim Wittmer</b> 
                            <span> </span>
                        </p>                            
                    </li>                
                </ul>
            </div>
        )
    }
    else if(props.url==="doc"){
        return(
            <div class="container py-5">
                <div>
                    <h4>Booklet</h4>
                    <img src="https://members.cecam.org/images/pdf-file.png" width="24px" alt=""></img>
                    <a href="#">
                        Booklet_Mesoscale-modelling-of-driven-disordered-materials-From-glasses-to-active-matter-1684305484.pdf
                    </a>
                </div>
                <div>
                    <h4>Files</h4>

                    <img src="https://members.cecam.org/images/photo-of-a-landscape.png" width="24px" alt=""></img>
                    <a href="#">Image 1</a>
                    <br></br>

                    <p>Goup Pic 1</p>
                    <img src="https://members.cecam.org/images/photo-of-a-landscape.png" width="24px" alt=""></img>
                    <a href="#">Image 1</a>
                    <br></br>
                    
                    <p>Goup Pic 2</p>
                    <img src="https://members.cecam.org/images/photo-of-a-landscape.png" width="24px" alt=""></img>
                    <a href="#">Image 1</a>
                </div>
            </div>
        )
    }
}
