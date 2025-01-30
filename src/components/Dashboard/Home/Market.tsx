import { MapPinned } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Enugu from '../../../public/Enugu.jpg'

interface CounterProps {
    stat: number;
  }

const Market =()=> {
  const Cards = [
    {
      name: "Market 1",
      icon: <MapPinned size={30} />,
      stat: 30,
    },
    {
      name: "Market 2",
      icon: <MapPinned size={30} />,
      stat: 10,
    },
    {
      name: "Market 3",
      icon: <MapPinned size={30} />,
      stat: 75,
    },
    {
      name: "Market 4",
      icon: <MapPinned size={30} />,
      stat: 5,
    },
    {
      name: "Market 5",
      icon: <MapPinned size={30} />,
      stat: 81,
    },
  ];

  const Counter = ({ stat }: CounterProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const duration = 1000; 
      const startTime = performance.now();

      const animateCounter = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const value = Math.round(progress * stat);

        setCount(value);

        if (progress < 1) {
          requestAnimationFrame(animateCounter);
        }
      };

      requestAnimationFrame(animateCounter);

    }, [stat]);

    return <div className="text-5xl font-bold">{count}</div>;
  };
  

  Counter.propTypes = {
    stat: PropTypes.number.isRequired,
  };


  return (
    <div className="w-full h-screen overflow-y-scroll p-4 pb-20">
      <section className="grid md:grid-cols-2 lg:grid-cols-4 rounded-lg gap-4">
        {Cards.map((card, index) => (
          <motion.div
            key={index}
            className="rounded-lg"
            style={{background: `url(${Enugu}) no-repeat`, backgroundSize: "cover"}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={`bg-black grid p-4 py-6 h-60 rounded-lg font-bold text-white border border-green-500 bg-opacity-80 text-md flex items-center`}>
              <div className="flex items-center gap-2 font-semibold">{card.icon} {card.name}</div>
              <Counter stat={card.stat} />
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export default Market