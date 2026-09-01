/* 作者模式：访客默认只读，作者输入密码后才显示编辑入口。 */
(function () {
  const AUTHOR_PASSWORD = 'DeepNick@2026'; // 请在此处改成你自己的密码
  const SESSION_KEY = 'deepnick-author-unlocked';
  const isUnlocked = () => sessionStorage.getItem(SESSION_KEY) === '1';
  function refresh() { document.documentElement.classList.toggle('author-unlocked', isUnlocked()); }
  function toggle() {
    if (isUnlocked()) {
      sessionStorage.removeItem(SESSION_KEY);
      refresh();
      return;
    }
    const value = window.prompt('请输入作者密码');
    if (value === AUTHOR_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1');
      refresh();
      window.alert('作者模式已开启');
    } else if (value !== null) window.alert('密码不正确');
  }
  function ensureEntry() {
    const host = document.querySelector('.site-footer div');
    if (!host || document.getElementById('authorModeToggle')) return;
    const button = document.createElement('button');
    button.id = 'authorModeToggle';
    button.className = 'author-mode-toggle';
    button.type = 'button';
    button.title = '作者模式';
    button.textContent = '·';
    button.addEventListener('click', toggle);
    host.appendChild(button);
  }
  refresh();
  ensureEntry();
  new MutationObserver(() => { ensureEntry(); refresh(); }).observe(document.body, { childList: true, subtree: true });
})();
