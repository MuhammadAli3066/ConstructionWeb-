import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of construction services, including residential, commercial, and industrial construction, renovations, and project management.",
    },
    {
      question: "How long have you been in business?",
      answer: "We have been serving clients in the construction industry for over 20 years with a commitment to quality and customer satisfaction.",
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we provide free estimates for all potential projects. Contact us to schedule a consultation.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed and insured, ensuring that your project is handled professionally and safely.",
    },
    {
        question: "Are you licensed and insured?",
        answer: "Yes, we are fully licensed and insured, ensuring that your project is handled professionally and safely.",
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes, we are fully licensed and insured, ensuring that your project is handled professionally and safely.",
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes, we are fully licensed and insured, ensuring that your project is handled professionally and safely.",
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes, we are fully licensed and insured, ensuring that your project is handled professionally and safely.",
      },
  ];

  return (
    <section
    className="bg-cover bg-center h-screen text-white"
    style={{ backgroundImage: "url('faq2.jpg')" }}
    >
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center text-xl font-medium text-white"
            >
              {faq.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="mt-4 text-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Faq;
