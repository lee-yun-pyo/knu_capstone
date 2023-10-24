import { TIME_UNITS } from "constants";

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