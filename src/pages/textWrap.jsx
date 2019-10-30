import React from 'react';
import styled from 'styled-components';
import {
  isSafari,
} from 'react-device-detect';


const TextContainer = styled.div`
        display: block;
        margin: 0 auto;
        width: 90%;
`;

const TextTrim = styled.div`
    
    overflow: hidden;
    display: inline-block;
       line-height: 20px;
        width: 90%;
        max-height: 44px;
        margin: 20px  0 0 0;
      
        a{
            
            line-height: 20px;
            font-size: 12px;
            
            word-wrap: break-word;
            word-break: break-word;
           
             
        }
        &.clampTxt{
            a{
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            color: green;
            text-decoration: underline;
            text-decoration-style: dotted;
            }
            
        }
        &.borderTxt{
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            a{
                text-decoration: none;
                border-bottom: 1px dotted #000; 
                color: #000;
            }
            
        }
`;
const ClampText = ({ children }) => (<TextTrim className={isSafari ? 'clampTxt' : 'borderTxt'}>{children}</TextTrim>);

const TextWrap = () => (
  <>
      <h1>Text Wrapping </h1>
      <h2>T Samples Goes Here</h2>
      <TextContainer>
          <p>Some elypsic text</p>
          <ClampText>
              <a href="#">o far, you should have a working JavaScript with Webpack application. In this tutorial, we will take this one step further by introducing ESLint for an enforced unified code style without code smells. Code style becomes an important topic for developers. If you just code for yourself, it might be alright to violate best practices. However, in a team of developers you have to have a common code style as foundation. You should follow the same rules to make your code look alike. It helps others developers to read your code, but also to avoid code smells.</a>
            </ClampText>
          <ClampText>
              <a href="#">
                    oAAAAA far, you should have a working JavaScript with Webpack application.
                                      In this tutorial, we will take this one step further by introducing ESLint for an enforced unified code style wit
                                      hout code smells. Code style becomes an important topic for developers. If you just code for yourself, it might be alright to viol
                                      ate best practices. However, in a team of developers you have to have a common code style as foundation. You should follow the same rules to make
                                      your code look alike. It helps others developers to read your code, but also to avoid code smells.
                </a>
            </ClampText>
        </TextContainer>
  </>
);


export default TextWrap;
