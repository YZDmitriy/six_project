import './Quiz.scss';
import { questions } from './questions';
import { useState } from 'react';

function Result({ correct }) {
  return (
    <div className='result'>
      <img
        src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png'
        alt='win'
      />
      {correct === 1 ? (
        <h2>
          Вы отгадали {correct} ответ из {questions.length}
        </h2>
      ) : correct <= 4 ? (
        <h2>
          Вы отгадали {correct} ответа из {questions.length}
        </h2>
      ) : (
        <h2>
          Вы отгадали {correct} ответов из {questions.length}
        </h2>
      )}
      <a href='/quiz_game'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ step, quest, onClickVariant, correct }) {
  const percent = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className='progress'>
        <div style={{ width: `${percent}%` }} className='progress__inner'></div>
      </div>
      <h1>{quest.title}</h1>
      <ul>
        {quest.variants.map((answer, index) => (
          <li onClick={() => onClickVariant(index)} key={index}>
            {answer}
          </li>
        ))}
      </ul>
      <div className='result'><h2>правильных ответов: {correct}</h2> </div>
    </>
  );
}

export const Quiz = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const quest = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === quest.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className='victory_game'>
      <div className='quiz'>
        {step !== questions.length ? (
          <Game
            step={step}
            quest={quest}
            onClickVariant={onClickVariant}
            correct={correct}
          />
        ) : (
          <Result correct={correct} />
        )}
      </div>
    </div>
  );
};
