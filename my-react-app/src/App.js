import React, { useState } from 'react';
import Section from './Section';
import './App.css';
import Currency from './currency/Currency'
import hobby1Image from './images/claudio-schwarz-yXkgZ0L2BIY-unsplash.jpg';
import hobby2Image from './images/luke-miller-wGDV7P0iuEA-unsplash.jpg';
import hobby3Image from './images/neom-bOMVTvE2QFU-unsplash.jpg';

const App = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
  
  return (
    <>
      <header>
        <h1>My Hobbies</h1>
        <nav>
          <ul>
            <li>
              <a href="#hobby1">Hobby One</a>
            </li>
            <li>
              <a href="#hobby2">Hobby Two</a>
            </li>
            <li>
              <a href="#hobby3">Hobby Three</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <button onClick={toggleVisibility}>{isHidden ? 'Show Images' : 'Hide Images'}</button>
        <Section id="hobby1" src={hobby1Image} alt="Hobby 1 Image" isHidden={isHidden}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a fringilla neque, a posuere diam. Proin massa diam, blandit quis diam id, dignissim tristique dui. Quisque non libero a turpis pulvinar accumsan a id mauris. Curabitur vitae arcu a erat gravida sagittis vel vel mi. Morbi commodo, orci quis maximus molestie, quam diam accumsan purus, et semper magna urna eu risus. Fusce sollicitudin tempus pretium. Donec egestas laoreet hendrerit. Suspendisse vitae lacus tempus, fringilla nunc a, vulputate sapien. Etiam nec turpis dui. Nam imperdiet molestie sem, ac elementum quam malesuada quis. Ut eget turpis lorem.</p>
        </Section>
        <Section id="hobby2" src={hobby2Image} alt="Hobby 2 Image" isHidden={isHidden}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a fringilla neque, a posuere diam. Proin massa diam, blandit quis diam id, dignissim tristique dui. Quisque non libero a turpis pulvinar accumsan a id mauris. Curabitur vitae arcu a erat gravida sagittis vel vel mi. Morbi commodo, orci quis maximus molestie, quam diam accumsan purus, et semper magna urna eu risus. Fusce sollicitudin tempus pretium. Donec egestas laoreet hendrerit. Suspendisse vitae lacus tempus, fringilla nunc a, vulputate sapien. Etiam nec turpis dui. Nam imperdiet molestie sem, ac elementum quam malesuada quis. Ut eget turpis lorem.</p>
        </Section>
        <Section id="hobby3" src={hobby3Image} alt="Hobby 3 Image" isHidden={isHidden}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a fringilla neque, a posuere diam. Proin massa diam, blandit quis diam id, dignissim tristique dui. Quisque non libero a turpis pulvinar accumsan a id mauris. Curabitur vitae arcu a erat gravida sagittis vel vel mi. Morbi commodo, orci quis maximus molestie, quam diam accumsan purus, et semper magna urna eu risus. Fusce sollicitudin tempus pretium. Donec egestas laoreet hendrerit. Suspendisse vitae lacus tempus, fringilla nunc a, vulputate sapien. Etiam nec turpis dui. Nam imperdiet molestie sem, ac elementum quam malesuada quis. Ut eget turpis lorem.</p>
        </Section>
      </main>
      <Currency/>
      <footer>
        <p>&copy; 2024 My Hobbies</p>
      </footer>
    </>
  );
};

export default App;
