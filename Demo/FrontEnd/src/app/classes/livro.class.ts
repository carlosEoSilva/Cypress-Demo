
export class Livro{
    id:number;
    titulo:string;
    autor:string;
    capa:string;
    lancamento:Date;

    constructor(
        id:number= 0, 
        titulo:string= '', 
        autor:string= '', 
        capa:string= '', 
        lancamento:Date= new Date() )
    {
        this.id= id;
        this.titulo= titulo;
        this.autor= autor;
        this.capa= capa;
        this.lancamento= lancamento;
    }
}