import { API_REGISTER_USER,REGISTER_TOKEN,API_LOGIN_USER, API_LIST_CLIENTS } from '../api/routes'

export async function registerApi(user){
  console.log(API_REGISTER_USER);
    return fetch(API_REGISTER_USER,{
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'x-access-token': REGISTER_TOKEN
      }),
      body: JSON.stringify(user),
    }).then((responseJson) => {
     return responseJson   
    }).catch((error) => {
      console.error(error);
    });
}

export async function loginApi(user){
  console.log(API_LOGIN_USER);
    return fetch(API_LOGIN_USER,{
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        'x-access-token': REGISTER_TOKEN
      }),
      body: JSON.stringify(user),
    }).then((responseJson) => {
     return responseJson
    }).catch((error) => {
      console.error(error);
    });
}

export async function listClients(userData){
    return fetch(API_LIST_CLIENTS,{
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        'x-access-token': REGISTER_TOKEN
      }),
      body: JSON.stringify(userData),
    }).then((responseJson) => {
     return responseJson.json()
    }).catch((error) => {
      console.error(error);
    });
}