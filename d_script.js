const dayNames = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
// 현재 날짜 출력
let curDate = document.getElementById("curDate");
let today = new Date();
curDate.innerHTML = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${dayNames[today.getDay()]}`;
// d-day 남은 날짜 계산해서 출력해줄 텍스트
let dDay = document.getElementById("dDay");
let dDate = document.getElementById("dDate");
let btnCount = document.getElementById("btnCount");

function getOverDay() {
  today = new Date(new Date().toISOString().slice(0, 10));
  let selectedDate = new Date(dDate.value);
  let overDay = (selectedDate - today) / (1000 * 60 * 60 * 24);
  return overDay;
}
// 계산하기 클릭 이벤트 발생
btnCount.addEventListener("click", () => {
  if (dDate.value === "") {
    alert("날짜를 선택해주세요");
  } else {
    let overDay = getOverDay();
    if (overDay < 0) {
      alert(`오늘 이전 날짜는 지정할 수 없습니다.`);
    } else {
      dDay.innerHTML = `D-day 까지 ${overDay}일 남았습니다.`;
    }
  }
});
// 주제 추가하여 날짜 계산하기
let btnTopic = document.getElementById("btnTopic");
// 추가하기 클릭 이벤트 발생
btnTopic.addEventListener("click", () => {
  let inputTopic = document.getElementById("inputTopic").value.trim();

  if (dDate.value === "") {
    alert("날짜를 선택해주세요");
  } else if (inputTopic === "") {
    alert("일정을 입력하세요");
  } else {
    let overDay = getOverDay();
    if (overDay < 0) {
      alert(`오늘 이전 날짜는 지정할 수 없습니다.`);
    } else {
      let li = document.createElement("li");
      li.innerHTML = `${inputTopic} 까지 ${overDay}일 남았습니다.`;
      let ul = document.querySelector("ul");
      ul.appendChild(li);
    }
  }
  document.getElementById("inputTopic").value = "";
});
