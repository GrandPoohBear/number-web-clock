import React, { useCallback } from 'react';
import { ClockModel } from './ClockModel';

type Props = {
  model: ClockModel;
};

export const ClockFeedback: React.FC<Props> = ({ model }) => {
  const openFeedbackForm = useCallback(() => {
    const debugInfo = `Current time: ${model.hoursString}:${
      model.minutesString
    } ${model.amPmString}
Current fact: ${model.currentFact}
All facts: ${JSON.stringify(model.allFacts)}`;

    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSd1uyqr0WiJEYWWM6fms08flck01NEi0JQP1S3yGf7NdBDi1Q/viewform?entry.1823470529=${encodeURIComponent(
      debugInfo
    )}`;

    window.open(formUrl, '_blank');
  }, [model]);

  return (
    <div>
      <button onClick={() => openFeedbackForm()}>Feedback?</button>
    </div>
  );
};
