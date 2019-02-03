import dayjs from "dayjs";

export function formatDate(d) {
  return dayjs(d).format("YYYY年 M月 D 日 ddd");
}

export const getToday = () => dayjs().format("YYYY-MM-DD");
