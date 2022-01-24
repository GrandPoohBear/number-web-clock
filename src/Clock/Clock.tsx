import { useEffect, useState } from 'react';

import React from 'react';
import { ClockModel } from './ClockModel';
import ClockFace from './ClockFace';
import { ClockFeedback } from './ClockFeedback';
import { observer } from 'mobx-react-lite';

const Clock = () => {
  const [clockModel] = useState(new ClockModel());

  useEffect(() => {
    const interval = setInterval(() => {
      clockModel.updateToCurrentTime();
    }, 100);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <ClockFace model={clockModel} />

      <ClockFeedback model={clockModel} />
    </div>
  );
};

export default observer(Clock);
