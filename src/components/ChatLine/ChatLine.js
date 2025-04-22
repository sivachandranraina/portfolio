import React, { useEffect, useState } from "react";
import "./ChatLine.scss";
import { chatData } from "./utils";
import QuoteBox from "./QuoteBox/QuoteBox";

const RevealingDivs = ({ divisions }) => {
    const [revealedDivs, setRevealedDivs] = useState([]);
    const divRefs = divisions.map(() => React.createRef())

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setRevealedDivs((prev) => [...prev, entry.target.id]);
                }
            });
        };

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5 // Change this threshold according to your preference
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        divRefs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => observer.disconnect();
    }, [divRefs]);

    return (
        <div className="container">
            <div className="intro">
                <h1>Lets get chatified<span className="blinker">_</span></h1>
                <br />
                <div className="text-muted">A proper <strong>OpenAI</strong> fan boy</div>
            </div>
            <div className="text-input" onClick={() => {
                window.scroll({
                    top: window.scrollY + 750,
                    behavior: "smooth",
                });
            }} >Ask anything about Sivachandran</div>
            {divisions.map(({ type, data }, index) => (
                <div
                    key={index}
                    id={`div-${index}`}
                    ref={divRefs[index]}
                    className={`revealing-div ${revealedDivs.includes(`div-${index}`) && "revealed"
                        }`}
                >
                    <QuoteBox type={type} data={data} />
                </div>
            ))}
        </div>
    );
};

const ChatLine = () => {
    return <div className="chatline">
        <div className="text-uppercase position-sticky">
            <h2 className="title">Chatline</h2>
        </div>
        <RevealingDivs divisions={chatData}></RevealingDivs>
    </div>
}

export default ChatLine;
