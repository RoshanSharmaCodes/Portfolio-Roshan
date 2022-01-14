import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from 'ityped';
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import Github from "@material-ui/icons/GitHub";


function Intro() {
    const profession = useRef();
    useEffect(() => {
        init(
            profession.current,
            {
                showCursor: true,
                strings: ["Full Stack Developer","UI Designer"],
                backDelay: 1000

            }
        )

    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="img-container">
                    <img src="/assets/bgless-dp.png" alt="profile-pic" className="profile-pic" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h3>Hii there!</h3>
                    <h1>It's Roshan Sharma</h1>
                    <h2>I am a  <span ref={profession}></span></h2>
                    <div className="socialicon">
                    <ul>
                            <li><a target="_blank" href="https://twitter.com/_RoshanCodes"><Twitter className="icon" /></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/"><Instagram className="icon" /></a></li>
                            <li><a target="_blank" href="https://github.com/roshan-rks28"><Github className="icon" /></a></li>
                    </ul>
                    </div>
                    <div className="resume-bt">
                        <button className="resume"><a className="resumelink" target="_blank" href="https://drive.google.com/file/d/1Y5PN1AfIS4r810nixb2-uYhJJdieQ2Yh/view?usp=sharing">Resume</a></button>
                    </div>
                    <div className="contact-bt">
                        <button className="resume"><a className="resumelink"href="#contact">Contact</a></button>
                    </div>
                    
                </div>
                <a href="#portfolio">
                    <img src="/assets/down.png" alt="arrow" className="arrow" />
                </a>
            </div>
        </div>
        );

}
export default Intro;