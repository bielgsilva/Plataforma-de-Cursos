import { useReducer, useState } from "react";
import axios from "axios";
import { initMercadoPago } from "@mercadopago/sdk-react";
import './styles.css'


const api = axios.create({
  baseURL: "https://api.mercadopago.com",
});

api.interceptors.request.use(async (config) => {
  const token = "APP_USR-6363741281696628-090106-c05c5ff02c4bf23894526edce086ec91-717124142";
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

initMercadoPago("APP_USR-6363741281696628-090106-c05c5ff02c4bf23894526edce086ec91-717124142");

const MercadoPagoPage = ({ total, name, email }) => {
  const [formData, setFormdata] = useReducer(formReducer, {
    name: name, 
    email: email, 
  });
  const [responsePayment, setResponsePayment] = useState(false);
  const [linkBuyMercadoPago, setLinkBuyMercadoPago] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setFormdata({
      name: event.target.name,
      value: event.target.value,
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
          first_name: formData.name,
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

        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <p>Pagamento com PIX</p>
            <div>
              <label>E-mail</label>
              <input onChange={handleChange} name="email" value={formData.email} />
            </div>

            <div>
              <label>Nome</label>
              <input onChange={handleChange} name="name" value={formData.name}/>
            </div>

            <div>
              <label>CPF</label>
              <input onChange={handleChange} name="cpf" />
            </div>


            <button type="submit">Pagar</button>

          </form>
        </div>



      )}
      {responsePayment && (
        <>
          {linkBuyMercadoPago && (
            <iframe src={linkBuyMercadoPago} width="100%" height="100%" title="link_buy" />
          )}

        </>
      )}
    </div>
  );
};

export default MercadoPagoPage;