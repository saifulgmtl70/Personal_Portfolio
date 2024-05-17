import { TypeAnimation } from 'react-type-animation';

const TypingEffect = () => {
    return (
        <TypeAnimation
            sequence={[
        // Same substring at the start will only be typed out once, initially
            "I'm a Web Designer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "I'm a Web Developer",
            1000,
            "I'm a Web Front-end Developer",
            1000,
            "I'm a Tutor",
            1000
        ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em',color: '#fff', display: 'inline-block' }}
            repeat={Infinity}
        />
    );
};

export default TypingEffect;