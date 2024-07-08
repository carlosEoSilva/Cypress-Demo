using DataAccess;
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

        public async Task<List<Livro>> BuscarTodosLivros()
        {
            return await _repositorio.BuscarTodosLivros();
        }
    }
}
