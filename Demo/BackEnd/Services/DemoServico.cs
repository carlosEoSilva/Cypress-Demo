using DataAccess;
using Model.Dto;
using Model.Models;

namespace Services
{
    public class DemoServico
    {
        private readonly DemoRepositorio _repositorio;

        public DemoServico(DemoRepositorio repositorio)
        {
            _repositorio = repositorio;
        }

        public async Task<long> ApagarLivro(long id)
        {
            var livro = await _repositorio.BuscarLivroPorId(id);

            if (livro == null)
                return NotFound();

            return await _repositorio.ApagarLivro(id);
        }

        private long NotFound()
        {
            throw new NotImplementedException();
        }

        public async Task<Livro> BuscarLivroPorId(long id)
        {
            return await _repositorio.BuscarLivroPorId(id);
        }

        public async Task<List<Livro>> BuscarTodosLivros()
        {
            return await _repositorio.BuscarTodosLivros();
        }

        public async Task<Livro> SalvarLivro(Livro livro)
        {
            return await _repositorio.SalvarLivro(livro);
        }

        public async Task<Boolean> NovoLivro(NovoLivro novoLivro)
        {
            var livro = new Livro
            {
                Titulo = novoLivro.Titulo,
                Autor = novoLivro.Autor,
                Lancamento = novoLivro.Lancamento,
                Capa = novoLivro.Capa
            };

            return await _repositorio.NovoLivro(livro);
        }

        public async Task<List<Cliente>> BuscarTodosClientes()
        {
            return await _repositorio.BuscarTodosClientes();
        }

        public async Task<Boolean> NovoEmprestimo(PostEmprestimoDto emprestimo)
        {
            return await _repositorio.NovoEmprestimo(emprestimo);
        }
    }
}
