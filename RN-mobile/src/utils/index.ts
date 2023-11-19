import AsyncStorage from "@react-native-async-storage/async-storage";
import { TIME_UNITS, WON_SYMBOL } from "constants";
import * as Location from "expo-location";

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

export function getFormattedDate(inputDate: string) {
  const date = new Date(inputDate);
  const year = date.getFullYear() % 100;
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
}

export function getFormattedTime(inputDate: string) {
  const date = new Date(inputDate);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? 'PM' : 'AM';

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${period} ${formattedHours}:${formattedMinutes}`;
}

export function getFormattedDateTime(inputDate: string) {
  const date = new Date(inputDate);
  return `${getFormattedDate(String(date))} ${getFormattedTime(String(date))}`;
};

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

export async function getLocationPermission () {
  const { status } = await Location.requestForegroundPermissionsAsync();
  return status;
}

export async function getObjAsyncStorage(key: string) {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue !== null ? JSON.parse(jsonValue) : null;
}

export async function setObjAsyncStorage(key: string, obj: Object) {
  const jsonValue = JSON.stringify(obj);
  return await AsyncStorage.setItem(key, jsonValue);
}

export const isPermissionGranted = (status: string) => {
  return status === "granted";
};

export const convertToLocaleStringFromInput = (text: string) => {
  const newText = text.length === 1 ? text.trim() : text.slice(1).trim(); // ₩ 표시 및 쉼표 제거
  const result = newText.replace(/,/g, "");
  return result;
};

export const formatCurrency = (input: string) => {
  return input !== ""
    ? `${WON_SYMBOL} ${parseInt(input).toLocaleString()}`
    : "";
};

export const isExpiredDate = (inputDate: string) => {
  const targetDate = getTimeToNumber(inputDate);
  const currentDate = new Date().getTime();
  return currentDate > targetDate;
};