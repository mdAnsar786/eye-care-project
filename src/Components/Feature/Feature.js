import React from 'react';
import "./Feature.css";

const Feature = () => {
    return (
        <div>
            <section className="about-wrap-layout1 back-image" >
                <div className="container">
                    <div className="row">
                        <div className="about-box-layout1 order-xl-2 col-xl-12 col-sm-6 col-12">
                            <article>
                                <div className="item-content text-justify">
                                    <header>
                                        <h2 className="item-title">Welcome To Akriti Simplifing Eye Care </h2>
                                    </header>
                                    <div className="sub-title"> We understand that modern healthcare is expensive and difficult to afford by majority of the population. </div>
                                    <p>We provide an unparalleled range of premium eye care of the highest quality at the most affordable price. All our services are genuinely priced and among the lowest in their categories. We hope our sincere efforts will meet the expectations of our valued patients in getting world-class eye treatment at a very affordable price.</p>
                                    <details>
                                        <button className="btn btn-lg btn-outline-info">For More Details</button><br />
                                        <p>Akriti Eye care serves its patients with a comprehensive Advanced Eye Care treatment suite such as <strong>Cataract</strong>, <strong>Vitreo-Retina</strong>, <strong>Glaucoma</strong>, <strong>Oculoplasty</strong>, <strong>Cornea</strong> and <strong>Contact Lens</strong>, <strong>Comprehensive Eye Checkup</strong>, <strong>Medical Retina</strong>, <strong>Diabetic Eye Care</strong>, <strong>Paediatric Ophthalmology</strong>, <strong>Neurophthalmology</strong>, <strong>Uveitis</strong>, <strong>Low Visual Aid</strong>, <strong>Optometry</strong>. Each department is backed up by professional expertise. To provide the highest quality of eye care is our only goal. In our continuous effort to provide compassionate and highest quality eye care, it is our privilege to invite you to partner with us in this journey and feel the difference.</p>
                                    </details>
                                </div>
                            </article>
                        </div>
                        <div className="about-box-layout2 order-xl-3 col-xl-3 col-sm-6 col-12">
                            <ul>
                                <li><a href="/doctors"><i className="fa fa-user"></i> Doctors</a> </li>
                                <li><a href="/contact"><i className="fa fa-phone"></i> Enquiry</a></li>
                            </ul>

                        </div>

                    </div>

                </div>
        </section>
        </div>
    );
};

export default Feature;