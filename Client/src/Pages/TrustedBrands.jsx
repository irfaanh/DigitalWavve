import React from 'react';
import './TrustedBrands.css';

const TrustedBrands = () => {
  const brandLogo = [
    { no: '1', image: '/images/brandicn/Aroosa.svg' },
    { no: '2', image: '/images/brandicn/best-digital-marketing-agency-client-apollo-clinic.png' },
    { no: '3', image: '/images/brandicn/best-digital-marketing-agency-client-cda.svg' },
    { no: '4', image: '/images/brandicn/best-digital-marketing-agency-client-mra.svg' },
    { no: '5', image: '/images/brandicn/digital-marketing-agency-client-vismaya.svg' },
    { no: '6', image: '/images/brandicn/digital-marketing-for-brookieno-by-agency-in-calicut-kerala.jpg' },
    { no: '7', image: '/images/brandicn/digital-marketing-for-dopa-by-agency-in-calicut-kerala.png' },
    { no: '8', image: '/images/brandicn/digital-marketing-for-english-house-by-agency-in-calicut-kerala.jpeg' },
    { no: '9', image: '/images/brandicn/digital-marketing-for-espanshe-by-best-agency-in-calicut-kerala.svg' },
    { no: '10', image: '/images/brandicn/digital-marketing-for-impex-by-agency-in-calicut-kerala.jpg' },
    { no: '11', image: '/images/brandicn/digital-marketing-for-nrk-by-agency-in-calicut-kerala.png' },
    { no: '11', image: '/images/brandicn/WEA-LOGO-01-1-1 (1).png' },
    { no: '11', image: '/images/brandicn/Makeida-Midas (1).svg' },
    { no: '11', image: '/images/brandicn/Emmanuel (1).svg' },
    { no: '11', image: '/images/brandicn/Untitled-2 (1).png' }
  ];

  return (
    <div className="trusted-brands-container fade-in">
      <h2 className="section-title">Our Trusted Clients</h2>
      <p>We are not just an agency; We are your Partners in Growth.</p>
      <div className="brand-logos-grid">
        {brandLogo.map((brand) => (
          <div className="brand-logo-item" key={brand.no}>
            <img src={brand.image} alt={`Brand ${brand.no}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBrands;
