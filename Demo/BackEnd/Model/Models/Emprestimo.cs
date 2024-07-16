using System.ComponentModel.DataAnnotations.Schema;

namespace Model.Models
{
    public class Emprestimo
    {
        public long Id { get; set; }
        public DateTime DataRetirada { get; set; }
        public DateTime? DataDevolucao { get; set; }

        [ForeignKey("Cliente")]
        public long ClienteId { get; set; }
        public Cliente Cliente { get; set; }

        [ForeignKey("Livro")]
        public long LivroId { get; set; }
        public Livro Livro { get; set; }
    }
}
