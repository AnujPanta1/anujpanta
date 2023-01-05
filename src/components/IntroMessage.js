import { useEffect } from "react";
import "./IntroMessage.css";
import anime from "animejs";

const IntroMessage = () => {
    useEffect(() => {
        messageAnimation();
    }, []);

    const messageAnimation = () => {
        let textWrapper = document.querySelector(".top-message .top-letters");
        textWrapper.innerHTML = textWrapper.textContent.replace(
            "([^\x00-\x80]|w)/g",
            "<span class='top-letters'>$&</span>"
        );

        anime
            .timeline()
            .add({
                targets: ".top-message .line",
                scaleY: [0, 1],
                opacity: [0.3, 1],
                easing: "easeOutExpo",
                duration: 800,
            })
            .add({
                targets: ".top-message .line",
                translateX: [
                    0,
                    document
                        .querySelector(".top-message .top-letters")
                        .getBoundingClientRect().width + 10,
                ],
                easing: "easeInOutSine",
                duration: 800,
            })
            .add(
                {
                    targets: ".top-message .top-letters",
                    opacity: [0, 1],
                    easing: "easeInOutSine",
                    duration: 800,
                    delay: (el, i) => 800 * i,
                },
                "-=300"
            )
            .add({
                targets: ".top-message .line",
                opacity: [1, 0],
                scaleY: [1, 0],
                easing: "easeOutExpo",
                duration: 500,
            });

        anime
            .timeline()
            .add(
                {
                    targets: ".body-message",
                    scale: [0, 1],
                    opacity: [0, 0.5],
                    easing: "easeOutCirc",
                    duration: 800,
                },
                "+=2000"
            )
            .add({
                targets: ".body-message",
                opacity: [0.5, 1],
                easing: "easeOutCirc",
                duration: 700,
            });
    };

    return (
        <div className="intro-message">
            <p className="top-message">
                <span className="text-wrapper">
                    <span className="line"></span>
                    <span className="top-letters">
                        hi im <span className="name">anuj panta</span>
                    </span>
                </span>
            </p>
            <div className="body-message" style={{}}>
                <p>
                    I'm a student at <span className="blue">UC Berkeley </span>i
                    love
                </p>
                <p>
                    working on exciting <span className="red">projects. </span>
                    and
                </p>
                <p>
                    learning new
                    <span className="yellow">
                        <span className="text-warpper">
                            <span className="letters"> skills. </span>
                        </span>
                    </span>
                    Take a look
                </p>
                <p>
                    around—feel free to
                    <span className="green">
                        <span className="text-wrapper">
                            <span className="letters"> contact me.</span>
                        </span>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default IntroMessage;
