                module.exports = function( value ) {
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
                };