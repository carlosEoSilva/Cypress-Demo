namespace Model.Models
{
    public class Emprestimo
    {
        public long Id { get; set; }
        public long IdCliente { get; set; }
        public string NomeCliente { get; set; }
        public long IdLivro { get; set; }
        public string LivroTitulo { get; set; }
        public DateTime DataRetirada { get; set; }
        public DateTime? DataDevolucao { get; set; }
    }
}
