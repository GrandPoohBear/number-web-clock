import { buildTokenMap } from '@grandpoohbear/number-token-map-generator';
import { useEffect, useState } from 'react';
import { Chance } from 'chance';

const tokenMap = buildTokenMap();
const chance = new Chance();

const Clock = (props: { hours: number; minutes: number }) => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    const hours12 = props.hours === 0 ? 12 : props.hours % 12;
    const facts = tokenMap[hours12 * 100 + props.minutes];
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
  }, [props.hours, props.minutes]);

  const hours12 = props.hours === 0 ? 12 : props.hours % 12;
  return (
    <div>
      <div>
        <span>
          {hours12}:{props.minutes.toString().padStart(2, '0')}
        </span>
      </div>
      <div>{fact}</div>
    </div>
  );
};

export default Clock;
