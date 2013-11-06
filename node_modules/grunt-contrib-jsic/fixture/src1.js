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
               Tel: $import("./Form/Input/Tel"),
               /** @class */
               Url: $import("./Form/Input/Url")
           },
           telInpInstance = new Input.Tel(""),
           urlInpInstance = new Input.Url("");

        console.log(telInpInstance.name, urlInpInstance.name); // Form_Input_Tel Form_Input_Url

}( this ));
