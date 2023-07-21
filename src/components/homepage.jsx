/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Sphere, MeshDistortMaterial, SpotLight } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Navbar from './navbar';
import Background from './background';
import FrontImg from './desk.png';
export default function homepage() {

  return (
    <>
<div className='main'>
<Background />
<h1 className='logo'>Sumit <span className='span'>Kumar</span></h1>
<Navbar />
  <div className='content'>
    <h2 className='arrowL arrow'> &#x250c;</h2>
    <br />
    <h4 className='Homeh4'>Hello, I'm </h4>
    <h1 className='Homeh1'>Sumit Kumar</h1>
    <h3 className='Homeh3'>I'm a Developer!</h3>
    <h2 className='arrowR arrow'> &#x2518;</h2>
    <br />
    <a href='/' download className='download'>Download CV <FontAwesomeIcon icon={faDownload} /></a>
  </div>
  <div className='imges'>
    {/* <img src={svg} alt="Blob svg" className='img' /> */}
    
    <Canvas style={{
      position: 'absolute', 
      width: '50%', 
      height: '680px', 
      left: '47%', 
      top:'7%', 
      zIndex: '-1'}}>
      <mesh>
        <ambientLight intensity={1.2} />
        <SpotLight intensity={2} position={[-30, -10, -20]} />
        <directionalLight intensity={1} color="0xffffff" />
        <Sphere visible scale={2} args={[1.1, 400, 500]}>
          <MeshDistortMaterial 
          style={{height: '570px'}}
          color={'#d95b00'}
          roughness={0.4}
          distort={0.4}
          speed={1.5}
          />
        </Sphere>
      </mesh>
    </Canvas>
    
    <img src={FrontImg} alt="FrontImg" className='frontimg' />
  </div>
</div>
    </>
  )
}

