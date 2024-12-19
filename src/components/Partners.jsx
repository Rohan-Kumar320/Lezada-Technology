import React from 'react';

const Partners = () => {
  const image = [
    {
      img: './partner-1.png',
      wid: 'w-44', // Set width as a fixed Tailwind class
      mtop: 4,
    },
    {
      img: './partner-2.png',
      wid: 'w-40',
      mtop: 4,
    },
    {
      img: './partner-3 (2).png',
      wid: 'w-28',
      mtop: 10,
    },
    {
      img: './partner-4.png',
      wid: 'w-36',
      mtop: 4,
    },
    {
      img: './partner-5.png',
      wid: 'w-40',
      mtop: 4,
    },
    {
      img: './partner-6.png',
      wid: 'w-36',
      mtop: 4,
    },
  ];

  return (
    <>
      <div className='text-center text-3xl mt-6 font-mono underline'>
        <h2>Our Partner's</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-6 mx-8 my-9 gap-4'>
        {image.map((imgg, index) => (
          <div key={index} className={`flex justify-center items-center translate-x-5 mt-${imgg.mtop}`}>
            <img src={imgg.img} alt={`Partner ${index + 1}`} className={imgg.wid} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Partners;
