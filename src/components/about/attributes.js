import React, { useState } from 'react';
import Kebab from '@components/kebab';
import classNames from 'classnames';
import { FaCode, FaMagic } from 'react-icons/fa';
import { FaGears } from 'react-icons/fa6';
import {
  GiCoffeeBeans,
  GiCoffeePot,
  GiSwissArmyKnife,
  GiTeamIdea,
} from 'react-icons/gi';
import { MdAutoAwesome, MdFeedback } from 'react-icons/md';
import { SiAdobephotoshop } from 'react-icons/si';

const Attribute = ({ title, children, icon }) => {
  return (
    <div>
      <div className="flex justify-center mb-4 text-4xl text-gray-900 dark:text-gray-200">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
      <p className="mb-4 text-gray-500 dark:text-gray-400">{children}</p>
    </div>
  );
};

const Attributes = () => {
  const [visible, toggleVisibility] = useState(false);
  const phrases = [
    'creative',
    'curious',
    'determined',
    'dedicated',
    'open & honest',
    'passionate',
  ];
  return (
    <>
      <Kebab
        className="cursor-pointer"
        onClick={() => toggleVisibility(!visible)}
        expanded={visible}
        prefix="I am"
        phrases={phrases}
      />
      <section
        className={classNames(
          'py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6',
          visible ? 'block' : 'hidden',
        )}
      >
        <h2 className="mb-4 text-4xl tracking-tighter font-extrabold text-gray-900 dark:text-white">
          A little something about me
        </h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          I am {phrases.join(', ')}.
        </p>
        <div className="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <Attribute title="Pragmatic" icon={<GiSwissArmyKnife />}>
            <p>
              I prioritize practical solutions, solve problems, and adapt to
              deliver effective and realistic outcomes. I excel in effective
              communication and skillfully managing expectations.
            </p>
          </Attribute>
          <Attribute title="Code hygiene" icon={<FaCode />}>
            <p>
              My goal is to produce high-quality, healthy, robust,
              well-organized, easily testable and maintainable code as if the
              person who will maintain it is a violent psychopath who knows
              where I live.
            </p>
          </Attribute>
          <Attribute title="Consistent" icon={<FaGears />}>
            <p>
              Whether it's in communication, problem-solving, or project
              management, my pursuit of consistency reflects a relentless drive
              for excellence and a steadfast commitment to delivering
              high-quality outcomes.
            </p>
          </Attribute>
          <Attribute title="Team player" icon={<GiTeamIdea />}>
            <p>
              I am an empathetic and supportive collaborator. I thrive on
              fostering a positive and inclusive team environment, where I
              actively listen, understand, and support my teammates.{' '}
            </p>
          </Attribute>
          <Attribute title="Fast feedback" icon={<MdFeedback />}>
            <p>
              I implement tools for fast feedback to streamline processes and
              ensuring a seamless development experience with rapid iteration
              for enhanced efficiency and continuous improvement.
            </p>
          </Attribute>
          <Attribute title="Automate" icon={<FaMagic />}>
            <p>
              Automate repetitive tasks to ensure consistency, save time, and
              maintain sanity—whether through automated tests, continuous
              deployments, or scripting utilities.
            </p>
          </Attribute>
          <Attribute title="Simplify" icon={<GiCoffeeBeans />}>
            <p>
              Design for the future, develop for the present. Create a robust,
              extendable, and easy-to-maintain system, focusing only on the
              necessary features and complexity needed at the moment.
            </p>
          </Attribute>
          <Attribute title="Learn and grow" icon={<GiCoffeePot />}>
            <p>
              Grow as a curious sponge — learn from reading all the things,
              watching interesting videos, interacting with others, and hands-on
              experience!
            </p>
          </Attribute>
          <Attribute
            title="Over and beyond"
            icon={
              <>
                <SiAdobephotoshop />
                &nbsp;
                <MdAutoAwesome />
              </>
            }
          >
            <p>
              Additional strengths in graphic design using Photoshop and I've
              completed a Data Science and AI bootcamp. I am versatile in both
              creative and analytical domains.
            </p>
          </Attribute>
        </div>
      </section>
    </>
  );
};

export default Attributes;
