import { useEffect } from "react";
import "./IntroMessage.css";
import anime from "animejs";

const IntroMessage = () => {
    useEffect(() => {
        messageAnimation();
        blueAnimation();
        redAnimation();
        yellowAnimation();
        greenAnimation();
    }, []);

    const greenAnimation = () => {
        const textWrapper = document.querySelector(".green .letters");
        textWrapper.innerHTML = textWrapper.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
        );

        anime
            .timeline({ loop: true })
            .add({
                targets: ".green .letter",
                rotateY: [-90, 0],
                duration: 1000,
                delay: (el, i) => 45 * i,
            })
            .add({
                targets: ".green",
                opacity: 0,
                duration: 700,
                easing: "easeOutExpo",
                delay: 800,
            });
    };

    const yellowAnimation = () => {
        const textWrapper = document.querySelector(".yellow .letters");
        textWrapper.innerHTML = textWrapper.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
        );

        anime.timeline({ loop: true }).add({
            targets: ".yellow .letter",
            translateY: [anime.random(-40, -10), 0, anime.random(10, 40), 0],
            duration: 1250,
            easing: "easeOutSine",
            delay: (el, i) => i * 200 + anime.random(-200, 200),
            direction: "alternate",
            loopBegin: () => {
                // Reset the position of the letters at the beginning of each loop
                let letters = document.querySelectorAll(".yellow .letter");
                letters.forEach((letter) => {
                    letter.style.transform = "translateY(0)";
                });
            },
            complete: function (anim) {
                // Start the next loop of the animation for each letter as soon as it's done
                anim.play();
            },
        });
    };

    const redAnimation = () => {
        let textWrapper = document.querySelector(".red");
        textWrapper.innerHTML = textWrapper.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
        );

        const speed = 1600;

        const stagger = `-=${speed}`;

        anime
            .timeline({ loop: true })
            .add({
                targets: ".red .letter",
                opacity: [0, 1],
                easing: "easeOutBack",
                duration: speed,
            })
            .add(
                {
                    targets: ".red .letter",
                    scale: [0.05, 1.15],
                    easing: "easeOutBack",
                    duration: speed,
                },
                stagger
            );
    };

    const blueAnimation = () => {
        let textWrapper = document.querySelector(".blue");
        textWrapper.innerHTML = textWrapper.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
        );

        const speed = 500;

        anime.timeline({ loop: true }).add({
            targets: ".blue .letter",
            translateY: [
                { value: "-3rem", duration: speed, easing: "easeOutSine" },
                { value: "0", duration: speed, easing: "easeOutSine" },
            ],
            delay: (el, i) => i * 150,
        });
    };

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
                    <span className="top-letters">hi im anuj panta</span>
                </span>
            </p>
            <div className="body-message" style={{}}>
                <p>
                    I'm a student at <span className="blue">UC Berkeley. </span>
                    i love
                </p>
                <p>
                    working on exciting <span className="red">projects </span>
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
                        <span class="text-wrapper">
                            <span class="letters"> contact me.</span>
                        </span>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default IntroMessage;
