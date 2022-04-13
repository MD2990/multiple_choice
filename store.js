import { proxy } from "valtio";

const state = proxy({
  seconds: 0,
  isTimeUp: false,
  started: false,
  correct: 0,
  data: [],
  currentQuestion: 0,
  isFinished: false,
  selectedValue: [],
 
});

export default state;
