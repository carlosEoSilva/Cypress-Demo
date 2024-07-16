export class Cliente{
    id:number;
    nome:string;
    telefone:string;
    endereco:string;


    constructor(id:number= 0, nome:string= '', telefone:string= '', endereco:string= ''){
        this.id= id;
        this.nome= nome;
        this.telefone= telefone;
        this.endereco= endereco;
    }
}