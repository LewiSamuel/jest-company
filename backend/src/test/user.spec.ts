import JestCompany from './JestCompany';
/**
 * 
 *  Inicia Bateria de testes de USUÁRIO
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

const USER = new JestCompany.User();

describe('Testes de Usuário - USER/SAVE', () => {



  test('Não permitir cadastrar sem Nome', async () => {
    let _objUser = structuredClone(objUser);
    // remove name
    _objUser.Name = null;
    // request
    let result = await USER.save(_objUser);
    // test
    expect(result.message).toBe("Name is required");
  });


  test('Não permitir cadastrar Nome com menos de 6 de caracteres', async () => {
    let _objUser = structuredClone(objUser);
    // remove name
    _objUser.Name = "T";
    // request
    let result = await USER.save(_objUser);
    // test
    expect(result.message).toBe("Name size cannot be less than 6");
  });


  test('Não permitir cadastrar Nome com mais de 255 de caracteres', async () => {
    let _objUser = structuredClone(objUser);
    // remove name
    _objUser.Name = "loremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloreml";
    // request
    let result = await USER.save(_objUser);
    // test
    expect(result.message).toBe("Name size cannot be greater than 255");
  });


  test('Não permitir cadastrar sem Email', async () => {
    let _objUser = structuredClone(objUser);
    // remove name
    _objUser.Email = null;
    // request
    let result = await USER.save(_objUser);
    // test
    expect(result.message).toBe("Email is required");
  });


  test('Não permitir cadastrar Email com menos de 6 de caracteres', async () => {
    let _objUser = structuredClone(objUser);
    // remove Email
    _objUser.Email = "T";
    // request
    let result = await USER.save(_objUser);
    // test
    expect(result.status).toBe("ERROR");
  });


  test('Não permitir cadastrar Email com mais de 255 de caracteres', async () => {
    let _objUser = structuredClone(objUser);
    // remove Email
    _objUser.Email = "loremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloreml";
    // request
    let result = await USER.save(_objUser);
    // test
    expect(result.status).toBe("ERROR");
  });


  test('Não permitir cadastrar sem Password', async () => {
    let _objUser = structuredClone(objUser);
    // remove name
    _objUser.Password = null;
    // request
    let result = await USER.save(_objUser);
    // test
    expect(result.status).toBe("ERROR");
  });



  test('Não permitir cadastrar Password com menos de 6 de caracteres', async () => {
    let _objUser = structuredClone(objUser);
    // remove Password
    _objUser.Password = "T";
    // request
    let result = await USER.save(_objUser);
    // test
    expect(result.status).toBe("ERROR");
  });


  test('Não permitir cadastrar Password com mais de 255 de caracteres', async () => {
    let _objUser = structuredClone(objUser);
    // remove Password
    _objUser.Password = "loremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloreml";
    // request
    let result = await USER.save(_objUser);
    // test
    expect(result.status).toBe("ERROR");
  });


  test('Permitir cadastrar usuário Válido', async () => {
    // request
    let result = await USER.save(objUser);
    // test
    expect(result.status).toBe("SUCCESS");
  });

  test('Não permitir cadastrar usuário duplicado', async () => {
    // request
    let result = await USER.save(objUser);
    // test
    expect(result.status).toBe("ERROR");
  });

});

describe('Testes de Usuário - USER/LIST', () => {

  test('Listar Usuário cadastrado na pesquisa geral', async () => {
    let _objUser = structuredClone(objUser);
    _objUser.Password = null;
    let userAuth = await USER.auth(objUser);
    let userList = await USER.list(_objUser, userAuth.data.token);
    expect(userList.data.lenght).not.toBe(0)
  });

});


describe('Testes de Usuário - USER/LISTONE', () => {

  test('Listar Usuário cadastrado na pesquisa especifica', async () => {
    let userAuth = await USER.auth(objUser);
    let userList = await USER.listOne(userAuth.data.id, userAuth.data.token);
    expect(userList.data).not.toBe(null)
  });

});

describe('Testes de Usuário - USER/DELETE', () => {

  test('Não permitir excluir usuário sem id', async () => {
    // request
    let userAuth = await USER.auth(objUser);
    let userdeletado = await USER.delete({ id: null }, userAuth.data.token);
    // test
    expect(userdeletado.status).toBe("ERROR");
  });

  test('Excluir usuário cadastrado', async () => {
    // request
    let userAuth = await USER.auth(objUser);
    let userdeletado = await USER.delete({ id: userAuth.data.id }, userAuth.data.token);
    // test
    expect(userdeletado.status).toBe("SUCCESS");
  });

});