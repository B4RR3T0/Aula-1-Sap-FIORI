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
                let ImageList = {
                    Imagens : [
                        {
                            url:"http://cdn.shopify.com/s/files/1/0265/3893/4330/products/coca-cola-110591_1200x1200.jpg?v=1590528264",
                            thumbnail:"https://rapidapi.usearch.com/api/thumbnail/get?value=158279291306047240",
                            title:"Coca-cola White Lily Diner",

                            provider: {
                                name:"shopify"
                            }
                        },

                        {
                            url:"https://www.gannett-cdn.com/-mm-/ed84c5d0ca0776913e9791ec049444481fc35aa6/c=0-418-960-960/local/-/media/2017/07/26/USATODAY/USATODAY/636366760977375151-Coca-Cola-Zero-Sugar.JPG?width=960&height=542&fit=crop&format=pjpg&auto=webp",
                           //height:542
                            //width:960
                            thumbnail:"https://rapidapi.usearch.com/api/thumbnail/get?value=3530638777052800043",
                            //thumbnailHeight:271
                            //thumbnailWidth:480
                            title:"Coke Zero out",

                            provider : {
                                name : "gannett-cdn"
                            }
                        },

                        {

                            url:"https://img.yumpu.com/51789413/1/117x151/pepsi-revised-story.jpg?quality=85",
                            //height:151,
                            //width:117,
                            thumbnail:"https://rapidapi.usearch.com/api/thumbnail/get?value=580148335407608069",
                            //thumbnailHeight:151,
                            //thumbnailWidth:117,
                            title:"Pepsi Magazines",

                            provider : {
                                name: "yumpu"
                            }
                        }

                    ] 

                };

                // Criação do modelo para exibir dados na tela
                let ImageModel = new JSONModel(ImageList);
                let view = this.getView();
                view.setModel(ImageModel, "ModeloImagem");


            },

            onPressBuscar: function(){
                //Instancia objeto input na variavel
                let inputBusca = this.byId("inpBusca");
                //Coleta o valor digitado no input
                let query = inputBusca.getValue();
                //exibe na tela
                alert(query);
            }
        });
    });
