import { FaQuestions } from 'react-icons/fa';

function AboutIconLink() {
  return (
    <div className="about-link">
      <a href="./about">
        <FaQuestions size={30} />
      </a>
    </div>
  );
}

export default AboutIconLink;
