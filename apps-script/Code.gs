/**
 * Дашборд продаж билетов ПБК ЦСКА.
 * Читает лист «Матчи по дням» от имени того, кто открыл страницу,
 * поэтому доступ к данным определяется настройками доступа таблицы.
 */
const SHEET_ID = '19TMgBLN4_so28Crf9QbJs3zGsBG6tiBYTlCA0bDsV14';
const SHEET_NAME = 'Матчи по дням';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Продажи ЦСКА по дням до матча')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getValues() {
  const sh = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const cols = Math.max(sh.getLastColumn(), 1);
  return sh.getRange(1, 1, 45, cols).getDisplayValues();
}
