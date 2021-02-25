import React from "react";
import "./Project.scss"
import {NavLink} from "react-router-dom";

export const Project = (props) => {
    console.log(props.data)
    const {linkTitle, images, title, type, id} = props.data;
    return (
        <div className="portfolio__card">
            <div className="portfolio__project-img">
                <img src={images.small} alt={title}/>
                {/*<a href="#" className="portfolio__project-btn">View</a>*/}
                <NavLink to={`/projectPage/${id}`} className="portfolio__project-btn">View</NavLink>
            </div>
            <div className="portfolio__project-desk">
                <div className="portfolio__project-title-wrapper">
{/*                    <a href="#"
                       className="portfolio__project-title portfolio__project-title--small">{linkTitle}</a>*/}
                    <NavLink to={`/projectPage/${id}`} className="portfolio__project-title portfolio__project-title--small">{linkTitle}</NavLink>
                    <div
                        className="portfolio__project-description portfolio__project-description--small">{type}
                    </div>
                </div>
            </div>
        </div>
    );
};