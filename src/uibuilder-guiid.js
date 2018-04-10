
module.exports = function(RED) {
    "use strict";

    class UIBuilder_Id
    {
        constructor(_config){
            RED.nodes.createNode(this, _config);
            var self = this;
            this.config = _config;

            // attach the "on" event
            this.on('input', function(_msg) { self.input(_msg) });
        }


        input(_msg) {

            var node = this;

            try
            {
                // add the id to the message object
                _msg.guiid = this.config.guiid

                // passthrough message with the now added id
                node.send(_msg)

            }
            catch(_e)
            {
                node.error(_e.toString());
            }
        }


    }
    RED.nodes.registerType("uibuilder-guiiid", UIBuilder_Id);
}