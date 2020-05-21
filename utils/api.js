const baseUrl = 'http://localhost:3000/';

const apiHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
}

const fetchParams = (method, data = '') => {
    const body = data ? {body: JSON.stringify(data)} : {}
    return {
        method:method,
        headers: apiHeaders,
        credentials: 'same-origin',
        ...body
    }
}

const api = {
    //GET
    getCervecerias: async () => {
        const dataResponse = await fetch(baseUrl + 'cervecerias', fetchParams('GET'));
        const dataInfo = await dataResponse.json();
        return dataInfo;
    },
    //DELETE
    deleteCervecerias: async id => {
        const dataResponse = await fetch(baseUrl + 'cerveceria/' + id, fetchParams('DELETE'));
        const dataInfo = await dataResponse.json();
        return dataInfo;
    }
    //PUT

    //POST
}