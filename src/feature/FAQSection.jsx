

// components/FAQSection.jsx

import { Plus } from 'lucide-react';
import React from 'react';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a range of customized solutions designed to meet your specific needs, including [brief service list]."
  },
  {
    question: "How can I get started?",
    answer: "Getting started is easy! Simply [describe how—fill a form, contact support, sign up, etc.]."
  },
  {
    question: "Is there a free trial or demo available?",
    answer: "Yes, we offer a [duration] free trial/demo so you can explore our service before committing."
  },
  {
    question: "What makes your service different from others?",
    answer: "Our service stands out due to its [key advantage—e.g., affordability, innovation, customer support, etc.]."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach us via email at [email], phone at [number], or live chat on our website."
  },
  {
    question: "Do you offer customization or tailored solutions?",
    answer: "Yes! We work closely with clients to provide solutions that are fully tailored to their needs."
  },
  {
    question: "Is my data secure with your service?",
    answer: "Absolutely. We prioritize security and use industry-standard encryption to protect your data."
  }
];

const FAQSection = () => {
  return (
    <section className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="mt-12 flex flex-col lg:flex-row justify-between gap-3 bg-gray-100 p-4 rounded-xl shadow-sm">
             <h3 className="font-semibold text-lg">{faq.question}</h3>
            <Plus size={32} className=''/>
           
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
