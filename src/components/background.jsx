/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import  { useCallback } from 'react';
import {loadFull} from 'tsparticles';
import Particles from 'react-tsparticles';
export default function background() {
    
    const particlesInit = useCallback(async engine =>{
        await loadFull(engine);
    }, [])

    const particlesloaded = useCallback(async engine => {
        console.log(engine)
    })
  return (
    <div>
      
    
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesloaded}

        options={{
            background: {
                color:{
                    value: '#202020'
                },
            },
            fpsLimit: 240,
            interactivity: {
                events: {
                    onClick :{
                        enable: true,
                        mode: 'push',
                    },
                    onHover :{
                        enable: true,
                        mode: 'grab',
                        parallax: {
                            enable: true,
                            force: 30,
                            smooth:10
                        }
                    },
                    mode: {
                        push: {
                            quantity: 100
                        },
                        grab: {
                            duration: 0.2,
                            distance: 150
                        }
                    }
                }
            },
            particles: {
                color: {
                    value: '#fff'
                },
                links: {
                    enable: true,
                    width: 1,
                    opacity: 1,
                    distance: 180,
                },
                move: {
                    enable: true,
                    direction: 'none',
                    outMode: {
                        default: 'bounce',
                    },
                    random: false,
                    speed: 1.2,
                    straight: false
                },
                collisions: {
                    enable: true,
                },
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        area: 800,
                    }
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    min: 1,
                    max: 15
                }
            },
            detectRetina: true
        }}
        />
    </div>
  )
}
