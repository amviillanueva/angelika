import React from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';

const theme = {
    color: {
        title: '#0D3843',
        subTitle: '#375D70',
        content: '#4F88A3',
        line: '#4CA7BC'
    },
    font: {
        mont: "'Montserrat', sans-serif",
        title: "'Playfair Display', serif",
        content: "'Open Sans', sans-serif"
    }
};

export const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Body = styled.div `
    margin: 5% 7%;
`;

export const Li = styled.li `
    border-bottom: ${props => props.active ? "4px solid rgb(76, 167, 188, 50%)" : "4px solid rgb(76, 167, 188, 100%)"};
`;

export const A = styled.a `
    font-family: ${props => props.theme.font['mont']};
    opacity: 1;
    line-height: 0;
    &:hover {
        color: ${props => props.theme.color['title']};
        opacity: .7; 
    }
`;

export const Div = styled.div `
    margin-top: 8%;
`;

export const H1 = styled.h1 `
    color: ${props => props.theme.color['title']};
    font-family: ${props => props.theme.font['mont']};
    font-size: ${props => props.bottom ? '2.3rem' : '2.5rem'};
    font-weight: 800;
    margin-bottom: 0;
`;

export const P = styled.p `
    color: ${props => props.theme.color['content']};
    font-family: ${props => props.theme.font['mont']};
    display: ${props => props.inline ? 'inline' : 'block'};
    font-size: ${props => props.inline ? '.8rem' : ''};
    vertical-align: middle;
    &:hover {
        text-decoration: none;
        opacity: ${props => props.inline ? .8 : 1};
    }
`;

export const Sub = styled(P) `
    color: ${props => props.theme.color['subTitle']};
    font-weight: 600;
`;

export const I = styled.i `
    color: ${props => props.theme.color['title']};
    font-size: 1.7rem;
    margin-right: .5rem;
    vertical-align: middle;
    &:hover {
        opacity: .8;
    }
`;

const line = keyframes`
  from {
    border-style: dashed;
  }

  to {
    border-style: dotted;
  }
`;

export const Img = styled.img `
    height: 15rem;
    padding: .7rem;
    border: 5px ${props => props.theme.color['line']}; 
    animation: ${line} 2s linear infinite;
`;