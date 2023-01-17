import { DateTime } from './luxon.js';

export const addDate = () => {
  const p = document.getElementById('date');
  const dt = DateTime.now();
  const pText = document.createTextNode(dt.toLocaleString(DateTime.DATETIME_MED));
  p.appendChild(pText);
};

export { addDate as default };