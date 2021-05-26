export default function validateURL(value) {
  let error;
  if (!value) {
    error = 'Campo Requerido';
  } else if (/(https?:\/\/.*\.(?:png|jpg|jpeg|gif|png|svg))/i.test(value)) {
    error = alert("URL de Imagem Inválido!")
  }
  return error;
}