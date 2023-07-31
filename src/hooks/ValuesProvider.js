import { useState } from "react";

export default function ValuesProvider() {
  // PAGE - LOGIN - FORMlogin
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setMensagemErro] = useState('');

  //HEADER
  const [user, setUser] = useState('');


  const [cobrancasPagas, setCobrancasPagas] = useState([]);
  const [cobrancasPrevistas, setCobrancasPrevistas] = useState([]);
  const [cobrancasVencidas, setCobrancasVencidas] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return ({
    // PAGE - LOGIN - FORMlogin
    email, setEmail, password, setPassword, error, setMensagemErro,
    //ROUTES.JS
    isAuthenticated, setIsAuthenticated,
    //CLIENTE
    //HEADER
    user, setUser,
    //CHARGES
    cobrancasPagas, setCobrancasPagas,
    cobrancasPrevistas, setCobrancasPrevistas,
    cobrancasVencidas, setCobrancasVencidas,
    clientes, setClientes
  });
}