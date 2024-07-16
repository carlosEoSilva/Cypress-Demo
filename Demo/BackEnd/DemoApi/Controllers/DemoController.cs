using Microsoft.AspNetCore.Mvc;
using Model.Dto;
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

        [HttpGet("BuscarTodosClientes")]
        public async Task<List<Cliente>> BuscarTodosClientes()
        {
            try
            {
                return await _servico.BuscarTodosClientes();
            }
            catch (Exception ex)
            {
                throw new Exception("Não foi possível buscar os clientes", ex);
            }
        }

        [HttpGet("BuscarLivroPorId/{id}")]
        public async Task<Livro> BuscarLivroPorId(long id)
        {
            try
            {
                return await _servico.BuscarLivroPorId(id);
            }
            catch (Exception ex)
            {
                throw new Exception("Erro ao buscar livro por ID", ex);
            }
        }

        [HttpPost("SalvarLivro")]
        public async Task<ActionResult> SalvarLivro([FromBody] Livro livro)
        {
            try
            {
                var novoLivro = await _servico.SalvarLivro(livro);
                return Created(nameof(SalvarLivro), novoLivro);
            }
            catch (Exception ex)
            {
                throw new Exception("Não foi possível salvar", ex);
            }
        }

        [HttpPost("NovoLivro")]
        public async Task<Boolean> NovoLivro([FromBody] NovoLivro livro)
        {
            try
            {
                return await _servico.NovoLivro(livro);
            }
            catch (Exception ex)
            {
                throw new Exception("Não foi possível salvar o livro", ex);
            }
        }

        [HttpDelete("ApagarLivro/{id}")]
        public async Task<long> ApagarLivro(long id)
        {
            try
            {
                return await _servico.ApagarLivro(id);
            }
            catch (Exception ex)
            {
                throw new Exception("Não foi possível remover o livro", ex);
            }

        }

        #region
        [HttpPost("Emprestimo/NovoEmprestimo")]
        public async Task<Boolean> NovoEmprestimo([FromBody] PostEmprestimoDto emprestimo)
        {
            try
            {
                return await _servico.NovoEmprestimo(emprestimo);
            }
            catch (Exception ex)
            {
                throw new Exception("Não foi possível salvar novo empréstimo", ex);
            }
        }

        #endregion
    }
}
