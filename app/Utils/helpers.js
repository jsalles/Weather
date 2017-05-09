var daysMap = {
  "0":"Domingo",
  "1":"Segunda-Feira",
  "2":"Terça-Feira",
  "3":"Quarta-Feira",
  "4":"Quinta-Feira",
  "5":"Sexta-Feira",
  "6":"Sábado"
};

var monthsMap = {
  "0":"Janeiro",
  "1":"Fevereiro",
  "2":"Março",
  "3":"Abril",
  "4":"Maio",
  "5":"Junho",
  "6":"Julho",
  "7":"Agosto",
  "8":"Setembro",
  "9":"Outubro",
  "10":"Novembro",
  "11":"Dezembro"
};

function getDate (unixTimestmap) {
  var date = new Date(unixTimestmap * 1000);
  var weekDay = daysMap[date.getDay()]
  var month = monthsMap[date.getMonth()];
  var day = date.getDate();
  return weekDay + ', ' + day + ' de ' + month;
}

module.exports = {
  getDate: getDate
}