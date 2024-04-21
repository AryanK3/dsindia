"use client";

import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
  
import Image from 'next/image';

export default function Carousell({ slides }){
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="flex justify-center w-full h-[400px] relative bg-gradient-to-b from-blue-300 via cyan-100 to-sky-50">
            <Image
              src={slide.imageSrc}
              alt={slide.imageAlt}
              width="733" height="400"
              objectFit="cover"
              className="rounded-md mt-2 mb-2" 
            />
          </div>
          <Carousel.Caption className="text-white bg-cyan-950 bg-opacity-80 rounded-md">
            <h3>{slide.caption}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

