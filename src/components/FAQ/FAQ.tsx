import { ChevronDown, ChevronLeft } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
const FAQ = () => {
    const [modal, setModal] = useState(null)

    const Questions = [
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

    const toggleModal = (index: any) => {
        setModal((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <header className="w-full bg-[#0a3413] text-white py-20 text-center  shadow-lg mb-4 lg:mb-28">
      <div className="container">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="lg:text-lg max-w-2xl mx-auto">
          Find answers to common questions about Enugu eMarket and how it works.
        </p>
        </div>

      </header>
            <div className='space-y-10 container'>
                <section className='w-full my-4 md:pt-10'>
                    {Questions.map((question, index) => (
                        <section key={index} className='z-10'>
                            <div className='border-b p-2 mt-2 flex items-center justify-between cursor-pointer' onClick={() => toggleModal(index)} >{question.question} {modal === index ? <ChevronLeft /> : <ChevronDown />}</div>
                            <motion.div className='bg-green-300 bg-opacity-20 backdrop-blur-md text-justify'
                                initial={{ overflowY: 'hidden', height: 0 }}
                                animate={modal === index? { height: 'auto' } : { overflowY: 'hidden', height: 0 }}
                                transition={{duration: 0.5, type: 'tween' }}
                            >
                                <div className='contain px-5 lg:px-20 py-[30px]'>
                                    {question.answer}
                                </div>
                            </motion.div>
                        </section>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default FAQ
