import { Token } from '@grandpoohbear/number-token-map-generator/dist/models';
import { buildTokenMap } from '@grandpoohbear/number-token-map-generator';
import { makeAutoObservable, reaction } from 'mobx';
import dayjs from 'dayjs';
import { Chance } from 'chance';

const chance = new Chance();

export class ClockModel {
  is24 = false;
  currentTime = dayjs();
  allFacts: Token[] = [];
  currentFactIndex = 0;
  tokenMap = buildTokenMap();

  constructor() {
    this.updateToCurrentTime();
    this.updateAllFacts();

    makeAutoObservable(this);

    reaction(
      () => `${this.hoursString}${this.minutesString}${this.amPmString}`,
      () => {
        this.updateAllFacts();
      }
    );
  }

  get hoursString() {
    return this.is24
      ? this.currentTime.format('H')
      : this.currentTime.format('h');
  }

  get minutesString() {
    return this.currentTime.format('mm');
  }

  get amPmString() {
    return this.is24 ? this.currentTime.format('A') : '';
  }

  toggle24 = () => {
    this.is24 = !this.is24;
  };

  updateToTime = (time: dayjs.Dayjs) => {
    this.currentTime = time;
  };

  updateToCurrentTime = () => {
    this.updateToTime(dayjs());
  };

  updateAllFacts = () => {
    const timeString = `${this.hoursString}${this.minutesString}`;
    this.allFacts = this.tokenMap[Number(timeString)];
  };

  get currentFact() {
    return this.allFacts.length > 0
      ? this.allFacts[this.currentFactIndex].description
      : '';
  }

  pickNewFact() {
    this.currentFactIndex = chance.weighted(
      [...Array(this.allFacts.length).keys()],
      this.allFacts.map((f) => f.relevance)
    );
  }
}
