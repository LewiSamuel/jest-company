import Head from 'next/head';
import { useEffect } from 'react';
import JestCompany from '../JestCompany';

export default function Home() {

  /**
   *  Importa entidade Usuário do Framework Project
   */
  const User = JestCompany.User;

  useEffect(() => {

    /**
     *  Ao carregar página
     *  chama metodo AUTH da entidade Usuário
     * Debuga resultado da API no console
     */
    
    User
    .auth({Email: 'teste@gmail.com', Password: '123123'})
    .then(console.log);

    User
    .save({
            Name:"TESTE USER",
            Email:"teste@gmail.com",
            Password:"123123"})
    .then(console.log)


  },[])

  return (
    <>
      <Head>
        <title>undefined</title>
      </Head>
      <h1>Make a promise here</h1>
    </>
  );
}