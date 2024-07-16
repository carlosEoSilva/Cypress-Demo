
export class NovoLivro{
    titulo:string;
    autor:string;
    capa:string;
    lancamento:Date;
    situacao:string;

    constructor(
        titulo:string= '', 
        autor:string= '', 
        capa:string= '', 
        lancamento:Date= new Date(),
        situacao:string= '' )
    {
        this.titulo= titulo;
        this.autor= autor;
        this.capa= capa;
        this.lancamento= lancamento;
        this.situacao= situacao
    }
}