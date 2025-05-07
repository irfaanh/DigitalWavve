import React from 'react'
import './OurWorks.css'

const OurWorks = () => {
  const brandLogo = [
    { no: '1', name: 'Solaire', image: '/images/works/001.webp' },
    { no: '2', name: 'Hun Must', image: '/images/works/350430416_2459686380858175_3626943180530928288_n-1.webp' },
    { no: '3', name: 'QTile', image: '/images/works/391631850_710711944415257_4405738463106622495_n.webp' },
    { no: '4', name: 'Lagnuvo', image: '/images/works/430050566_1393812864593801_3386726375752106791_n.jpg' },
    { no: '5', name: 'Aroosa', image: '/images/works/Aroosa-1000x-662.webp' },
    { no: '6', name: 'Akriti', image: '/images/works/Artboard-1-1.webp' },
    { no: '7', name: 'Aroosa', image: '/images/works/DSC00086-1-1.webp' },
    { no: '8', name: 'Muthoot', image: '/images/works/IMG-20240318-WA0134.webp' },
    { no: '9', name: 'Ovolo', image: '/images/works/ovolo-X-QC-02.webp' },
    { no: '10', name: 'Glamata', image: '/images/works/psd-6-scaled.webp' },
    { no: '11', name: 'Gratis', image: '/images/works/QCXgratis-cover.webp' },
    { no: '12', name: 'Impex', image: '/images/works/Vadamvali-100x-662.webp' },
    { no: '13', name: 'Wea Design', image: '/images/works/wea-design-5-1.webp' },
    { no: '14', name: 'MG', image: '/images/works/WhatsApp-Image-2024-04-19-at-5.53-1-4.webp' },
    { no: '15', name: 'Fundfloat', image: '/images/works/WhatsApp-Image-2024-04-19-at-5.53-1-7.png' }
  ];

  return (
    <section className="our-works-container fade-in">
      <h2 className="section-title">PORTFOLIO</h2>
      <p>DigitalWave is the best Digital marketing agency in Kerala. In terms of quality, 
        creativity, and results – our work speaks for us. Showcasing the best of our work in Digital 
        Marketing, Branding, Product shoots, Social Media campaigns, Brochures, 
        and more. In our portfolio as a digital marketing agency in Kerala, 
        you’ll find a diverse range of projects where we’ve successfully navigated the digital landscape.
      </p>
      <div className="our-works-grid">
        {brandLogo.map((item) => (
          <div className="work-card" key={item.no}>
            <img src={item.image} alt={`Work ${item.no}`} />
            <div className="overlay">
              <p className="work-name">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurWorks
