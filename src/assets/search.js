const input = document.querySelector('#post-search');
const rows = [...document.querySelectorAll('[data-search]')];
const status = document.querySelector('#search-status');
input.addEventListener('input', () => {
  const query = input.value.trim().toLocaleLowerCase();
  let count = 0;
  for (const row of rows) {
    row.hidden = !row.dataset.search.toLocaleLowerCase().includes(query);
    if (!row.hidden) count++;
  }
  status.textContent = query ? (count ? `找到 ${count} 篇文章` : '没有找到相关文章，试试其他关键词。') : '';
});
