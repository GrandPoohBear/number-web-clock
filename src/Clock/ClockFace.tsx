import React from 'react';
import { ClockModel } from './ClockModel';
import { observer } from 'mobx-react-lite';

type Props = {
  model: ClockModel;
};

const ClockFace: React.FC<Props> = ({ model }) => {
  return (
    <div>
      <div>
        <span>{model.hoursString}</span>
        <span>:</span>
        <span>{model.minutesString}</span>
        &nbsp;
        <span>{model.amPmString}</span>
      </div>
      <div>
        <div>{model.currentFact}</div>
        <div>
          <button onClick={model.toggle24}>Switch 12/24</button>
        </div>
      </div>
    </div>
  );
};
export default observer(ClockFace);
