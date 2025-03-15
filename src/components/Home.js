import React from 'react';

import ProfilePictureIcon from '../assets/images/test.svg';

export default function Home() {
    return (
        <div className="home-page-container">
            <div className="home-container__inner home-container__animated">
                <figure>
                    <img className="home-profile-pic" alt="Profile" src={ProfilePictureIcon} />
                </figure>
                <article>
                    <h1 className="home-title">
                        Anuj Kumar
                    </h1>
                    <p className="home-description">
                        Backend Developer | NodeJs + Go | DevOps
                    </p>
                </article>
            </div>
        </div>
    );
}
