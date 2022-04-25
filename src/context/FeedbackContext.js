import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  //   data
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ',
      rating: 10,
    },
    {
      id: 2,
      text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ',
      rating: 6,
    },
    {
      id: 3,
      text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ',
      rating: 4,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // ============= delete Feedback ============
  const deleteFeedback = (id) => {
    if (window.confirm('آیا از حذف این نظر اطمینان دارید؟')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // =============== Add Feedback ===========
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //   ============== Edit Feedback =========================
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // =============== update feedback item ===================
  const updateFeedback = (id, upItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...upItem } : item)),
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        // ======= functions
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
