import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // محاسبه میانگین امتیاز
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  // درست کردن اعشار تا یک رقم و حذف .0 از اعداد بدون اعشار
  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>دیدگاه: {feedback.length}</h4>
      <h4>میانگین امتیاز: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
