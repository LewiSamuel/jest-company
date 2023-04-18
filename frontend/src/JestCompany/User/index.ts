/**
* import structure
*/
import axios from 'axios';
import ObjectForm from '../lib/ObjectForm';
import Session from '../lib/Session';

/**
 * Import types
 */
import {iUser, 
        iUserAuth,
        iUserSave,
        iUserSearch,
        iUserDelete,
        iUserUpdate,
        iUserUpdateField,
        iUserList,
        iUserListOne} from '../model/User';

/**
 * CLASS ENTITY
 */
class User{


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
      console.error(objErro);
      return objErro;
    }
    return error.response.data;
  }


  /**
   * Tratamento de resposta padrão
   * @param success 
   * @returns 
   */
  private defaultThen(success:any){
    return success.data;
  }



  /**
   * 
   *  METHOD AUTH
   * 
   */
  public async auth(user:iUserAuth){

    const result = await axios.request({
      // method request
      method: "POST",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/user/auth",
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
  public async save(user:iUserSave){
 
    const result = await axios.request({
      // method request
      method: "POST",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/user/save",
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
  public async delete(user:iUserDelete){

    const result = await axios.request({
      // method request
      method: "DELETE",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/user/delete",
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(user), 
      // api security 
      headers: { Authorization: Session.get("token") }
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
  public async list(usersFilter:iUserList = {}){

    const result = await axios.request({
      // method request
      method: "GET",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/user/list",
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(usersFilter), 
      // api security 
      headers: { Authorization: Session.get("token") }
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
  public async listOne(userId:number){

    const result = await axios.request({
      // method request
      method: "GET",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/user/list/" + userId,
      // api security 
      headers: { Authorization: Session.get("token") }
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
  public async updateField(user:iUserUpdateField){

    const result = await axios.request({
      // method request
      method: "PATCH",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/user/update/" + user.id,
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(user), 
      // api security 
      headers: { Authorization: Session.get("token") }
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
  public async update(user:iUserUpdate){

    const result = await axios.request({
      // method request
      method: "PUT",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/user/update/",
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(user), 
      // api security 
      headers: { Authorization: Session.get("token") }
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
  public async search(user:iUserSearch){

    const result = await axios.request({
      // method request
      method: "GET",
      // url target on API
      url: process.env.NEXT_PUBLIC_API_URL + "/user/search/",
      // FormData with the content of the variable 'user'
      data: ObjectForm.create(user), 
      // api security 
      headers: { Authorization: Session.get("token") }
    })
    .then(this.defaultThen)
    .catch(this.defaultCatch);

    return result;
  }

}

export default new User();