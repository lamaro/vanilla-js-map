//const baseUrl = 'http://localhost:3000/';
const baseUrl = 'https://cervecerias-api-rest.now.sh/';

const apiHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    mode: "no-cors"
}

const fetchParams = (method, data = '') => {
    const body = data ? { body: JSON.stringify(data) } : {}
    console.log(body)
    return {
        method: method,
        headers: apiHeaders,
        //credentials: 'same-origin',
        ...body
    }
}

const api = {
    //Funciones CRUD
    //CREATE (To be continued...)
    createCervecerias: async formData => {
        const dataResponse = await fetch(baseUrl + 'cerveceria/' + formData.id, fetchParams('POST', formData));
        const dataInfo = await dataResponse.json();
        return dataInfo;
    },
    //READ
    getCervecerias: async () => {
        const dataResponse = await fetch(baseUrl + 'cervecerias', fetchParams('GET'));
        const dataInfo = await dataResponse.json();
        return dataInfo;
    },
    //UPDATE
    updateCervecerias: async formData => {
        const dataResponse = await fetch(baseUrl + 'cerveceria/' + formData.id, fetchParams('PUT', formData));
        const dataInfo = await dataResponse.json();
        return dataInfo;
    },
    //DELETE
    deleteCervecerias: async id => {
        const dataResponse = await fetch(baseUrl + 'cerveceria/' + id, fetchParams('DELETE'));
        const dataInfo = await dataResponse.json();
        return dataInfo;
    },
}