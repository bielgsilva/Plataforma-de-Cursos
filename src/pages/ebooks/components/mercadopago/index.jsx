import React, { useReducer, useState } from "react";
import axios from "axios";
import { initMercadoPago } from "@mercadopago/sdk-react";
import './styles.css'

const api = axios.create({
  baseURL: "https://api.mercadopago.com",
});

api.interceptors.request.use(async (config) => {
  const token = "TEST-6363741281696628-090106-af7938b49cb73455db90977a0292f711-717124142";
  config.headers.Authorization = `Bearer ${token}`;
  console.log(config)
  return config;
});

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

initMercadoPago("TEST-6363741281696628-090106-af7938b49cb73455db90977a0292f711-717124142");

const MercadoPagoPage = ({ bookPrice, total }) => {
  const [formData, setFormdata] = useReducer(formReducer, {});
  const [responsePayment, setResponsePayment] = useState(false);
  const [linkBuyMercadoPago, setLinkBuyMercadoPago] = useState(null);
  const [statusPayment, setStatusPayment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setFormdata({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const getStatusPayment = () => {
    api.get(`v1/payments/${responsePayment.data.id}`).then((response) => {
      if (response.data.status === "approved") {
        setStatusPayment(true);
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const body = {
        transaction_amount: total,
        description: "Produto teste de desenvolvimento",
        payment_method_id: "pix",
        payer: {
          email: formData.email,
          first_name: formData.nome,
          identification: {
            type: "CPF",
            number: formData.cpf,
          },
        },
        notification_url: "https://eorpjcvcjvhqnq6.m.pipedream.net",
      };

      const response = await api.post("v1/payments", body);

      console.log(response)

      setResponsePayment(true);

      setLinkBuyMercadoPago(response.data.point_of_interaction.transaction_data.ticket_url);

      setIsLoading(false);

    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="mercadopago-container flex-center-column ">
      {isLoading && <div className="loading">Carregando...</div>}

      {!isLoading && !responsePayment && (
        <>
          <div className="form-box">
            <form onSubmit={handleSubmit}>
              <p>Pagamento com PIX</p>
              <div>
                <label>E-mail</label>
                <input onChange={handleChange} name="email" />
              </div>

              <div>
                <label>Nome</label>
                <input onChange={handleChange} name="nome" />
              </div>

              <div>
                <label>CPF</label>
                <input onChange={handleChange} name="cpf" />
              </div>


              <button type="submit">Pagar</button>

            </form>
          </div>

        </>

      )}
      {responsePayment && (
        <>
          {linkBuyMercadoPago && !statusPayment && (
            <iframe src={linkBuyMercadoPago} width="100%" height="100%"  title="link_buy" />
            )}
            <button onClick={getStatusPayment}>Verificar status pagamento</button>
          {statusPayment && <h1>Compra Aprovada</h1>}
        </>
      )}
    </div>
  );
};

export default MercadoPagoPage;
