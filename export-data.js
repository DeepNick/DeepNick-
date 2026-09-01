/* 将浏览器当前编辑内容导出为可部署的 data.js。 */
(function () {
  function exportCurrentData() {
    let current = {};
    try { current = JSON.parse(localStorage.getItem('deepnick-blog-data') || '{}'); } catch (e) {}
    const version = String(Date.now());
    const source = '/* DeepNick 博客数据文件：由浏览器当前内容导出 */\nwindow.DEEPNICK_DATA_VERSION = ' + JSON.stringify(version) + ';\nwindow.DEEPNICK_DATA = ' + JSON.stringify(current, null, 2) + ';\n';
    const blob = new Blob([source], { type: 'application/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.js';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  window.exportDataFile = exportCurrentData;
  const button = document.getElementById('exportDataBtn');
  if (button) button.addEventListener('click', exportCurrentData);
})();
