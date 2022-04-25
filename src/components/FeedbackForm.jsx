import { useState, useContext, useEffect } from 'react';
import Button from './shared/Button';
import Card from './shared/Card';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const [inputText, setInputText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState('');

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  // زمان لود شدن صفحه نمایش داده میشود اگر آرایه خالی باشد
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setInputText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const hanedlTextChanged = (e) => {
    if (inputText === '' || inputText === null) {
      setMessage(null);
      setBtnDisabled(true);
    } else if (inputText !== '' && inputText.trim().length < 9) {
      setBtnDisabled(true);
      setMessage('تعداد کاراکتر وارد شده نباید کمتر از 10 باشد!!!');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setInputText(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim().length > 9) {
      const newFeedback = {
        text: inputText,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
        setInputText('');
        setBtnDisabled(true);
      } else {
        addFeedback(newFeedback);
        setInputText('');
        setBtnDisabled(true);
      }
    }
  };

  return (
    <Card>
      <form onSubmit={handelSubmit}>
        <h2>چه امتیازی به خدمات ما می دهید؟</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            value={inputText}
            onChange={hanedlTextChanged}
            type="text"
            placeholder="نظر خود را بیان کنید"
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            ثبت نظر
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
