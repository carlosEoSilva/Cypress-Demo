export class Emprestimo{
    id:number|null= null;
    idCliente:number|null= null;
    nomeCliente:string= '';
    idLivro:number|null= null;
    livroTitulo:string= '';
    dataRetirada:Date= new Date();
    dataDevolucao:Date= new Date();
}