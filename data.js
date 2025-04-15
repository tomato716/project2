let selectedButton = null;

const data = {
  "특별/광역/자치": [
    "서울",
    "부산",
    "대구",
    "인천",
    "대구",
    "대구",
    "서울",
    "부산",
    "대구",
    "인천",
    "대구",
    "대구",
    "서울",
    "부산",
    "대구",
    "인천",
    "대구",
    "대구",
  ],
  강원도: ["강릉", "춘천", "원주"],
  경기도: ["수원", "성남", "고양"],
  경상남도: ["김해", "양산", "진주"],
  경상북도: ["포항", "경주", "안동"],
  전라남도: ["여수", "순천", "광양"],
  전라북도: ["전주", "익산", "군산"],
  충청남도: ["천안", "아산", "논산"],
  충청북도: ["청주", "충주", "제천"],
  전국: ["기타"],
};

function showData(region) {
  const destinations = data[region];

  // 버튼 배열 생성
  const buttons = destinations.map((destination) => {
    const button = document.createElement("button");
    button.innerHTML = `<h1>${destination}</h1>`;
    button.style.height = "100px";
    return button;
  });

  // 페이지네이션 적용
  initPagination(buttons);
}

document.addEventListener("DOMContentLoaded", () => {
  const regionButtons = document.querySelectorAll(".main_area_button button");

  regionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const region = btn.getAttribute("data-region");
      if (!region) return;

      if (selectedButton) {
        selectedButton.classList.remove("selected");
      }
      btn.classList.add("selected");
      selectedButton = btn;

      showData(region);
    });
  });
});
