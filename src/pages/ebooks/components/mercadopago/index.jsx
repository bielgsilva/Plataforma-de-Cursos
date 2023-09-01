import './styles.css';
import { useState } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react'
import { CardPayment } from '@mercadopago/sdk-react';
import axios from 'axios';
initMercadoPago('TEST-91e18a74-6afc-4ad2-99a7-6686ff2d4c0f');



const MercadoPagoPage = ({ bookPrice, closeMercadoPago, total }) => {

  const [dadosPagamento, setDadosPagamento] = useState({})


  const initialization = {
    amount: total,
  };

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post('/create_preference', {
        unit_price: bookPrice, // Use the bookPrice prop passed from the parent component
      });

      const idPreferencia = response.data.preferenceId;
      setDadosPagamento({ idPreferencia, valor: bookPrice });
    } catch (error) {
      console.error(error);
    }
  };

  const onError = async (error) => {
    // callback chamado para todos os casos de erro do Brick
    console.log(error);
  };

  const onReady = async () => {
    /*
        Callback chamado quando o Brick estiver pronto.
        Aqui você pode ocultar loadings do seu site, por exemplo.
      */
  };



  return (

    <div className="mercadopago-container">
      <CardPayment
        initialization={initialization}
        onSubmit={onSubmit}
        onReady={onReady}
        onError={onError}

      />


    </div>

  );
};

export default MercadoPagoPage;

;
