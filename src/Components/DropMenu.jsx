import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

function DropMenu() {
   
    const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


    const sections = [
        {
          title: 'Furniture',
          content: (
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus odit a culpa maxime, debitis nemo nihil ducimus assumenda eligendi earum sequi labore voluptates omnis iure quibusdam aut eveniet reiciendis error? Dicta molestiae aperiam, itaque in velit, reiciendis eveniet autem quaerat sit, expedita veritatis impedit? Commodi suscipit aut aspernatur rem nobis.</p>
          ),
        },
        {
          title: 'Electronics',
          content: (
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde magnam in laborum aspernatur, corporis officia perferendis doloremque ullam blanditiis consequatur temporibus illum labore? Omnis quibusdam, molestias magni placeat illo reprehenderit modi consequuntur possimus! Aliquid, nemo minima accusantium doloribus suscipit illum repellendus enim similique alias nostrum iure quaerat, eius tempora quos.</p>
          ),
        },
        {
          title: 'Vehicle',
          content: (
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure in nulla, labore facere voluptatem rerum tempore tempora nihil aliquid ratione dignissimos autem, doloribus exercitationem deserunt dolorum ea id, cum nemo nisi quis maiores minus debitis. Explicabo, vitae nostrum iure eaque recusandae est repudiandae beatae voluptatibus. Illum quas ad maiores temporibus!</p>
          ),
        },
        {
            title: 'Boxes/Trolley',
            content: (
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita temporibus quaerat voluptatibus similique quis velit, sapiente, reiciendis obcaecati perferendis, laudantium tempore? Nostrum ipsam id laboriosam eligendi iste nesciunt tempore quibusdam quidem, cupiditate, facilis eaque laborum quaerat deserunt odio provident voluptate perspiciatis explicabo quo laudantium veritatis soluta quam nemo quod excepturi?</p>
            ),
          },
          {
            title: 'Custom Items',
            content: (
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi mollitia officia, pariatur corporis odio veritatis nisi voluptatibus eum voluptas suscipit ratione saepe similique rem sit. Dolore provident at et totam nemo consectetur deleniti possimus eligendi, a, eum mollitia aspernatur aperiam nihil pariatur quia velit sint enim, accusantium asperiores. Magnam!</p>
            ),
          },
      ];

  return (
    <div className='accdiv'>
      {sections.map((section, index) => (
        <div className="accordion" key={index}>
          <div
            id="accordion-title"
            onClick={() => toggleAccordion(index)}
          >
            {section.title}
            <span className={`icon ${openIndex === index ? 'rotate' : ''}`}>
              <i className="fas fa-chevron-down"></i>
            </span>
          </div>
          <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
            {section.content}
          </div>
        </div>
      ))}
    </div>
  )
}

export default DropMenu