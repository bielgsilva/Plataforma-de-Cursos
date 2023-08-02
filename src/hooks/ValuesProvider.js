import { useState } from "react";

export default function ValuesProvider() {
  //SIDEBAR
  const [activeTab, setActiveTab] = useState('home');
  const [linePosition, setLinePosition] = useState(0);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [homeSize, setHomeSize] = useState(50); 

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
    //SIDEBAR
    activeTab, setActiveTab,
    linePosition, setLinePosition,
    isSidebarCollapsed, setIsSidebarCollapsed,
    homeSize, setHomeSize,
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