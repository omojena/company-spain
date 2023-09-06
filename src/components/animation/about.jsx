import React, {useRef, useEffect} from 'react';
import Lottie from 'lottie-web';
import animationData from '../../assets/lottie/lottie2.json';

export const AboutAnimation = ()=> {
  const animationRef = useRef();
useEffect ( () => {
    Lottie.loadAnimation({
        container: animationRef?.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData
    });
},[]);

        return (<div id={'about-svg'} ref={animationRef}/>);

}