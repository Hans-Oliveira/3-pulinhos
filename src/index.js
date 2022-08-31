"use strict";
/* GET */
fetch('https://reqres.in/api/users').
    then((res) => {
    if (res.ok) {
        console.log('Requisição HTTP OK!');
    }
    else {
        console.log('Falha na requisição HTTP!');
    }
    return res;
}).
    then((res) => res.json()).
    then((data) => {
    const response = data.data;
    console.log(response);
    return response;
}).
    catch((error) => console.log(error));
/* POST */
fetch('https://reqres.in/api/users', {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        name: 'teste',
        job: 'teste'
    })
}).
    then((res) => {
    if (res.ok) {
        console.log('Requiasição HTTP OK!');
    }
    else {
        console.log('Falha na requisição HTTP!');
    }
    return res;
}).
    then((res) => res.json()).
    then((data) => {
    const response = data;
    console.log(response);
}).
    catch((error) => console.log(error));
/* PUT */
fetch('https://reqres.in/api/users/2', {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
    /* name: name,
    job: job */
    })
}).
    then((res) => {
    if (res.ok) {
        console.log('Requisição HTTP OK!');
    }
    else {
        console.log('Falha na requisição HTTP!');
    }
    return res;
}).
    then((res) => res.json()).
    then((data) => {
    const response = data;
    console.log(response);
}).
    catch((error) => console.log(error));
/* DELETE */
fetch('https://reqres.in/api/users/2', {
    method: "DELETE",
    headers: {
        "Content-type": "application/json"
    }
}).
    then((res) => {
    if (res.ok) {
        console.log('Requisição HTTP OK!');
    }
    else {
        console.log('Falha na requisição HTTP!');
    }
    return res;
}).
    catch((error) => console.log(error));
