/**
* import structure
*/
import axios from 'axios';
import ObjectForm from '../lib/ObjectForm';
// import Session from '../lib/Session';

/**
 * Import types
 */
import {iReturn } from '../model/User';
import { iUser } from "../model/iUser";

/**
 * CLASS ENTITY
 */
class User{
  baseUrl: string = process.env.API_URL || "http://localhost:5000";
  token: string;
  

  /**
   * Tratamento de erros padrão
   * @param error 
   * @returns 
   */
  private defaultCatch(error:any){
    let err = error.toJSON();
    if(err.message === "Network Error"){
      let objErro = {
        message: "Falha ao conectar com a API.",
        status: "ERROR",
        data: {}
      };
      return objErro;
    }
    return error.response.data;
  }


  /**
   * Tratamento de resposta padrão
   * @param success 
   * @returns 
   */
  private defaultThen(success:any):Promise<iReturn>{
    return success.data;
  }



  /**
   * 
   *  METHOD AUTH
   * 
   */
  public async auth(user:iUser, token: string = ""):Promise<iReturn>{

    const result = await axios.request({
      // method request
      method: "POST",
      // url target on API
      url: this.baseUrl + "/v1/user/auth",
      // FormData with the content of the variable 'category'
      data: ObjectForm.create(user)
    })
    .then(this.defaultThen)
    .catch(this.defaultCatch);

    return result;
  }

  /**
   * 
   *  METHOD SAVE
   * 
   */
  public async save(user:iUser, token: string = ""):Promise<iReturn>{
 
    const result = await axios.request({
      // method request
      method: "POST",
      // url target on API
      url: this.baseUrl + "/v1/user/save",
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(user) 
    })
    .then(this.defaultThen)
    .catch(this.defaultCatch);

    return result;
  }



  /**
   * 
   *  METHOD DELETE
   * 
   */
  public async delete(user:iUser, token: string = ""):Promise<iReturn>{

    const result = await axios.request({
      // method request
      method: "DELETE",
      // url target on API
      url: this.baseUrl + "/v1/user/delete",
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(user), 
      // api security 
      headers: { Authorization: token }
    })
    .then(this.defaultThen)
    .catch(this.defaultCatch);

    return result;
  }




  /**
   * 
   *  METHOD LIST
   * 
   */
  public async list(usersFilter:iUser = {}, token: string = ""):Promise<iReturn>{

    const result = await axios.request({
      // method request
      method: "GET",
      // url target on API
      url: this.baseUrl + "/v1/user/list",
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(usersFilter), 
      // api security 
      headers: { Authorization: token }
    })
    .then(this.defaultThen)
    .catch(this.defaultCatch);

    return result;
  }



  /**
   * 
   *  METHOD LIST ONE
   * 
   */
  public async listOne(userId:number, token: string = ""):Promise<iReturn>{
    const result = await axios.request({
      // method request
      method: "GET",
      // url target on API
      url: this.baseUrl + "/v1/user/list/" + userId,
      // api security 
      headers: { Authorization: token }
    })
    .then(this.defaultThen)
    .catch(this.defaultCatch);

    return result;
  }


  
  /**
   * 
   *  METHOD UPDATE ONE
   * 
   */
  public async updateField(user:iUser, token: string = ""):Promise<iReturn>{

    const result = await axios.request({
      // method request
      method: "PATCH",
      // url target on API
      url: this.baseUrl + "/v1/user/update/" + user.id,
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(user), 
      // api security 
      headers: { Authorization: token }
    })
    .then(this.defaultThen)
    .catch(this.defaultCatch);

    return result;
  }



  /**
   * 
   *  METHOD UPDATE
   * 
   */
  public async update(user:iUser, token: string = ""):Promise<iReturn>{

    const result = await axios.request({
      // method request
      method: "PUT",
      // url target on API
      url: this.baseUrl + "/v1/user/update/",
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(user), 
      // api security 
      headers: { Authorization: token }
    })
    .then(this.defaultThen)
    .catch(this.defaultCatch);

    return result;
  }


  
  /**
   * 
   *  METHOD SEARCH
   * 
   */
  public async search(user:iUser, token: string = ""):Promise<iReturn>{

    const result = await axios.request({
      // method request
      method: "GET",
      // url target on API
      url: this.baseUrl + "/v1/user/search/",
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(user), 
      // api security 
      headers: { Authorization: token }
    })
    .then(this.defaultThen)
    .catch(this.defaultCatch);

    return result;
  }

}

export default User;