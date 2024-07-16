using DataAccess.Data;
using Microsoft.EntityFrameworkCore;
using Model.Dto;
using Model.Models;

namespace DataAccess
{
    public class DemoRepositorio
    {
        private readonly ApplicationDbContext _db;

        public DemoRepositorio(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<long> ApagarLivro(long id)
        {
            var livro = await _db.Livros.FirstOrDefaultAsync(x => x.Id == id);
            _db.Remove(livro);
            _db.SaveChanges();
            return livro.Id;
        }

        public async Task<Livro> BuscarLivroPorId(long id)
        {
            var livro = await _db.Livros.FirstOrDefaultAsync(x => x.Id == id);
            return livro;
        }

        public Task<List<Cliente>> BuscarTodosClientes()
        {
            return _db.Clientes.OrderBy(x => x.Nome).ToListAsync();
        }

        public async Task<List<Livro>> BuscarTodosLivros()
        {
            var listaLivros = await _db.Livros.ToListAsync();
            return listaLivros;
        }

        public async Task<Boolean> NovoEmprestimo(PostEmprestimoDto emprestimo)
        {
            var novoEmp = new Emprestimo
            {
                ClienteId = emprestimo.ClienteId,
                LivroId = emprestimo.LivroId,
                DataRetirada = emprestimo.DataRetirada,
                DataDevolucao = emprestimo.DataDevolucao
            };

            await _db.Emprestimos.AddAsync(novoEmp);

            var livro = _db.Livros.FirstOrDefault(x => x.Id == emprestimo.LivroId);
            livro.Situacao = "E";
            _db.Livros.Update(livro);

            if (_db.SaveChanges() == 1)
                return true;
            else
                return false;
        }

        public async Task<Boolean> NovoLivro(Livro livro)
        {
            await _db.Livros.AddAsync(livro);
            if (_db.SaveChanges() == 1)
            {
                return true;
            }

            return false;
        }

        public async Task<Livro> SalvarLivro(Livro livro)
        {
            var result = _db.Livros.Update(livro);
            await _db.SaveChangesAsync();
            return result.Entity;
        }
    }
}
