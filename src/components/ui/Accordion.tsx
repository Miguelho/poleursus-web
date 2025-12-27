'use client';

import { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemProps[];
}

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-primary-600"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium">{question}</span>
        <svg
          className={`h-5 w-5 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-neutral-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="divide-y divide-neutral-200">
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
