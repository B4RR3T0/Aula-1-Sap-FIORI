sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("image013.controller.Inicial", {
            onInit: function () {
                this.produto = {
                    nome : "manteiga",
                    marca :  "aviaçao",
                     peso : 145,
                     uom : 'G',
                     estoque : 12,
                     adicionarEstoque : function(){
                        this.estoque++;
                        return this.estoque + ' Unidade em estoque';
                    }
                
                }
            },
            onPressBuscar: function(){
                let inputBusca = this.byId ("inpBusca");
                let query = inputBusca.getValue();
                let(query);

            }
        });
    });
