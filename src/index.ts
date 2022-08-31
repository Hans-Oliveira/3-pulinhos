    /* GET */

fetch('https://reqres.in/api/users').
then((res) => {
    if (res.ok) {
        console.log('Requisição HTTP OK!')
    }else {
        console.log('Falha na requisição HTTP!')
    }
    return res
}).
then((res) => res.json()).
then((data) => const response = data.data). //data
catch((error) => console.log(error))

    /* POST */

fetch('https://reqres.in/api/users', {
    method: "POST",
    headers: {
        
    },
})
