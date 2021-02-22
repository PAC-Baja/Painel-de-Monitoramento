  
  // Referencia da planilha
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1AGAyPfcMfp7X5CLWJGvKqYDM1ML0U-KIwu0gAPIiwkk/edit?usp=sharing';
 
  // Função que puxa dados da planilha
  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  window.addEventListener('DOMContentLoaded', init)
  // Chamar função ao carregar a pagina
