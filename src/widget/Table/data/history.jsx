// 날짜 문자열(YYYYMMDD)을 Date 객체로 변환하는 함수
const parseDate = (dateString) => {
  const year = parseInt(dateString.substring(0, 4));
  const month = parseInt(dateString.substring(4, 6)) - 1; // 월은 0부터 시작
  const day = parseInt(dateString.substring(6, 8));
  return new Date(year, month, day);
};

// 현재 날짜를 YYYYMMDD 형식으로 반환하는 함수
const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
};

// 두 날짜 사이의 일수를 계산하는 함수
const calculateDays = (startDate, endDate) => {
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  const timeDiff = end.getTime() - start.getTime();
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 밀리초를 일수로 변환
};

const history = [
  {
    td1: "KB부동산(프리랜서)",
    td2: "부동산사업부",
    td3: "과장",
    td4: "20211122",
    td5: "current" // "current"로 표시하면 현재 날짜까지 계산
  },
  {
    td1: "NE능률",
    td2: "웹개발",
    td3: "대리",
    td4: "20200907",
    td5: "20211030" 
  },
  {
    td1: "하나투어",
    td2: "채널개발부",
    td3: "대리",
    td4: "20180801",
    td5: "20200620"
  },
  {
    td1: "러쉬코리아",
    td2: "디지털서비스본부",
    td3: "주임",
    td4: "20170522",
    td5: "20180730" 
  },
  {
    td1: "천재교육",
    td2: "밀크T 초등서비스기획",
    td3: "사원",
    td4: "20141117",
    td5: "20170520" 
  },
];

// 총 근무일수를 실시간으로 계산하는 함수
export const getTotalWorkYears = () => {
  const currentDate = getCurrentDate();
  
  const totalDays = history.reduce((total, item) => {
    // td5가 "current"이면 현재 날짜를 사용, 아니면 기존 종료일 사용
    const endDate = item.td5 === "current" ? currentDate : item.td5;
    return total + calculateDays(item.td4, endDate);
  }, 0);
  
  // 총 근무년수 계산 (1년 = 365일로 계산)
  return Math.round((totalDays / 365) * 10) / 10; // 소수점 첫째자리까지
};

export default history