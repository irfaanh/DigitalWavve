import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faq = [
    {
      no: 1,
      question: 'What is digital Marketing? Why is digital marketing important in Kerala?',
      answer: 'Digital marketing, also known as online marketing, means promoting brands to reach potential customers using the internet and digital tools like SEO, SEM, SMM, etc. It lets you be creative and unique in busy markets. It’s important for businesses and customers to use it to learn about companies. There are digital marketing agencies to assist businesses with their digital marketing techniques. You can hire a digital marketing company in Calicut to increase your online presence.',
    },
    {
      no: 2,
      question: 'Different types of Digital Marketing in Kerala?',
      answer: 'Digital marketing agencies in Calicut use techniques like SEO, social media marketing, email campaigns, and influencer partnerships to promote brands online. It encompasses a range of strategies to connect with potential customers and stand out in the digital landscape.',
    },
    {
      no: 3,
      question: 'Do digital marketing techniques work for every business in Kerala?',
      answer: 'Regardless of size or industry, digital marketing is applicable to all businesses and you can connect with a Digital marketing agency in Calicut for digital marketing services. It involves grasping consumer needs and crafting relevant, valuable content. However, it doesn’t imply a one-size-fits-all approach; strategies like social media, SEO, SEM, content, email marketing, and PPC advertising can be tailored to each business’s unique needs.',
    },
    {
      no: 4,
      question: 'How much does a digital marketing agency cost in Calicut, Kerala?',
      answer: 'Digital marketing agency costs in Calicut can vary according to the type of services your business needs. What you need depends on where your audience spends more of their time. Connect with Quadcubes, the best internet marketing agency in Calicut to get affordable and top-notch internet marketing services in Kerala.',
    },
    {
      no: 5,
      question: 'Which is the best digital marketing agency in Calicut, Kerala?',
      answer: 'DigitalWave is the Best Digital marketing agency in Calicut, Kerala, and also the best social media marketing agency in Calicut. They provide top-notch services like SEO, SEM, SMM, branding, photoshoots, video production, and web design. As a leading digital marketing agency in Calicut, they consistently provide exceptional results, that boost online visibility for the clients.',
    },
    {
      no: 6,
      question: 'Why should I choose digital marketing over traditional marketing in Kerala?',
      answer: 'Not only is digital marketing sometimes more cost-effective than traditional, but also it is a more direct way to connect with target audiences globally. Digital marketing and digital marketing agencies is essential for businesses today. Digital marketing companies can assist businesses with their digital marketing services like SEO, SMM, Content Marketing, etc. If you need any type of digital marketing services you can connect with Quadcubes the Best Digital Marketing Agency in Calicut.',
    },
    {
      no: 7,
      question: 'How can I increase the online visibility of my business in Kerala?',
      answer: 'You can hire a digital marketing agency in Kerala to increase online visibility and Focus on search engine optimization (SEO), creating interesting and shareable content, and interacting actively on social media sites where your target market gathers to increase your company’s online exposure. To reach a larger audience, use targeted online marketing campaigns, and think about working with influencers or partners in the sector. QuadCubes, the best Digital marketing agency in Calicut can assist you with their top-notch digital marketing services in Calicut.',
    },
    {
      no: 8,
      question: 'What is social media marketing?',
      answer: 'Social media marketing (SMM) utilizes social media platforms as marketing tools to facilitate brand-building, boost sales, and drive website traffic by engaging with the target audience. Hire a Digital marketing agency in Calicut, Kerala to improve your Social media presence and Quadcubes is currently the best social media marketing agency in Calicut.',
    },{
        no:9,
        question:'How long will it take to see results using digital marketing in Kerala?',
        answer:'Results from digital marketing efforts can manifest in a few weeks for strategies like PPC, but more time, often several months, is typically required for substantial outcomes from tactics like SEO and content marketing. Consistent, long-term efforts are key for maximizing the effectiveness and impact of your digital marketing initiatives. You can hire a Digital marketing agency in Kerala to get results'
    },{
        no:10,
        question:'What is seo in digital marketing ?',
        answer:'SEO or Search Engine Optimization, involves enhancing a website’s technical setup, content relevance, and link popularity. This aims to make its pages more easily discoverable, relevant, and favored by search engines, resulting in improved rankings for user search queries. A Digital marketing company in Calicut, Kerala can assist you to increase your search engine ranking.'
    },{
        no:11,
        question:'What is the difference between SEO & SEM?',
        answer:'The key distinction lies in the fact that Search Engine Optimization (SEO) aims to optimize a website for organic search traffic, while Search Engine Marketing (SEM) aims to secure visibility and traffic from both organic and paid search sources. If you have any doubt regarding  SEO and social media services you can connect with Quadcubes the Best Digital Markeitng Agency in Kerala.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='faq' className="faq-container fade-in">
      <h2 className="faq-title">FAQ</h2>
      <p className='faq-subtitle'>A look at frequently asked questions about Digital Marketing & Digital Marketing Agency in Kerala</p>
      {faq.map((item, index) => (
        <div key={item.no} className="faq-item">
          <button className="faq-question" onClick={() => toggleAccordion(index)}>
            {item.question}
            <span className="faq-icon">{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
