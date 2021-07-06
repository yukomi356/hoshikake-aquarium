'use strict';

{
  const open = document.getElementById('open');
  const open2 = document.getElementById('open2');
  const overlay = document.querySelector('.overlay');
  const close =document.getElementById('close');

  open.addEventListener('click', ()=> {
    overlay.classList.add('show');
  });

  close.addEventListener('click', ()=> {
    overlay.classList.remove('show');
  });

  open2.addEventListener('click', ()=> {
    overlay.classList.add('show');
  });
}