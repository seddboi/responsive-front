import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import '@/index.css';

const FAQ = ({ question }: { question: string }): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <details
      className={`FAQcontainer cursor-pointer space-y-4 transition-all duration-600 ease-in-out hover:bg-gray-200 ${
        isOpen ? 'open' : ''
      }`}
      onClick={toggleDropdown}
    >
      <summary className="flex justify-between">
        <span className="w-[85%]">{question}</span>
        {isOpen ? (
          <IoIosArrowUp className="FAQarrow self-center" />
        ) : (
          <IoIosArrowDown className="FAQarrow self-center" />
        )}
      </summary>
      {isOpen && (
        <p className="w-full text-sm xl:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          quam pariatur animi eveniet, quis dolores error magnam repellat omnis
          velit et totam enim, soluta quod, doloribus non exercitationem.
          Libero, voluptatem. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Dignissimos quam pariatur animi eveniet, quis
          dolores error magnam repellat omnis velit et totam enim, soluta quod,
          doloribus non exercitationem. Libero, voluptatem. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Dignissimos quam pariatur animi
          eveniet, quis dolores error magnam repellat omnis velit et totam enim,
          soluta quod, doloribus non exercitationem. Libero, voluptatem.
        </p>
      )}
    </details>
  );
};

export default FAQ;
