import React from 'react';
import { FaBeer } from 'react-icons/fa';
import Title from './Title';

export default function Services() {
  let services = [
    {
      icon: <FaBeer />,
      title: 'Serv1',
      info:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perferendis?',
    },
    {
      icon: <FaBeer />,
      title: 'Serv2',
      info:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perferendis?',
    },
    {
      icon: <FaBeer />,
      title: 'Serv3',
      info:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perferendis?',
    },
    {
      icon: <FaBeer />,
      title: 'Serv4',
      info:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perferendis?',
    },
  ];

  return (
    <section>
      <Title title='Services'></Title>
      <div className='services'>
        {services.map((item) => {
          return (
            <article key={item.title} className='service'>
              <span className='service__icon'>{item.icon}</span>
              <h4 className='service__title'>{item.title}</h4>
              <p className='service__info'>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
