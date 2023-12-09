/**
* import structure
*/
import axios from 'axios';
import ObjectForm from '../lib/ObjectForm';
// import Session from '../lib/Session';

/**
 * Import types
 */
import {iPost, 
        iPostSave,
        iPostSearch,
        iPostDelete,
        iPostUpdate,
        iPostUpdateField,
        iPostList,
        iPostListOne} from '../model/Post';

/**
 * CLASS ENTITY
 */
class Post{

  baseUrl: string = "http://localhost:5000/v1";
    token: any;

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
   *  METHOD SAVE
   * 
   */
  public async save(post:iPostSave, token:string = ""){
 
    const result = await axios.request({
      // method request
      method: "POST",
      // url target on API
      url: this.baseUrl + "/post/save",
      // FormData with the content of the variable 'post'
      data: ObjectForm.create(post) , 
      // api security 
      headers: { Authorization: token }
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
  public async delete(post:iPostDelete, token:string = ""){

    const result = await axios.request({
      // method request
      method: "DELETE",
      // url target on API
      url: this.baseUrl + "/post/delete",
      // FormData with the content of the variable 'post'
      data: ObjectForm.create(post), 
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
  public async list(postsFilter:iPostList = {}, token:string = ""){

    const result = await axios.request({
      // method request
      method: "GET",
      // url target on API
      url: this.baseUrl + "/post/list",
      // FormData with the content of the variable 'post'
      data: ObjectForm.create(postsFilter), 
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
  public async listOne(postId:number, token:string = ""){

    const result = await axios.request({
      // method request
      method: "GET",
      // url target on API
      url: this.baseUrl + "/post/list/" + postId,
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
  public async updateField(post:iPostUpdateField, token:string = ""){

    const result = await axios.request({
      // method request
      method: "PATCH",
      // url target on API
      url: this.baseUrl + "/post/update/" + post.id,
      // FormData with the content of the variable 'post'
      data: ObjectForm.create(post), 
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
  public async update(post:iPostUpdate, token:string = ""){

    const result = await axios.request({
      // method request
      method: "PUT",
      // url target on API
      url: this.baseUrl + "/post/update/",
      // FormData with the content of the variable 'post'
      data: ObjectForm.create(post), 
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
  public async search(post:iPostSearch, token:string = ""){

    const result = await axios.request({
      // method request
      method: "GET",
      // url target on API
      url: this.baseUrl + "/post/search/",
      // FormData with the content of the variable 'post'
      data: ObjectForm.create(post), 
      // api security 
      headers: { Authorization: token }
    })
    .then(this.defaultThen)
    .catch(this.defaultCatch);

    return result;
  }

}

export default Post;