function convertHMS(value) {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
  if (hours < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  return hours + ':' + minutes; // Return is HH : MM : SS
}

const bookingHours = (horarioInicial, horarioFinal) => {
  const horaInicial = horarioInicial.split(':');
  const horaFinal = horarioFinal.split(':');
  const segundosInicial = (+horaInicial[0]) * 60 * 60 + (+horaInicial[1]) * 60;
  const segundosFinal = (+horaFinal[0]) * 60 * 60 + (+horaFinal[1]) * 60;
  const qtdHoras = (segundosFinal - segundosInicial) / 3600;

  const segundosHoras = [];

  for (let i = 0; i <= qtdHoras; i++) {
    let horaSegundos = segundosInicial + (3600 * i);
    segundosHoras.push(horaSegundos);
  }

  return segundosHoras.map(segundo => convertHMS(segundo));
};

export default bookingHours