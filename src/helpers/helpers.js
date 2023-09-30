function formatearDinero(numero) {
  const numberStr = numero.toString();
  numberStr.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
}

export { formatearDinero };
