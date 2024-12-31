export default function isNewYearsPeriod() {
  const today = new Date();
  const month = today.getMonth(); // 0-11
  const day = today.getDate();
  return (month === 11 && day === 31) || (month === 0 && day === 1);
}
