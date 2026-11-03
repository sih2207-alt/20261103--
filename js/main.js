// LIGHT GARDEN 메인 페이지: 모바일 메뉴와 팝업 제어
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  // 모바일 메뉴 열기/닫기
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const opened = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(opened));
      menuButton.textContent = opened ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = '☰';
    }));
  }

  const modal = document.getElementById('infoModal');
  const title = document.getElementById('modalTitle');
  const content = document.getElementById('modalContent');

  // 가상 행사 전체 시간표 데이터
  const schedule = `
    <div class="modal-subhead">DAILY OPENING</div>
    <div class="modal-row"><time>18:00</time><b>LIGHT GARDEN OPEN</b><small>입장 및 자유 관람</small></div>
    <div class="modal-row"><time>19:00</time><b>STARDUST PARADE</b><small>중앙 산책로 · 별빛 퍼레이드</small></div>
    <div class="modal-row"><time>20:00</time><b>MOONLIGHT LIVE</b><small>별빛 무대 · 어쿠스틱 공연</small></div>
    <div class="modal-row"><time>21:00</time><b>WISHES IN THE SKY</b><small>메인 광장 · 빛과 음악 피날레</small></div>
    <div class="modal-row"><time>22:00</time><b>LAST ENTRY / CLOSE</b><small>관람 종료 및 퇴장 안내</small></div>`;

  // 전시, 공연, 체험 프로그램 데이터
  const programs = `
    <div class="modal-subhead">LIGHT EXHIBITION</div>
    <div class="modal-row"><b>STAR CASTLE</b><small>수천 개의 빛으로 완성된 환상의 성</small><small>상시</small></div>
    <div class="modal-row"><b>GLOWING FOREST</b><small>빛나는 나무와 오로라 숲</small><small>상시</small></div>
    <div class="modal-row"><b>CRYSTAL RIVER</b><small>물결처럼 흐르는 빛의 산책로</small><small>상시</small></div>
    <div class="modal-subhead">NIGHT PERFORMANCE</div>
    <div class="modal-row"><b>STARDUST PARADE</b><small>별빛 퍼레이드</small><small>19:00</small></div>
    <div class="modal-row"><b>MOONLIGHT LIVE</b><small>어쿠스틱 라이브 공연</small><small>20:00</small></div>
    <div class="modal-row"><b>WISHES IN THE SKY</b><small>빛과 음악의 피날레 쇼</small><small>21:00</small></div>
    <div class="modal-subhead">PHOTO ZONE</div>
    <div class="modal-row"><b>MOON GATE</b><small>달빛 아치 포토존</small><small>상시</small></div>
    <div class="modal-row"><b>STAR PORTAL</b><small>별빛 포털 포토존</small><small>상시</small></div>
    <div class="modal-row"><b>GLASS LAKE</b><small>유리빛 호수 포토존</small><small>상시</small></div>`;

  // 버튼 종류에 맞는 내용을 팝업에 표시
  document.querySelectorAll('[data-modal]').forEach(button => {
    button.addEventListener('click', () => {
      if (button.dataset.modal === 'schedule') {
        title.textContent = 'FULL SCHEDULE';
        content.innerHTML = schedule;
      } else {
        title.textContent = 'ALL PROGRAMS';
        content.innerHTML = programs;
      }
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  // 닫기 버튼, 배경 클릭, ESC 키 지원
  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
});
