import React from "react";

export default function Landing(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-md-offset-5 col-sm-10 col-xs-10 col-sm-offset-2 col-xs-offset-2 mx-auto">
                    <img type="image/png" src={process.env.PUBLIC_URL + "/images/background.png"} alt=""/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4 col-md-offset-5 col-sm-10 col-xs-10 col-sm-offset-5 col-xs-offset-2 mx-auto">

                    <h3>අයි. කේ. නවිනි සඳුනිකා බුද්ධදාස</h3>
                </div>
            </div>
            <div className="row">
                <div className="spinner-border text-primary mx-auto" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-md-offset-2 col-sm-12 col-xs-12 mx-auto text-center">
                    <h2>වංසකථා ඇසුරින් හෙළිවන සමාජය සමඟ සම්බන්ධ වූ ශාක වර්ග පිළිබඳ විමර්ශනයක්</h2>
                    <h3>(අනුරාධපුර යුගය ඇසුරින්)</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-12 col-xs-12 mx-auto text-center">
                    <p>
                        ලංකාවේ ප්‍රාථමික මූලාශ්‍රය ගණයට අන්තර්ගතවන වංසකථා ඇසුරු කරගනිමින් අනුරාධපුර යුගයේ භාවිත වූ ශාක
                        වර්ගවල ඓතිහාසික වටිනාකම හඳුනාගනිමින් උද්හිද විද්‍යාත්මකව වැදගත් වන ඇතැම් තොරතුරු ද මෙහි අන්තර්ගත
                        වේ. අනුරාධපුර යුගයේ භාවිත වූ ශාක වර්ගවල ඓතිහාසික වටිනාකම හඳුනාගනිමින් උද්හිද විද්‍යාත්මකව වැදගත්
                        වන තොරතුරු ද එක් කර ගනිමින් රචනා කරන ලද මෙම ග්‍රන්ථය කාලීන වශයෙන් ඉතා වැදගත් ය.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-12 col-xs-12 mx-auto text-center">
                    <div className="alert alert-success" role="alert">
                        <a href="http://www.godage.com/book-details/history-civilization/8919-wansakatha-asurin-heliwana-samaajaya-samaga-sambandha-wu-shaka-warga-pilibanda-wimarshanayak-anurad.html">පොත
                            මිලදීගැනීමට
                        </a>
                        <div
                            className="col-md-3 col-md-offset-5 col-sm-10 col-xs-10 col-sm-offset-2 col-xs-offset-2 mx-auto">
                            <img src={process.env.PUBLIC_URL + "/images/book-cover.jpg"} alt=""/>
                        </div>
                        <p><a href="http://opac.rjt.ac.lk/cgi-bin/koha/opac-detail.pl?biblionumber=51277">In Libraries :
                            Main Library, Rajarata University of Sri Lanka</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}