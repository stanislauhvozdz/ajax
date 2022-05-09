let form = document.querySelector('#form');

console.log('yes');

let requestXML = new XMLHttpRequest();
requestXML.open( 'POST', ajaxurl.ajaxurl, true );

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  let formData = new FormData( form );

  requestXML.send(formData);

  form.reset();

  console.log('Clear');
})