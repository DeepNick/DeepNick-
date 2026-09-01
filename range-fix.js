(function(){
  const letters='ABCDEFGHIJKL'.split('');
  const labels=['仅 A 题',...letters.slice(1).map(x=>`A ~ ${x}`)];
  function enhance(){const s=document.querySelector('#editRange');if(!s||s.dataset.enhanced)return;const current=s.value;if(!s.options.length||s.options.length<12){s.innerHTML=letters.map((x,i)=>`<option value="${x}">${labels[i]}</option>`).join('');if(letters.includes(current))s.value=current}s.dataset.enhanced='1';}
  new MutationObserver(enhance).observe(document.body,{subtree:true,childList:true});enhance();
  if(typeof window.openCompetitionEditor==='function'){
    const original=window.openCompetitionEditor;
    window.openCompetitionEditor=function(){const result=original.apply(this,arguments);enhance();return result};
  }
})();
