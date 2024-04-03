import React from 'react';

const Section = ({ id, src, alt, children, isHidden }) => (
  <section id={id}>
    <h2>{id}</h2>
    <div className="content">
      {!isHidden && <img src={src} alt={alt} />}
      <p>{children}</p>
    </div>
  </section>
);

export default Section;
