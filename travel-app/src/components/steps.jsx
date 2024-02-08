import './steps.css';

const messages = ['Learn React', 'Apply for jobs', 'Invest your new income'];

export default function Steps() {
  const step = 2;
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
        <button className="button">Previous</button>
        <button className="button">Next</button>
      </div>
    </div>
  );
}
