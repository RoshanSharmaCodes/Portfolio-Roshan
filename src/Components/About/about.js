import "./about.scss";

function About() {
    return (
        <div className="about" id="about">
            <div className="left">
                <img src="/assets/bgabout.png" className="pcimg" alt="pic" />
            </div>

            <div className="right">
                <div className="wrapper">
                    <h1>About Me</h1>
                    <hr/>
                <p>
                Thank you for providing me with the opportunity to introduce myself.

                My name is Ramachandra Rao, I'm from the Srikakulam district, I have completed my MBA in HRM from Andhra university in 2015.

                I completed my graduation in computer science from Osmania university in 2013,

                Coming to my professional career.

                I have applied for this job because I believe the skills, qualities and experience I have, are a strong match for the job description.

                Over the years, I have built up lots of skills and qualities that I believe will be of benefit to your organization. I'm a very strong worker and I understand that in order to achieve difficult projects and tasks, you must work with other people, and you must bring in their skills and their experiences.

                    I am also very good at working under pressure and I actually prefer to be in situations where the pressure is on because I believe this is where I am at my best. I am also very good at building up relationships with clients and customers, and I feel this will benefit your organization from a commercial perspective.
                    </p>
                    </div>
            </div>

        </div>
        
    );
}

export default About;