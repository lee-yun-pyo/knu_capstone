import { TIME_UNITS } from "@/constants";

export function calculateDaysAgo(inputDate: string) {
  const now = new Date().getTime();
  const inputDateTime = new Date(inputDate).getTime();
  const timeDiff = now - inputDateTime;

  const secondsAgo = Math.floor(timeDiff / TIME_UNITS.millisecond);
  const minutesAgo = Math.floor(secondsAgo / TIME_UNITS.seconds);
  const hoursAgo = Math.floor(minutesAgo / TIME_UNITS.minutes);
  const daysAgo = Math.floor(hoursAgo / TIME_UNITS.hours);
  const weeksAgo = Math.floor(daysAgo / TIME_UNITS.weeks);

  if (weeksAgo > 0) {
    return `${weeksAgo}주 전`;
  }
  if (daysAgo > 0) {
    return `${daysAgo}일 전`;
  }
  if (hoursAgo > 0) {
    return `${hoursAgo}시간 전`;
  }
  if (minutesAgo > 0) {
    return `${minutesAgo}분 전`;
  }
  if (secondsAgo > 0) {
    return `${secondsAgo}초 전`;
  } 

  return '방금 전';
}

export function formatDate(inputDate: string) {
  const date = new Date(inputDate);
  const year = date.getFullYear() % 100;
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
}

export function getTimeToNumber(inputDate: string) {
  return new Date(inputDate).getTime();
}

type Unit = 'hours' | 'minutes' | 'seconds';
export function getLeftTimeByUnit(unit: Unit, diff: number) {
  let result = -1;
  switch (unit) {
    case 'hours':
      result += Math.floor((diff % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60));
      break;
    case 'minutes':
      result += Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      break;
    case 'seconds':
      result += Math.floor((diff % (1000 * 60)) / 1000);
      break;
  }

  return convertToTwoDigits(result);
}

export function convertToTwoDigits(index: number) {
  return (index + 1).toString().padStart(2, '0');
}
