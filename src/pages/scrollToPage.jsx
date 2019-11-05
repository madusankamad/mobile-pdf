import React, { useRef } from 'react';
import styled from 'styled-components';


const ScrollSections = styled.div`
        display: block;
        margin: 0 auto;
        width: 90%;
`;
const SamplePara = () => (
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ci
                      llum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    </p>
);

const ScrollPage = () => {
    const scrollRef = useRef(null);
    const scrollToElement = (e) => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
    return (
        <>
            <h1>Scroll To </h1>
            <button onClick={scrollToElement}>Scroll To Elem</button>

            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <ScrollSections ref={scrollRef}>
                <h1>Will Scroll to here</h1>
            </ScrollSections>
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />
            <SamplePara />


        </>
    );
};


export default ScrollPage;
