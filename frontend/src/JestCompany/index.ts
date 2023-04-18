import User from "./User";
import Post from "./Post";
import Session from "./lib/Session";

class JestCompany {
    /**
     *   
     *     FRAMEWORK JestCompany ROOT
     *     Ponto de acesso central para todas as entidades do Projeto
     *     e seus métodos integrados a API.
     * 
     *     CERTIFIQUE-SE DE ESTAR APONTANDO CORRETAMENTE
     *      PARA A API, CONFIGURANDO NO ARQUIVO .ENV
     *      A VÁRIAVEL NEXT_PUBLIC_API_URL = http://localhost:5000/v1
     * 
     *      Todos os métodos retornam uma promisse, sendo assim
     *      para obter o resultado deve-se usar  async / await
     *      ou o método .then()
     * 
     */

   
   public User = User;
   public Post = Post;
   public Session = Session;

}

export default new JestCompany;