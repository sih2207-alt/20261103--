// 사전예약 폼: 필수 입력 확인 후 데모 완료 화면으로 전환
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reservationForm');
  const complete = document.getElementById('completeMessage');

  form.addEventListener('submit', event => {
    // 실제 서버로 전송하지 않고 과제 시연용으로 완료 상태만 표시
    event.preventDefault();
    if (!form.reportValidity()) return;

    form.hidden = true;
    complete.hidden = false;
    complete.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
