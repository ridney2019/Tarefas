class Tarefa {

    constructor(id, titulo, data){
        this._id = id;
        this._titulo = titulo;
        this._data = data;
        Object.freeze(this);
    }

    get id(){
        return this._id;
    }

    get titulo(){
        return this._titulo;
    }

    get prazo(){
        return this._prazo;
    }

}