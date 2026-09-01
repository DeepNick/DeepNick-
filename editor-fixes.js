document.addEventListener('click',function(e){
  if(e.target && e.target.id==='cancelEdit'){
    document.querySelector('#editorModal')?.classList.remove('open');
  }
});
