/*
 * @package JS Import Compiler
 * @author sheiko
 * @license MIT
 * @copyright (c) Dmitry Sheiko http://www.dsheiko.com
 * @jscs standard:Jquery
 * Code style: http://docs.jquery.com/JQuery_Core_Style_Guidelines
 */
/*global module:false, global:true */
var Form = (function( global, undefined ){
    "strict mode";

        var
           /**
            * Input type custom validators
            * @namespace
            */
           Input = {
               /** @class */
               Tel: function( value ) {
                    return {
                        name : "Form_Input_Tel",
                        /**
                         * Validate input value
                         *
                         * @public
                         * @memberof Input.Tel
                         * @return {object} ValidationLogger
                         */
                        validateValue: function() {
                            var pattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;
                            if ( !pattern.test( value ) ) {
                               throw new Error("Please enter a valid tel. number +1 11 11 11");
                           }
                        }
                    };
                },
               /** @class */
               Url: function( value ) {
                   return {
                       name : "Form_Input_Url",
                       /**
                         * Validate input value
                         *
                         * @public
                         * @memberof Input.Url
                         * @return {object} ValidationLogger
                         */
                       validateValue: function() {
                           // The pattern is taken from http://stackoverflow.com/questions/2838404/javascript-regex-url-matching
                           // pattern fragments: protocol, domain name OR ip (v4) address, port and path, query string, fragment locater
                           var pattern = /^(https?:\/\/)?((([a-z\d]([a-z\d\-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[\-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=\-]*)?(\#[\-a-z\d_]*)?$/i;
                           if ( !pattern.test( value ) ) {
                               throw new Error("Please enter a valid URL");
                           }
                       }
                   };
               }
           },
           telInpInstance = new Input.Tel(""),
           urlInpInstance = new Input.Url("");

        console.log(telInpInstance.name, urlInpInstance.name); // Form_Input_Tel Form_Input_Url

}( this ));
