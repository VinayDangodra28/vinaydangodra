import React, { useEffect, useState } from 'react';
import { Banner } from './Banner';
import './Home.css';
import { Skills } from './Skills';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { Education } from './Education';
import { Work } from './Work';
import { Contact } from './Contact';
import MazeGame from '../../components/MazeGame/MazeGame';
import Popup from '../../components/Popup';
// import { Homebackground } from '../../components/homebackground/homebackground';
// import ScrollAnimation from '../../ScrollAnimation/ScrollAnimation';


function Home() {
  const [selectedWork, setSelectedWork] = useState(null); // State for selected work (popup)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timelines = [];
    // const svg = document.querySelector('.svg-path-container svg');
    // const path = svg.querySelector('path');
    // const pathLength = path.getTotalLength();

    // gsap.set(path, { strokeDasharray: pathLength });

    // gsap.fromTo(
    //   path,
    //   {
    //     strokeDashoffset: pathLength,
    //   },
    //   {
    //     strokeDashoffset: 0,
    //     // duration: 3,
    //     ease: 'none',
    //     scrollTrigger: {
    //       trigger: svg,
    //       start: 'top bottom',
    //       end: 'bottom bottom',
    //       scrub: true,
    //       invalidateOnRefresh: true,
    //       // markers: true,
    //     },
    //   }
    // );

    

    const initializeTimelines = () => {


      timelines.push(
        gsap.timeline({
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '5% bottom',
            end: '10% bottom',
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        }).fromTo(
          '.moving-screen',
          {
            transformOrigin: 'left 10%',
            opacity: 0,
            transform: 'rotateY(0deg) translateX(calc(17.5vw - 2.5rem))',

          },
          {
            transformOrigin: 'left 10%',
            transform: 'rotateY(5deg) translateX(0px)',
            duration: 1,
            opacity: 1,
          }
        )
      );



      // Screen Resizing Logic Start
      gsap.to(
        '.homepage',
        {
          padding: "80px 80px 40px 80px",
          // paddingBottom: "40px",
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '0% bottom',
            end: '10% bottom',
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        })

      gsap.to(
        '.center-fixer-wrapper',
        {
          // width: "calc(100% - 160px)",
          padding: "80px 80px 40px 80px",
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '0% bottom',
            end: '10% bottom',
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        })


      gsap.to(
        '.top_fixer',
        {
          height: "80px",
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '0% bottom',
            end: '10% bottom',
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        })


      gsap.to(
        '.bottom_fixer',
        {
          height: "40px",
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '0% bottom',
            end: '10% bottom',
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        })


      // Screen Resizing Logic End

      

      timelines.push(
        gsap.timeline({
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '10% top',
            end: '10% top',
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        }).to('.moving-screen', {
          transformOrigin: 'left top',
          transform: 'rotateY(5deg)',
          duration: 1,
        })
      );

      timelines.push(
        gsap.timeline({
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '10% top',
            end: '20% top',
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        }).to('.moving-screen', {
          transform: 'rotateY(5deg))',
          duration: 1,
        })
      );

      timelines.push(
        gsap.timeline({
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '20% top',
            end: '25% top',
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        }).to('.moving-screen', {
          transform: 'rotateY(0deg) translateX(calc(17.5vw - 2.5rem))',
          duration: 1,
        })
      );

      timelines.push(
        gsap.timeline({
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '25% top',
            end: '60% top',
            scrub: true,
            invalidateOnRefresh: true,
          },
        }).to('.moving-screen', {
          transformOrigin: 'right bottom',
          transform: 'rotateY(-10deg) translateX(calc(30vw - 2.5rem))',
          duration: 1,
        })
      );

      timelines.push(
        gsap.timeline({
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '60% top',
            end: '80% top',
            scrub: true,
            invalidateOnRefresh: true,
          },
        }).to('.moving-screen', {
          transform: 'rotateY(0deg) translateX(calc(17.5vw - 2.5rem))',
          duration: 1,
        })
      );


      timelines.push(
        gsap.timeline({
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '80% top',
            end: '100% top',
            scrub: true,
            invalidateOnRefresh: true,
          },
        }).to('.moving-screen', {
          transform: 'rotateY(0deg) translateX(calc(17.5vw - 2.5rem))',
          duration: 1,
        })
      );




      setTimeout(() => {
        ScrollTrigger.refresh(); // Refresh ScrollTrigger after initialization
      }, 100);
    };


    initializeTimelines();

    return () => {
      // Clean up GSAP timelines and scroll triggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      timelines.forEach(tl => tl.kill());
    };
  }, [location]); // Re-run the effect on route change



  // Refresh scrolltrigger on screen size change
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh(); // Refresh scroll trigger on window resize
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const handlePopupClose = () => {
    setSelectedWork(null);
  };


  return (
    <div className='homepage'>
      {/* <ScrollAnimation /> */}
      <div className="homepage-wrapper">
        {/* <div class="background"></div> */}
        {/* <Homebackground /> */}
        <div className="top_fixer">
          <div className='top_black'></div>
          <div className='bottom_transparent'></div>
          <div className="center-fixer-wrapper">
            <div className="center-fixer">
              <div className='top-center-fixer'>
                <div className='top-left-fixer'></div>
                <div className='top-right-fixer'></div>
              </div>
              <div className='bottom-center-fixer'>
                <div className='bottom-left-fixer'></div>
                <div className='bottom-right-fixer'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom_fixer'></div>
        <Banner />
        <div className='moving-screen-wrapper'>
          {/* SVG Path Animation */}
          {/* <div className="svg-path-container">
            <svg width="1264" height="2987" viewBox="0 0 1264 2987" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1146.5 2C1146.5 2 1282.63 113.689 1144.69 234.594C1006.76 355.5 256.316 159.609 128.312 436.655C0.308058 713.7 624.132 706.054 624.132 826.26C624.132 946.466 624.132 1495.04 624.132 1563.73C624.132 1632.42 375.058 1662.18 189.862 1823.03C4.66531 1983.87 347.279 2933.5 347.279 2933.5" stroke="#008000" stroke-width="3" />
            </svg>





          </div> */}

          <div className='moving-screen'>
            <Skills />
            <Education />
            <Work onCardClick={setSelectedWork} />
            <div className="work-spacer" style={{height: '80vh'}}></div>

            <Contact />
          </div>
        </div>

        <div style={{
          // height: '0vh',
          position: 'relative'
        }}>

          <MazeGame />
          <Popup selectedWork={selectedWork} onClose={handlePopupClose} />
        </div>
      </div>
    </div>
  );
}

export default Home;
