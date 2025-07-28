import React, { useEffect, useState } from 'react';
import { Banner } from './Banner';
import './Home.css';
import './HomeMobile.css';
import './WorkMobile.css';
import './SkillsMobile.css';
import { Skills } from './Skills';
import { SkillsMobile } from './SkillsMobile';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { Education } from './Education';
import { Work } from './Work';
import { WorkMobile } from './WorkMobile';
import { Contact } from './Contact';
import MazeGame from '../../components/MazeGame/MazeGame';
import Popup from '../../components/Popup';

// Mobile check
const isMobile = window.innerWidth <= 768;

function Home() {
  const [selectedWork, setSelectedWork] = useState(null); // State for selected work (popup)

  useEffect(() => {
    if (isMobile) return;

    gsap.registerPlugin(ScrollTrigger);

    const timelines = [];

    const initializeTimelines = () => {
      timelines.push(
        gsap.timeline({
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '5% bottom',
            end: '10% bottom',
            scrub: true,
            invalidateOnRefresh: true,
          },
        }).fromTo(
          '.moving-screen',
          {
            transformOrigin: 'left 10%',
            opacity: 0,
            transform: 'rotateY(0deg) translateX(calc(17.5vw - 2.5rem))',
            filter: 'blur(10px)',
            boxShadow: '0 40px 80px 0 rgba(0,0,0,0.15)',
            scale: 0.98,
          },
          {
            transformOrigin: 'left 10%',
            transform: 'rotateY(5deg) translateX(0px)',
            filter: 'blur(0px)',
            scale: 1,
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)',
            duration: 1,
            opacity: 1,
          }
        )
      );

      // Screen padding resizing
      gsap.to('.homepage', {
        padding: "80px 80px 40px 80px",
        scrollTrigger: {
          trigger: '.moving-screen-wrapper',
          start: '0% bottom',
          end: '10% bottom',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to('.center-fixer-wrapper', {
        padding: "80px 80px 40px 80px",
        scrollTrigger: {
          trigger: '.moving-screen-wrapper',
          start: '0% bottom',
          end: '10% bottom',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to('.top_fixer', {
        height: "80px",
        scrollTrigger: {
          trigger: '.moving-screen-wrapper',
          start: '0% bottom',
          end: '10% bottom',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to('.bottom_fixer', {
        height: "40px",
        scrollTrigger: {
          trigger: '.moving-screen-wrapper',
          start: '0% bottom',
          end: '10% bottom',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      // Moving screen animations
      timelines.push(
        gsap.timeline({
          scrollTrigger: {
            trigger: '.moving-screen-wrapper',
            start: '10% top',
            end: '10% top',
            scrub: true,
            invalidateOnRefresh: true,
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
          },
        }).to('.moving-screen', {
          transform: 'rotateY(5deg)',
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
        ScrollTrigger.refresh();
      }, 100);
    };

    initializeTimelines();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      timelines.forEach(tl => tl.kill());
    };
  }, []);

  // Refresh scrolltrigger on screen size change
  useEffect(() => {
    if (isMobile) return;

    const handleResize = () => {
      ScrollTrigger.refresh();
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
    <div className={`homepage ${isMobile ? 'no-gsap' : ''}`}>
      <div className="homepage-wrapper">
        <div className="top_fixer">
          <div className="center-fixer-wrapper">
            <div className="center-fixer">
              
            </div>
          </div>
        </div>
        <div className='bottom_fixer'></div>
        <Banner />
        <div className='moving-screen-wrapper'>
          <div className='moving-screen'>
            {isMobile ? <SkillsMobile /> : <Skills />}
            <Education />
            {isMobile ? <WorkMobile /> : <Work onCardClick={setSelectedWork} />}
            {isMobile ? null : <div className="work-spacer" style={{ height: '80vh' }}></div>}

            <Contact />
          </div>
        </div>
        <div style={{ position: 'relative' , zIndex: 3 }}>
          <MazeGame />
          <Popup selectedWork={selectedWork} onClose={handlePopupClose} />
        </div>
      </div>
    </div>
  );
}

export default Home;
