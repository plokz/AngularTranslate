var app = angular.module('myApp', ['pascalprecht.translate']);
 
app.config(['$translateProvider', function ($translateProvider) {
  // add translation tables
  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('es', translationsES);
  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');
}]);
 
app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {
 
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}]);

var translationsEN = {
  HEADLINE: 'Hello Welcome!',
  PARAGRAPH: 'Friend!',
  PASSED_AS_TEXT: 'Hey there! I\'m passed as text value!',
  PASSED_AS_ATTRIBUTE: 'I\'m passed as attribute value, cool ha?',
  PASSED_AS_INTERPOLATION: 'I\'m interpolated!',
  VARIABLE_REPLACEMENT: 'Hi {{name}}',
  MISSING_TRANSLATION: 'Oops! I have not been translated into spanish...',
  BUTTON_LANG_ES: 'spanish',
  BUTTON_LANG_EN: 'english'
};
 
var translationsES= {
  HEADLINE: 'Hola Bienvenido!',
  PARAGRAPH: 'Amig@!',
  PASSED_AS_TEXT: 'Hey! Soy un ejemplo de pasar texto!',
  PASSED_AS_ATTRIBUTE: 'Soy un ejemplo de pasar atributos, cool ha?',
  PASSED_AS_INTERPOLATION: 'Soy un ejemplo de interpolacion!',
  VARIABLE_REPLACEMENT: 'Hola {{name}}',
  // MISSING_TRANSLATION is ... missing :)
  BUTTON_LANG_ES: 'espanol',
  BUTTON_LANG_EN: 'ingles'
};
 