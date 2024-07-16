namespace Model.Dto
{
    public class PostEmprestimoDto
    {
        public long ClienteId { get; set; }
        public long LivroId { get; set; }
        public DateTime DataRetirada { get; set; }
        public DateTime DataDevolucao { get; set; }
    }
}
