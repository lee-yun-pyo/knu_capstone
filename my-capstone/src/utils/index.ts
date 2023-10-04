export function calculateDaysAgo(inputDate: string) {
    const today = new Date();
    const inputDateObj = new Date(inputDate);

    const timeDiff = Number(today) - Number(inputDateObj);

    const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysAgo === 0) return "오늘";
    if (daysAgo === 1) return "어제";

    return `${daysAgo}일 전`;
}

export function formatDate(inputDate:string) {
    const date = new Date(inputDate);
    const year = date.getFullYear() % 100;
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
}