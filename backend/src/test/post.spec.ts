import User from '../model/User';
import JestCompany from './JestCompany';
/**
 * 
 *  Inicia Bateria de testes de POST
 * 
 */

/**
   * OBJ VERDADE
   */
const objUser = {
    Name: 'Lorem Ipsum',
    Email: 'lorem@ipsum.com',
    Password: 'loremIpsum'
}

const POST = new JestCompany.Post();
const USER = new JestCompany.User();

USER.save(objUser).then(result => result);

describe('Testes de Post - POST/SAVE', () => {

    test('Cadastrar Post', async () => {
        // request
        let userAuth = await USER.auth(objUser);
        console.log(userAuth)
        let result = await POST.save({ Author:  userAuth.data.id }, userAuth.data.token);
        // test
        expect(result.message).toBe("POST SAVE SUCCESS");
    });

});

describe('Testes de Usuário - USER/DELETE', () => {

    test('Excluir usuário cadastrado', async () => {
        // request
        let userAuth = await USER.auth(objUser);
        let userDelete = await USER.delete({ id: userAuth.data.id }, userAuth.data.token);
        // test
        expect(userDelete.status).toBe("SUCCESS");
    });
});