using Microsoft.AspNetCore.Mvc;
using Model.Models;
using Services;

namespace DemoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DemoController : ControllerBase
    {
        private readonly DemoServico _servico;

        public DemoController(DemoServico servico)
        {
            _servico = servico;
        }

        [HttpGet("BuscarTodosLivros")]
        public async Task<List<Livro>> BuscarTodosLivros()
        {
            try
            {
                var listaLivros = await _servico.BuscarTodosLivros();
                return listaLivros;

            }
            catch (Exception ex)
            {
                throw new Exception("Erro ao buscar os livros", ex);
            }

        }
    }
}
