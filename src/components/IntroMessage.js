import { useEffect } from "react";
import "./IntroMessage.css";
import anime from "animejs";

const IntroMessage = () => {
    useEffect(() => {
        const textWrapper = document.querySelector(".top-message .top-letters");
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
                duration: 800,
            });
    }, []);

    return (
        <div className="intro-message">
            <p className="top-message">
                <span className="text-wrapper">
                    <span className="line"></span>
                    <span className="top-letters">hi im anuj panta</span>
                </span>
            </p>
            <p className="body-message" style={{ opacity: "0" }}>
                im a student at <span className="blue">uc berkeley.</span> i
                love
                <br />
                working on exciting <span className="red">projects</span> and
                <br />
                learning new <span className="yellow">skills</span>. take a look
                <br />
                around—feel free to <span className="green">contact me.</span>
            </p>
        </div>
    );
};

export default IntroMessage;

/*
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

*/
