'use strict';

app.factory('TemplateService', ['$location', '$q', '$http', function ($location, $q, $http) {

    var defaultInfo = {
            mainTitle: {text:'Titulo principal de ejemplo', active: true},
            intro: {
                items: [
                    {text: 'Puede que hayas acudido a uno de nuestros talleres o que te hayan hablado de nuestra forma de trabajar, de cómo a través de actividades con caballos y divirtiéndote descubres muchas cosas que desconocías o querías desconocer...'},
                    {text: 'Por si te apetece repetir o sabes de alguien que le puede interesar te dejamos info de la nueva convocatoria:'}
                ],
                active: true
            },
            intro1: {text: 'Puede que hayas acudido a uno de nuestros talleres o que te hayan hablado de nuestra forma de trabajar, de cómo a través de actividades con caballos y divirtiéndote descubres muchas cosas que desconocías o querías desconocer...', active: true},
            intro2: {text: 'Por si te apetece repetir o sabes de alguien que le puede interesar te dejamos info de la nueva convocatoria:', active: true},
            picture1: {url: 'http://susiluz.neocities.org/img/32.jpg', active: true},
            subtitle: {text: 'Titulo info Taller', active: true},
            column1: {
                title: '¿Qué haremos?',
                items: [
                    {text: 'Adquirir noción de nuestras cualidades y características.'}, 
                    {text: 'Conectar con nuestras emociones y dejarlas fluir.'}, 
                    {text: 'Desarrollar la unión entre el corazón y la mente.'},
                    {text: 'Transformar la visión que tenemos de nosotros y de nuestras posibilidades.'},
                    {text: 'Aprender a comunicarnos plenamente.'},
                    {text: 'Generar confianza entre nosotros y entre otros.'}
                ],
                active: true,
            },
            column2: {
                title: '¿Cómo lo haremos?',
                items: [
                    {text: 'Mediante actividades con caballos, que se realizan desde el suelo, no hace falta tener conocimientos de caballos.'}, 
                    {text: 'Los caballos nos invitan a juzgarnos a nosotros mismos, lo cual favorece la autoreflexión. El caballo es un canal para entrar en contacto con nuestro interior.'}, 
                    {text: 'El caballo nos facilita el sentir y ver, asimilar e incorporar lo vivenciado, facilita la experimentación y por tanto el aprendizaje.'}
                ],
                paragraph: {text: ''},
                active: true,
            },
            picture2: {url: 'http://susiluz.neocities.org/img/411.jpg', active: true},
            picture3: {url: 'http://susiluz.neocities.org/img/36.jpg', active: true},
            time: {text: 'de 10 a 15h', active: true},
            price: {text: '60 €', active: true},
            disclaimer: {text: 'Plazas limitadas por orden de inscripción.', active: true},
            place: {text: 'Madrid', active: true},
            contactEmail: {text: 'info@liderazgoyequilibrio.com', active: true},
            web: {text: 'www.liderazoyequilibrio.com', active: true},
            phone: {text: '679381124', active: true}
        },
        pictures = [
            {url: 'http://susiluz.neocities.org/img/32.jpg'},
            {url: 'http://susiluz.neocities.org/img/36.jpg'},
            {url: 'http://susiluz.neocities.org/img/106.jpg'},
            {url: 'http://susiluz.neocities.org/img/214.jpg'},
            {url: 'http://susiluz.neocities.org/img/411.jpg'},
            {url: 'http://susiluz.neocities.org/img/600.jpg'},
        ];

    function getDefaultInfo(){
        return defaultInfo;
    }

    function getPictures(){
        return pictures;
    }

    function readHTML() {
        var deferred = $q.defer();
                    
        var data = {
                 "getContactDetailsWS": {
                 }
             };

        var url = 'generator/views/templates/taller1.html';
        $http.get(url)
            .then(success(deferred), error(deferred));

        return deferred.promise;
    }


    function success(deferred) {
        return function(response) {
            deferred.resolve(response.data || response);
        };
    }

    function error(deferred) {
        return function(error) {
            deferred.reject(error.errorData || error);
        };
    }


    return {
        readHTML: readHTML,
        getDefaultInfo: getDefaultInfo,
        getPictures: getPictures
    };

}]);
