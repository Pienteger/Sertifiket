import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wave from './Components/Wave';
import TransitioningText from './Components/FadingLines';

function App() {

  const waves = [

    { color: 'lightblue', height: 100, width: 800, speed: .010 },
    { color: 'skyblue', height: 105, width: 800, speed: .020 },
    { color: 'lightblue', height: 110, width: 800, speed: .015 },
    { color: 'skyblue', height: 115, width: 800, speed: .025 },
  ];

  const strings: string[] = [
    "Transforming Credentials for the Digital Age",
    "Your Certificates, Reinvented Digitally",
    "Building Trust with Secure Digital Certifications",
    "Certify Your Skills, Elevate Your Career",
    "Experience the Future of Digital Certifications",
    "Empowering Professionals with Verified Digital Credentials",
    "Your Digital Certifications, Your Path to Success",
    "Securely Certify Your Expertise on Sertifiket",
    "All your ownership at one place"
  ];

  return (
    <div className="container mt-5 pt-5">

      <div className='d-flex'>
        <img src='/favicon.png' alt='logo' style={{ height: '10vh' }} />
        <div className='ms-3 align-self-center'>
          <h1 className='brand-name-h1'>Sertifiket</h1>
          <h2 className='brand-name-tag-line-h2'>by <strong>Pienteger</strong></h2>
        </div>
      </div>

      <TransitioningText className='fs-brand-tag-line' strings={strings} />


      <div style={{
        position: 'relative',
        height: '20vh', overflow: 'hidden'
      }}>
        {waves.map((wave, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              bottom: 0,
              zIndex: waves.length - index,
              width: '100%',
            }}
          >
            <Wave color={wave.color} height={wave.height} width={wave.width} speed={wave.speed} />
          </div>
        ))}
      </div>
      <section>
        <div>
          <p>
            We offer a range of services to help individuals and organizations obtain and verify digital certifications and badges, as well as ownership and skill set certificates. Our platform is designed to provide secure and reliable certification services that can be trusted by employers, educational institutions, and other third-party organizations.
          </p>
          <p>
            Our services include digitally issued certificates that are thoroughly examined and stored in a tamper-proof ledger, ensuring their authenticity and integrity. We also offer digital badges that can be used to showcase achievements and skills in a visual and dynamic way.
          </p>
          <p>
            Our verification services enable third-party organizations to easily verify the authenticity of the certificates and badges issued by our platform, helping to build trust and establish credibility in the system.
          </p>
          <p>
            In addition to these core services, we also offer transcript generation and management, learning management system integration, microcredentialing, and competency-based assessments. These services can help individuals to keep track of their achievements, build comprehensive sets of skills, and demonstrate their abilities to potential employers.
          </p>
          <p>
            At Sertifiket, we are committed to providing high-quality, secure, and reliable certification services that meet the needs of today's learners and organizations. Join us today and start building your digital certification portfolio!
          </p>
        </div>
      </section>

    </div>


  );
}

export default App;
