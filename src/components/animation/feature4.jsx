import React, {useRef, useEffect} from 'react';
import Lottie from 'lottie-web';
import animationData from '../../assets/lottie/p4.json';

export const Feature4Animation = ()=> {
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

        return (<div id={'feature-svg'} ref={animationRef}/>);

}