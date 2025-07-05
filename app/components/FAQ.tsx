'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission to your insurance company for potential reimbursement."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions are conducted via Zoom. I offer virtual sessions on Monday, Wednesday, and Friday from 1 PM to 5 PM."
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice is required for cancellations. Cancellations made with less than 24 hours notice may be subject to a fee."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Standard individual and couples sessions are 50 minutes long. Initial consultations may run slightly longer to ensure we have adequate time to discuss your needs."
    },
    {
      question: "What should I expect in our first session?",
      answer: "Our first session will focus on understanding your concerns, goals for therapy, and developing a treatment plan together. It's an opportunity for us to get to know each other and ensure we're a good fit."
    },
    {
      question: "Do you offer in-person sessions?",
      answer: "Yes, in-person sessions are available on Tuesdays and Thursdays from 10 AM to 6 PM at my office on Maplewood Drive in Los Angeles."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about working together
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Have another question?</p>
          <a href="mailto:serena@blakepsychology.com" className="btn-primary">
            Email Dr. Blake
          </a>
        </div>
      </div>
    </section>
  )
}
