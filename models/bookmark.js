const Model = require('./model');
module.exports =
    class Bookmark extends Model {
        constructor(name, url, category) {
            super();
            this.Name = name !== undefined ? name : "";
            this.Url = url !== undefined ? url : "";
            this.Category = category !== undefined ? category : "";

            this.setKey("Url");
            this.addValidator('Name', 'string');
            this.addValidator('Url', 'url');
            this.addValidator('Category', 'string');
        }
    }