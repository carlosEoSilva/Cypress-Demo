
export class Livro{
    id:number|null;
    titulo:string;
    autor:string;
    capa:string;
    lancamento:Date;
    situacao:string;

    constructor(
        id:number|null= null, 
        titulo:string= '', 
        autor:string= '', 
        capa:string= '', 
        lancamento:Date= new Date(),
        situacao:string='' )
    {
        this.id= id;
        this.titulo= titulo;
        this.autor= autor;
        this.capa= capa;
        this.lancamento= lancamento;
        this.situacao= situacao;
    }
}