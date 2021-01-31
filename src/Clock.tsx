import { buildTokenMap } from '@grandpoohbear/number-token-map-generator';
import { useEffect, useState } from 'react';
import { Chance } from 'chance';
import dayjs from 'dayjs';
import { Token } from '@grandpoohbear/number-token-map-generator/dist/models';

const tokenMap = buildTokenMap();
const chance = new Chance();

const Clock = () => {
  const [is24, set24] = useState(false);
  const [minutesString, setMinuteString] = useState('');
  const [hoursString, setHourString] = useState('');
  const [amPmString, setAmPmString] = useState('');
  const [allFacts, setAllFacts] = useState<Token[]>([]);
  const [fact, setFact] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();

      if (is24) {
        setHourString(now.format('H'));
        setMinuteString(now.format('mm'));
        setAmPmString('');
      } else {
        setHourString(now.format('h'));
        setMinuteString(now.format('mm'));
        setAmPmString(now.format('A'));
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [is24]);

  useEffect(() => {
    const timeString = `${hoursString}${minutesString}`;
    const facts = tokenMap[Number(timeString)];
    console.log(`Facts for timeString: ${timeString}`, facts);
    setAllFacts(facts);

    if (facts.length === 0) {
      setFact('');
      return;
    }

    setFact(
      chance.weighted(
        facts.map((f) => f.description),
        facts.map((f) => f.relevance)
      )
    );
  }, [hoursString, minutesString, is24]);

  const openFeedbackForm = () => {
    const debugInfo = `Current time: ${hoursString}:${minutesString} ${amPmString}
Current fact: ${fact}
All facts: ${JSON.stringify(allFacts)}`;

    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSd1uyqr0WiJEYWWM6fms08flck01NEi0JQP1S3yGf7NdBDi1Q/viewform?entry.1823470529=${encodeURIComponent(
      debugInfo
    )}`;

    window.open(formUrl, '_blank');
  };

  return (
    <div>
      <div>
        <span>{hoursString}</span>
        <span>:</span>
        <span>{minutesString}</span>
        &nbsp;
        <span>{amPmString}</span>
      </div>
      <div>{fact}</div>
      <div>
        <button onClick={() => set24(!is24)}>Switch 12/24</button>
      </div>
      <div>
        <button onClick={() => openFeedbackForm()}>Feedback?</button>
      </div>
    </div>
  );
};

export default Clock;
