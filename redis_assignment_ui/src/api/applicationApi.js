import axios from 'axios';

const apiHost = 'http://127.0.0.1'
const apiPort = '8080'

const applicationApi = axios.create({
    baseURL: `${apiHost}:${apiPort}`
})

export async function signIn(requestBody) {
    const response = await applicationApi.post(`/login`, requestBody);

    if(response.status === 202){
        return response.data;
    }
    else{
        throw new Error("Error trying to login");
    }
}

export async function search(searchInput){
    const response = await applicationApi.get(`/search?recordName=${searchInput}`);

    if(response.status === 200){
        return response.data;
    }
    else{
        throw new Error("Error trying to search");
    }
}

export async function getAverageQueries(){
    const response = await applicationApi.get(`/average-queries`);

    if(response.status === 200){
        return response.data;
    }
    else{
        throw new Error("Error trying to get average queries");
    }
}

export async function getUserRecords(username){
    const response = await applicationApi.get(`/records/${username}`);

    if(response.status === 200){
        return response.data;
    }
    else{
        throw new Error("Error trying to get average queries");
    }
}

export async function addRecord(requestBody) {
    const response = await applicationApi.post(`/record`, requestBody);

    if(response.status === 201 || response.status === 409){
        let result = response.data;
        result.duplicate = response.status === 409;
        return response.data;
    }
    else{
        throw new Error("Error trying to login");
    }
}

export async function getRecordsPerUser(){
    const response = await applicationApi.get(`entries-per-user`);

    if(response.status === 200){
        return response.data;
    }
    else{
        throw new Error("Error trying to get average queries");
    }
}