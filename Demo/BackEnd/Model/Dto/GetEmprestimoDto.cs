namespace Model.Dto
{
    public class GetEmprestimoDto
    {
        public long EmprestimoId { get; set; }
        public long ClienteId { get; set; }
        public string ClienteNome { get; set; }
        public long LivroId { get; set; }
        public string LivroTitulo { get; set; }
        public DateTime DataRetirada { get; set; }
        public DateTime? DataDevolucao { get; set; }
    }
}
