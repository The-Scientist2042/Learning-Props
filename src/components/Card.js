import React from "react";
import lt from '../pexels-godisable-jacob-1027161.jpg'


export default function Card(){
    return( 
            <section>
                <img src={lt} alt="" id="lt"/>
                <h4 id="hh">
                    5.0 <span>(6)-USA</span>
                </h4>
                <h4>
                    Life Lessons With Black Prodigy
                </h4>
                <h5>
                    <strong>From $136</strong>
                    <span>/ person</span>
                </h5>
            </section>
    )
}