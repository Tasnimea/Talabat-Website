import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark ' style={{ position: "relative" }}>
            <div className='container'>
                <div className="row py-3 m-1 justify-content-between" style={{ borderBottom: "0.1rem solid #3b3b3b", lineHeight: "2.2rem" }}>
                    <div className="col-md-1 col-3 text-secondary">Feedback</div>
                    <div className="col-md-1 col-3 text-secondary">Careers</div>
                    <div className="col-md-1 col-3 text-secondary">Terms</div>
                    <div className="col-md-1 col-3 text-secondary">FAQ</div>
                    <div className="col-md-1 col-3 text-secondary">Privacy</div>
                    <div className="col-md-2 col-3 text-secondary">Contact Us</div>
                    <div className="col-md-1 col-3 text-secondary">Sitemap</div>

                </div>

                {/* ========================================= */}
                <div className="accordion d-md-none  d-block bg-dark" id="accordionExample">
                    <div className="accordion-item bg-dark">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Restaurants
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className='text-white'> Taboon</div>
                                <div className='text-white'> Dawer Farah-Mohandiseen</div>
                                <div className='text-white'> Planet Africa</div>
                                <div className='text-white'> Al Aseel El Demashky</div>
                                <div className='text-white'> Lan Yuan-Maadi</div>
                                <div className='text-secondary py-3'> More Restaurants...</div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item bg-dark">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Popular Cuisines
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <div className='text-white'> Italian</div>
                            <div className='text-white'> Mexican</div>
                            <div className='text-white'> Sandwiches</div>
                            <div className='text-white'> Japanese</div>
                            <div className='text-white'> Pizza</div>
                            <div className='text-secondary py-3'> More Cuisines...</div>
                   
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item bg-dark">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Popular Areas
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                        <div className='text-white'> Masaken El Rehab </div>
                        <div className='text-white'> Mostashfa AlHommeyat</div>
                        <div className='text-white'> Salah ElDin Street</div>
                        <div className='text-white'> Salah Nessim Street</div>
                        <div className='text-white'> Shabab El Mosalas</div>
                        <div className='text-secondary py-3'> More Areas...</div>
                            </div>
                        </div>
                    </div>



                </div>
                {/* ============================================ */}


                <div className="row m-1 py-3" style={{ borderBottom: "0.1rem solid #3b3b3b" }}>
                    <div className="col-md-3 d-md-block  d-none">
                        <div className='text-secondary py-3'> Restaurants</div>
                        <div className='text-white'> Taboon</div>
                        <div className='text-white'> Dawer Farah-Mohandiseen</div>
                        <div className='text-white'> Planet Africa</div>
                        <div className='text-white'> Al Aseel El Demashky</div>
                        <div className='text-white'> Lan Yuan-Maadi</div>
                        <div className='text-secondary py-3'> More Restaurants...</div>
                    </div>

                    <div className="col-md-3 d-md-block  d-none">
                        <div className='text-secondary py-3'> Popular Cuisines</div>
                            <div className='text-white'> Italian</div>
                            <div className='text-white'> Mexican</div>
                            <div className='text-white'> Sandwiches</div>
                            <div className='text-white'> Japanese</div>
                            <div className='text-white'> Pizza</div>
                            <div className='text-secondary py-3'> More Cuisines...</div>
                    </div>

                    <div className="col-md-3 d-md-block  d-none">
                        <div className='text-secondary py-3'> Popular Areas</div>
                        <div className='text-white'> Masaken El Rehab </div>
                        <div className='text-white'> Mostashfa AlHommeyat</div>
                        <div className='text-white'> Salah ElDin Street</div>
                        <div className='text-white'> Salah Nessim Street</div>
                        <div className='text-white'> Shabab El Mosalas</div>
                        <div className='text-secondary py-3'> More Areas...</div>
                    </div>


                    <div className="col-md-3 col-12" >
                        <div className='text-secondary py-3'> Follow Us On</div>
                        \                        <i className="fa-brands fa-facebook-f  text-white m-2 " style={{ fontSize: "2rem" }}></i>
                        <i className="fa-brands fa-twitter text-white bg-dark m-2" style={{ fontSize: "2rem" }}></i>
                        <i className="fa-brands fa-youtube bg-dark text-white  m-2" style={{ fontSize: "2rem" }}></i>
                        <i className="fa-brands fa-linkedin-in text-white m-2 " style={{ fontSize: "2rem" }}></i>
                        <i className="fa fa-instagram  text-white mx-2" style={{ fontSize: "2rem" }}></i>
                    </div>
                </div>




                <div className='row justify-content-between mx-2 mt-2'>
                    <div className='col-md-8 col-12 text-secondary my-1'> For any support or help you can contact us via our Live Chat</div>
                    <div className='col-md-4 col-12 text-secondary my-1'> ©2022 Talabat.com</div>

                </div>

                <div className='px-2 text-white' style={{ position: "absolute", bottom: "0", right: "0", backgroundColor: "#ff5a00", width: "10rem" }}>
                    <i className="p-1 fa-solid fa-comment text-white"></i>
                    <span>contact us </span>
                </div>


            </div>



            {/* ----------------- */}
        </div>
    );
}

export default Footer;
