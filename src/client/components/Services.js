import React from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default function Services() {
  let services = [
    {
      icon: <FaCocktail className='service__icon' />,
      title: 'Free Cocktails',
      info:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perferendis?',
    },
    {
      icon: <FaHiking className='service__icon' />,
      title: 'Endless Hiking',
      info:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perferendis?',
    },
    {
      icon: <FaShuttleVan className='service__icon' />,
      title: 'Free Shuttle',
      info:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perferendis?',
    },
    {
      icon: <FaBeer className='service__icon' />,
      title: 'Strongest Beer',
      info:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perferendis?',
    },
  ];

  return (
    <section className='services'>
      <Title title='Services'></Title>
      <div className='center-container'>
        {services.map((item) => {
          return (
            <article key={item.title} className='service'>
              {item.icon}
              <h4 className='service__title'>{item.title}</h4>
              <p className='service__info'>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
