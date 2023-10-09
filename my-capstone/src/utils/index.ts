export function calculateDaysAgo(inputDate: string) {
    const today = new Date().getTime();
    const inputDateObj = new Date(inputDate).getTime();

    const timeDiff = today - inputDateObj;

    const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysAgo === 0) return "오늘";
    if (daysAgo === 1) return "어제";

    return `${daysAgo}일 전`;
}

export function formatDate(inputDate: string) {
    const date = new Date(inputDate);
    const year = date.getFullYear() % 100;
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
}

export function getLeftTime(inputDate: string) {
    const LEFT_TIME = 30;
    const targetTime = new Date(inputDate).getTime() + LEFT_TIME * 60 * 1000;
    
    return targetTime;
}

export function convertToTwoDigits(index: number) {
    return (index + 1).toString().padStart(2, '0');
}
  