import { ChevronDown, ChevronLeft } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
const FAQ = () => {
    const [modal, setModal] = useState(null)

    const Questions = [
        {
            question: "What is Enugu eMarket?",
            answer: "Microsoft and our third-party vendors use cookies to store and access information such as unique IDs to deliver, maintain and improve our services and ads. If you agree, MSN and Microsoft Bing will personalise the content and ads that you see. You can select ‘I Accept’ to consent to these uses or click on ‘Manage preferences’ to review your options and exercise your right to object to Legitimate Interest where used.  You can change your selection under ‘Manage Preferences’ at the bottom of this pag",
        },
        {
          question: "How can i become a Field Agent?",
          answer: "Microsoft and our third-party vendors use cookies to store and access information such as unique IDs to deliver, maintain and improve our services and ads. If you agree, MSN and Microsoft Bing will personalise the content and ads that you see. You can select ‘I Accept’ to consent to these uses or click on ‘Manage preferences’ to review your options and exercise your right to object to Legitimate Interest where used.  You can change your selection under ‘Manage Preferences’ at the bottom of this pag",
      },
        {
            question: "How does Enugu eMarket work?",
            answer: "Microsoft and our third-party vendors use cookies to store and access information such as unique IDs to deliver, maintain and improve our services and ads. If you agree, MSN and Microsoft Bing will personalise the content and ads that you see. You can select ‘I Accept’ to consent to these uses or click on ‘Manage preferences’ to review your options and exercise your right to object to Legitimate Interest where used.  You can change your selection under ‘Manage Preferences’ at the bottom of this pag",
        },
        {
            question: "Who can use Enugu eMarket?",
            answer: "Anyone residing in Enugu State can use the app. Microsoft and our third-party vendors use cookies to store and access information such as unique IDs to deliver, maintain and improve our services and ads. If you agree, MSN and Microsoft Bing will personalise the content and ads that you see. You can select ‘I Accept’ to consent to these uses or click on ‘Manage preferences’ to review your options and exercise your right to object to Legitimate Interest where used.  You can change your selection under ‘Manage Preferences’ at the bottom of this pag",
        },
        {
            question: "Can I Register?",
            answer: "Microsoft and our third-party vendors use cookies to store and access information such as unique IDs to deliver, maintain and improve our services and ads. If you agree, MSN and Microsoft Bing will personalise the content and ads that you see. You can select ‘I Accept’ to consent to these uses or click on ‘Manage preferences’ to review your options and exercise your right to object to Legitimate Interest where used.  You can change your selection under ‘Manage Preferences’ at the bottom of this pag",
        },
        {
            question: "How secure is my data?",
            answer: "Health Verify ensures your data is securely encrypted and protected. Microsoft and our third-party vendors use cookies to store and access information such as unique IDs to deliver, maintain and improve our services and ads. If you agree, MSN and Microsoft Bing will personalise the content and ads that you see. You can select ‘I Accept’ to consent to these uses or click on ‘Manage preferences’ to review your options and exercise your right to object to Legitimate Interest where used.  You can change your selection under ‘Manage Preferences’ at the bottom of this pag",
        },
    ];

    const toggleModal = (index: any) => {
        setModal((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="w-full h-screen flex items-center justify-center p-4 py-10">
            <div className='space-y-10 container'>
                <h2 className='text-2xl font-bold text-center'>Frequently Asked Questions</h2>
                <section className='w-full'>
                    {Questions.map((question, index) => (
                        <section key={index} className='z-10'>
                            <div className='border-b bg-green-600 text-white font-semibold p-2 lg:px-10 mt-2 flex items-center justify-between lg:text-lg cursor-pointer' onClick={() => toggleModal(index)} >{question.question} {modal === index ? <ChevronLeft /> : <ChevronDown />}</div>
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