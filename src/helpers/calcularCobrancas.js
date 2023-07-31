const calcularCobrancas = (clientesData) => {
    const valoresCobrancas = clientesData.map((cliente) => cliente.valorCobranca);
    const totalCobrancas = valoresCobrancas.reduce(
      (acumulador, valor) => acumulador + valor,
      0
    );
  
    const valorFormatado = totalCobrancas.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  
    return valorFormatado;
  };
  
  export default calcularCobrancas;
  