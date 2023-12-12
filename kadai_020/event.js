// HTMLから必要な部分の取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタン押すと文字が切り替わる
btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
});