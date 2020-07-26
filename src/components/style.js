import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import particles from 'react-particles-js';
import { NavLink as nl } from 'react-router-dom';

/* font-family: 'Montserrat', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Playfair Display', serif; font-weight: 400 and 500*/

const theme = {
  color: {
    title: '#0D3843',
    subTitle: '#375D70',
    content: '#4F88A3',
    line: '#4CA7BC',
    shadow: '#0D3842',
  },
  font: {
    mont: "'Montserrat', sans-serif",
    title: "'Playfair Display', serif",
    content: "'Open Sans', sans-serif",
  },
};

export const Particles = styled(particles)`
  position: fixed;
  width: 100vw;
  height: 100%;
  z-index: -3;
`;

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Body = styled.div`
  max-height: 100vh;
  max-width: 100vw;
`;

const ImgBorder = styled.img`
  position: fixed;
  user-select: none;
  width: 23%;
  z-index: 2;
  @media (max-width: 900px) {
    visibility: hidden;
  }
`;

export const Tl = styled(ImgBorder)`
  top: 0;
  left: 0;
`;

export const Bl = styled(ImgBorder)`
  bottom: 0;
  right: 0;
`;

export const Nav = styled.nav`
  background-color: white;
  padding-top: 7%;
  user-select: none;
  z-index: 1;
`;

export const NavLink = styled(nl)`
  color: ${(props) => props.theme.color['title']};
  font-family: ${(props) => props.theme.font['mont']};
  border-bottom: 4px solid rgb(76, 167, 188, 100%);
  text-decoration: none;
  &:hover {
    color: rgb(13, 56, 67, 70%);
    text-decoration: none;
  }
  @media (max-width: 720px) {
    font-size: 0.7rem;
  }
`;

export const selected = {
  borderBottom: '4px solid rgb(76, 167, 188, 50%)'
};

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  font-size: 0.5rem;
`;

export const Div = styled.div`
  margin: ${(props) => (props.home ? '' : '0 15%')};
  padding-top: ${(props) => (props.home ? '17%' : '13%')};
  @media (max-width: 720px) {
    padding-top: 20%;
    margin: ${(props) => (props.home ? '' : '0 7%')};
  }
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.color['title']};
  font-family: ${(props) => props.theme.font['mont']};
  font-size: ${(props) => (props.bottom ? '2.3rem' : '2.5rem')};
  font-weight: 800;
  margin-bottom: 0;
  @media (max-width: 720px) {
    font-size: ${(props) => (props.bottom ? '1.6rem' : '1.7rem')};
  }
`;

export const P = styled.p`
  color: ${(props) => props.theme.color['subTitle']};
  font-family: ${(props) => props.theme.font['mont']};
  display: ${(props) => (props.inline ? 'inline' : 'block')};
  font-size: ${(props) => (props.inline ? '.8rem' : '')};
  vertical-align: middle;
  &:hover {
    text-decoration: none;
    opacity: ${(props) => (props.inline ? 0.8 : 1)};
  }
  @media (max-width: 720px) {
    font-size: ${(props) => (props.inline ? '.7rem' : '')};
  }
`;

export const Sub = styled(P)`
  font-weight: 600;
  margin: 0;
`;

export const D = styled(P)`
  margin: 0;
`;

export const Title = styled(Sub)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.color['title']};
  margin: 0;
  @media (max-width: 720px) {
    font-size: 0.8rem;
  }
`;

export const lHome = {
  size: "1.7rem",
  style: { 
    marginLeft: "0"
  }
};

export const I = styled.i`
  color: ${(props) => props.theme.color['title']};
  margin-right: 0.5rem;
  &:hover {
    opacity: 0.8;
  }
`;

export const Img = styled.img`
  height: 15rem;
  padding: 0.7rem;
  border: 5px dashed ${(props) => props.theme.color['line']};
  user-select: none;
  @media (max-width: 720px) {
    height: 12rem;
    border-width: 4px;
  }
`;

export const SkillDiv = styled.div`
  border-radius: 50%;
  min-width: 20%;
  @media (max-width: 720px) {
    max-width: 100%;
  }
  /* https://www.cssmatic.com/box-shadow */
`;

export const H4 = styled.h4`
  color: ${(props) => props.theme.color['title']};
  font-family: ${(props) => props.theme.font['mont']};
  font-weight: 600;
`;

export const lSkill = {
  size: "5rem"
};

export const Logo = styled.i`
  color: ${(props) => props.theme.color['title']};
`;

export const lArrow = {
  size: "2.2rem",
  style: {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    zIndex: "2"
  }
};

export const Arrow = styled.div`
  display: ${(props) => props.scrollUp ? "" : "none"};
`

export const AboutDiv = styled.div`
  padding: 1rem 0;
  @media (max-width: 720px) {
    font-size: 0.6rem;
  }
`;

export const Hr = styled.hr`
  border: none;
  border-top: dotted #041114;
  border-width: 1rem;
  width: 5rem;
  margin: auto;
`;
