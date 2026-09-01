(function(){
  const key='deepnick-blog-data';
  function add(){
    document.querySelectorAll('[data-upload="avatar"],[data-upload="cover"]').forEach(btn=>{
      if(btn.nextElementSibling?.classList.contains('clear-image-btn')) return;
      const target=btn.dataset.upload;
      const clear=document.createElement('button'); clear.type='button'; clear.className='ghost-btn clear-image-btn'; clear.textContent=target==='avatar'?'清除头像':'清除背景';
      clear.onclick=()=>{try{const d=JSON.parse(localStorage.getItem(key)||'{}');d.profile=d.profile||{};d.profile[target]='';localStorage.setItem(key,JSON.stringify(d));location.reload()}catch{}};
      btn.after(clear);
    });
  }
  new MutationObserver(add).observe(document.body,{childList:true,subtree:true}); add();
})();
