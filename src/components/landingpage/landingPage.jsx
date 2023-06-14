import React from 'react';
import Carousel from '../carousel/swiper';
import Principle from '../../assets/principle.jpg';
import Deputy from '../../assets/deputy-principle.jpg';

function landingPage() {
  return (
    <div className="mt-16 pr-2 pl-2">
      <p className="p-2 text-bold text-center break-words text-zinc-700 text-ellipsis">OUR NAME:- <br/>

        It was in 1929 during the month of Rabiul Awwal, the month of the birth of our beloved Prophet (SAW), when the founding fathers contemplated on an appropriate name for the school.
        They decided to name the school Muhammadeyah in honour of the name of our beloved Prophet Muhammad (SAW).
        <br/>
        <br/>
        OUR MISSION STATEMENT<br/>

        To strive towards an education of the highest calibre through a holistic approach to Learning and Teaching according to the norms and values of ISLAM.
        <br/>
        <br/>
        THE INSCRIPTION ON OUR SCHOOL BADGE:-

        The school motto on our badge is Iqra :- <span className="text-bold text-lg text-yellow-400">" READ ! "</span>
      </p>
      <div className="grid grid-cols-2 mt-24">
        <div className="flex justiify-between p-3">
          <img src={Principle} alt="Principle" className="object-cover h-60 w-1/4 rounded-xl mr-4 hover:w-1/2 hover:duration-1000 hover:ease-in ease-out transition-all"/>
          <p className="break-words text-blue-950"><span className="text-bold non-italic">Principle said:</span><span className="italic text-semibold">"Muhammadeyah was born out of a need in the Muslim community at the Cape, and Wynberg in particular, for a school with an educational curriculum that would provide its children with the traditional “religious” education in addition to the tools to participate actively and creatively in the socio -economic life of the country. An education that would inculcate the values of Islam"</span></p>
        </div>
        <div className="flex flex-col justiify-between p-3 items-end">
          <img src={Deputy} alt="Deputy" className="object-cover h-60 w-1/4 rounded-xl mb-4 hover:w-1/2 hover:duration-1000 hover:ease-in ease-out transition-all" />
          <p className="break-words text-blue-950"><span className="text-bold non-italic">Deputy Principle said:</span><span className="italic text-semibold">"Muhammadeyah was born out of a need in the Muslim community at the Cape, and Wynberg in particular, for a school with an educational curriculum that would provide its children with the traditional “religious” education in addition to the tools to participate actively and creatively in the socio -economic life of the country. An education that would inculcate the values of Islam"</span></p>
        </div>
      </div>
      <Carousel />
    </div>
  )
}

export default landingPage;
