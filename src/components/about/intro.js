import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { greetings } from '@common/greetings';
import Emoji from '@components/emoji';
import WavingHand from '@components/waving-hand';

const getRandomGreeting = () => {
  const index = Math.floor(Math.random() * greetings.length);
  const greeting = greetings[index];
  return greeting;
};

const Intro = () => {
  const [greeting, setGreeting] = useState(getRandomGreeting());

  const greet = () => {
    const greeting = getRandomGreeting();
    setGreeting(greeting);
  };
  return (
    <>
      <div className="text-center relative">
        <div className="relative inline-block">
          <StaticImage
            src="../../images/avatar.png"
            alt="A photo of Clarice Bouwer on a windy day at the beach"
            width={300}
            height={300}
            style={{
              borderRadius: '50%',
            }}
          />
          <WavingHand className="absolute right-0 top-0" onClick={greet} />
        </div>
        <h1 className="text-5xl xl:text-8xl text-center mb-5 xl:mb-10 mt-5">
          <span className="font-semibold">{greeting}!</span>
        </h1>
        <div className="text-xl leading-loose xl:max-w-2xl mx-auto">
          <p className="mb-4">
            My name is Clarice Bouwer and I am a Software Engineering Team Lead
            working in the Financial Services Industry at Cloudsure Limited in
            Mauritius (born in South Africa)
            <Emoji className="inline-block mx-2">🏝️</Emoji>
            <Emoji className="inline-block mx-2">🇲🇺</Emoji>
            <Emoji className="inline-block mx-2">🇿🇦</Emoji>
          </p>
          <p className="mb-8">
            I obsess over Clojure(Script), Gatsby and Git{' '}
            <Emoji className="inline-block">🤤</Emoji>
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
