import { useState } from 'react';
import './steps.css';

const messages = ['Learn React', 'Apply for jobs', 'Invest your new income'];

export default function Steps() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    setStep(step - 1);
  }

  function handleNext() {
    setStep(step + 1);
  }

  return (
    <div>
      <div className="numbers">
        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
      </div>
      <p className="message">
        {' '}
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button className="button" onClick={handlePrevious}>
          Previous
        </button>
        <button className="button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
