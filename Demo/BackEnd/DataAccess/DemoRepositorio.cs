using DataAccess.Data;
using Microsoft.EntityFrameworkCore;
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
        public async Task<List<Livro>> BuscarTodosLivros()
        {
            var listaLivros = await _db.Livros.ToListAsync();
            return listaLivros;
        }
    }
}
