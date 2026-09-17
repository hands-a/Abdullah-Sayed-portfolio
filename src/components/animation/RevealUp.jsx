import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/**
 * RevealUp
 * Scroll-triggered fade+slide reveal using Framer Motion whileInView.
 * Uses viewport once:true so elements don't re-animate on scroll back.
 *
 * @param {number} delay - stagger delay in seconds
 * @param {string} className - additional classes for the wrapper
 */
export default function RevealUp({ children, delay = 0, className = '', style, as = 'div' }) {
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      variants={variants}
      custom={delay}
    >
      {children}
    </Tag>
  );
}
