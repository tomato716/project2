let currentPage = 0;

const ITEMS_PER_PAGE = 15;

function paginateButtons(buttons, page) {
  const chooseContainer = document.querySelector(".choose");
  chooseContainer.innerHTML = "";

  const start = page * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageButtons = buttons.slice(start, end);

  pageButtons.forEach((btn) => chooseContainer.appendChild(btn));

  currentPage = page;
}

// 이전/이후 버튼에 동작을 부여하는 함수
function updateNavButtons(buttons) {
  const backNext = document.querySelector(".back_next");
  if (!backNext) return;

  const [backBtn, nextBtn] = backNext.querySelectorAll("button");
  const totalPages = Math.ceil(buttons.length / ITEMS_PER_PAGE);

  backBtn.onclick = () => {
    if (currentPage > 0) {
      paginateButtons(buttons, currentPage - 1);
      updateNavButtons(buttons);
    }
  };

  nextBtn.onclick = () => {
    if (currentPage < totalPages - 1) {
      paginateButtons(buttons, currentPage + 1);
      updateNavButtons(buttons);
    }
  };

  backBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage >= totalPages - 1;
}

// 초기 실행: 버튼 배열을 받아서 pagination 적용
function initPagination(buttons) {
  paginateButtons(buttons, 0);
  updateNavButtons(buttons);
}
