let links = document.querySelectorAll("nav a");

links.forEach(ativarLink);
function ativarLink(link) {
  let href = link.href;
  let url = document.location.href;
  if(href === url){
    link.style.backgroundColor = 'black';
    link.style.color = 'white';
  }
}
