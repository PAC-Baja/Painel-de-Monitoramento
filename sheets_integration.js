  
  // Referencia da planilha
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1AGAyPfcMfp7X5CLWJGvKqYDM1ML0U-KIwu0gAPIiwkk/edit?usp=sharing';
  //var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1u83fH2VDUy2f0_eT8qsLRoTIoefQfh4O3M0SQouQ5uk/edit?usp=sharing';

 
  // Função que puxa dados da planilha
  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  window.addEventListener('DOMContentLoaded', init)
  // Chamar função ao carregar a pagina
