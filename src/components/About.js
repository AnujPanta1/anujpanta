import "./About.css";

const About = () => {
    return (
        <div className="about">
            <p className="title">About me</p>
            <p>
                Hey there! I'm Anuj, a{" "}
                <span className="light">
                    computer science and philosophy student
                </span>{" "}
                at UC Berkeley. I have a passion for using technology to create
                and <span className="light">solve problems,</span> and I have
                gained valuable experience through internships and personal
                projects. I'm always looking for new ways to
                <span className="light"> push myself and improve</span> my
                skills. Thanks for stopping by my website.
            </p>
        </div>
    );
};

export default About;
