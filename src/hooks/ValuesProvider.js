import { useState } from "react";

export default function ValuesProvider() {
  //LOGIN
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);


  //SIDEBAR
  const [activeTab, setActiveTab] = useState('home');
  const [linePosition, setLinePosition] = useState(0);

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
    //login
    showLogin, setShowLogin,
    showSignUp, setShowSignUp,
    //SIDEBAR
    activeTab, setActiveTab,
    linePosition, setLinePosition,
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