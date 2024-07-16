namespace Model.Models
{
    public class Livro
    {
        public long Id { get; set; }
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public string Capa { get; set; }
        public string Situacao { get; set; }
        public DateTime Lancamento { get; set; }
    }
}
