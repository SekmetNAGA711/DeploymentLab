const btn = document.querySelector('button')

const clickHandler = () => {
    axios.get('/api/ice').then((res) => alert(res.data)).catch((err)=> alert("sorry something is not working"))
  }


btn.addEventListener('click', clickHandler)