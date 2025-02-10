import Image from "../../public/landing1.jpg"

export default function FAQ() {
  const questions = [
    {
      question: "What is Enugu eMarket?",
      answer: "Enugu eMarket is a dedicated platform designed to empower marketers in Enugu by providing seamless registration, valuable insights, and a community-driven network."
    },
    {
      question: "How can I become a Field Agent?",
      answer: "To become a Field Agent, simply register on our platform and follow the provided guidelines to verify your account."
    },
    {
      question: "How does Enugu eMarket work?",
      answer: "Enugu eMarket connects marketers and businesses, providing valuable insights, networking opportunities, and tools to enhance their business operations."
    },
    {
      question: "Who can use Enugu eMarket?",
      answer: "Anyone residing in Enugu State, including marketers, business owners, and consumers looking to connect with trusted vendors."
    },
    {
      question: "Can I register?",
      answer: "Yes! Registration is open to all marketers and businesses in Enugu who wish to benefit from our platform."
    },
    {
      question: "How secure is my data?",
      answer: "We prioritize data security and use industry-standard encryption methods to ensure your personal and business data is protected."
    },
    {
      question: "Is Enugu eMarket free to use?",
      answer: "Yes, our basic features are free to use. However, there may be premium services available for enhanced functionality."
    },
    {
      question: "How do I get support?",
      answer: "You can reach out to our support team via the contact form on our website or email us directly for assistance."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <header className="w-full bg-[#13802AFF] text-white py-16 text-center rounded-2xl shadow-lg mb-10">
        <div className="container">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Find answers to common questions about Enugu eMarket and how it works.
        </p>
        </div>
      </header>

      <section className="container mt-16 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        {questions.map((q, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{q.question}</h2>
            <p className="text-gray-600">{q.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
