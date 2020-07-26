import React, {useState} from 'react';

import { lArrow, Arrow } from './style.js';
import { IconContext } from 'react-icons';
import { FaArrowAltCircleUp as ArrowUp } from 'react-icons/fa';

function Scroll() {
    const [scroll, setScroll] = useState(false);

    function scrollToTop() {
        if (!scroll && window.pageYOffset > 100) {
            setScroll(true);
        } else if (scroll && window.pageYOffset <= 100) {
            setScroll(false);
        }
    }

    function scrollTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    window.addEventListener('scroll', scrollToTop);

    return (
        <IconContext.Provider value={lArrow}>
          <Arrow scrollUp={scroll} onClick={scrollTop}><ArrowUp /></Arrow>
        </IconContext.Provider>
    );
}

export default Scroll;