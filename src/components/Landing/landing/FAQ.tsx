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
    }
  ];

  return (
    <div className="flex flex-col items-center p-6">
      <section className="container mt-16 max-w-4xl mx-auto pt-12">
        <h2 className="text-xl lg:text-3xl font-extrabold text-green-900 text-center mb-8">FAQ</h2>
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
