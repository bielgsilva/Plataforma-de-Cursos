import './styles.css';
import { initMercadoPago } from '@mercadopago/sdk-react'
import { CardPayment } from '@mercadopago/sdk-react';
import axios from 'axios';
import { useState, useEffect } from 'react'; // Importe o useState e useEffect

initMercadoPago('TEST-91e18a74-6afc-4ad2-99a7-6686ff2d4c0f');

const MercadoPagoPage = ({ bookPrice, closeMercadoPago, total }) => {
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento

  const initialization = {
    amount: total,
  };

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post('/create_preference', {
        unit_price: bookPrice,
      });

      const idPreferencia = response.data.preferenceId;
      console.log(idPreferencia);
    } catch (error) {
      console.error(error);
    }
  };

  const onError = async (error) => {
    console.log(error);
  };

  const onReady = async () => {
    setIsLoading(false); // Quando o CardPayment estiver pronto, remova o loading
  };

  useEffect(() => {
    // Use useEffect para controlar o carregamento inicial
    setIsLoading(true); // Define o loading para verdadeiro quando o componente é montado
  }, []);

  return (
    <div className="mercadopago-container flex-center">
      {isLoading && <div className="loading">Carregando...</div>} {/* Div de loading */}
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
