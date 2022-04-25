import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <h3>هیچ فیدبکی ثبت نشده</h3>;
  }

  return (
    <>
      <div className="feedback-list">
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem key={item.id} item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

export default FeedbackList;
