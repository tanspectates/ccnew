(() => {
  const manifesto=document.querySelector('.manifesto');
  if(manifesto)manifesto.innerHTML='<p class="eyebrow">BUILT FOR THE ROTATION</p><h2>SHOES THAT<br><em>SHOW UP.</em></h2><div class="manifesto-row"><p>For the early train, the late plan, and the picture you nearly didn’t post.</p><a href="story.html" class="text-link">READ THE LORE <b>↗</b></a></div>';
  document.querySelectorAll('.tag').forEach(tag=>{if(tag.textContent.includes('CLEAN SLATE'))tag.textContent='TOO CLEAN'});
  const kicker=document.querySelector('#heroKicker');if(kicker){const clean=()=>{if(kicker.textContent.includes('CLEAN SLATE'))kicker.textContent='THE LATE PLAN'};clean();new MutationObserver(clean).observe(kicker,{childList:true,characterData:true,subtree:true})}
  const track=document.querySelector('.review-track');
  if(track){track.scrollTo=()=>{};track.innerHTML+=track.innerHTML;let hold=false;track.addEventListener('mouseenter',()=>hold=true);track.addEventListener('mouseleave',()=>hold=false);const drift=()=>{if(!hold){track.scrollLeft+=.28;if(track.scrollLeft>=track.scrollWidth/2)track.scrollLeft=0}requestAnimationFrame(drift)};drift()}
})();
