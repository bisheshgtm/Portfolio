var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0px";
}
function closemenu(){
    sidemenu.style.right="-150px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzYQIgQr8eKnPtM-HlV_q_hbhmGXVQ9AwS3lNGaMfBzwM_ZUVyn4BbrjbXm4fWuqZznvQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Sent Successfully. Thank You!"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

