import React from 'react';
import './circle-t.css'

interface Cicle_tProps {
  tech: string;
  url: string;
}
const Cicle_t: React.FC <Cicle_tProps> = ({ tech, url }) => {

  return (
     <div className='tech-circle'>
        <img className='circle-tech' src={url} alt="" />
        <img className='tech-c' src={tech} alt="" />
     </div>
  );
};

export default Cicle_t;