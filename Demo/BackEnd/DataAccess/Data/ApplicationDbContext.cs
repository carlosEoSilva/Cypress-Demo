using Microsoft.EntityFrameworkCore;
using Model.Models;

namespace DataAccess.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Livro> Livros { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var listaLivros = new Livro[]
            {
                new Livro{ Id= 1, Titulo= "Harry Potter e a pedra filosofal", Autor= "J. K. Rowling", Capa= "",  Lancamento= new DateTime(2000, 3, 14) },
                new Livro{ Id= 2, Titulo= "O nevoeiro", Autor= "Stephen King", Capa= "",   Lancamento= new DateTime(2000, 3, 14) },
                new Livro{ Id= 3, Titulo= "Layla", Autor= "Colleen Hover", Capa= "", Lancamento= new DateTime(2000, 3, 14) },
                new Livro{ Id= 4, Titulo= "Verity", Autor= "Collen Hover", Capa= "", Lancamento= new DateTime(2000, 3, 14) },
                new Livro{ Id= 5, Titulo= "O cão dos Baskervilles", Autor= "Arthur Conan Doyle", Capa= "", Lancamento= new DateTime(2000, 3, 14) },
                new Livro{ Id= 6, Titulo= "Divergente", Autor= "Patricia Cornwell", Capa= "", Lancamento= new DateTime(2000, 3, 14) }
            };

            var listaClientes = new Cliente[]
            {
                new Cliente{ Id= 1, Nome= "Roberto Marinho", Telefone= "(16)99987-891", Endereco= "Rua Sete de Setembro, 428" },
                new Cliente{ Id= 2, Nome= "Juliana Oliveira", Telefone= "(16)99357-5891", Endereco= "Rua Tiradentes, 861" },
                new Cliente{ Id= 3, Nome= "Paulo Roberto", Telefone= "(16)99927-9136", Endereco= "Rua São Sebastião, 8176" },
                new Cliente{ Id= 4, Nome= "Ana Maria", Telefone= "(16)99741-9481", Endereco= "Rua Bela Vista, 9948" }
            };

            var listaEmprestimos = new Emprestimo[]
            {
                new Emprestimo{ Id= 1, IdCliente= 1, NomeCliente=  "Roberto Marinho", LivroTitulo= "Verity", IdLivro= 4, DataRetirada= new DateTime(2024, 09, 29)},
                new Emprestimo{ Id= 2, IdCliente= 1, NomeCliente=  "Roberto Marinho", LivroTitulo= "Divergente", IdLivro= 6, DataRetirada= new DateTime(2023, 10, 18), DataDevolucao= new DateTime(2023, 11, 18)},
                new Emprestimo{ Id= 3, IdCliente= 4, NomeCliente=  "Ana Maria", LivroTitulo= "O nevoeiro", IdLivro= 2, DataRetirada= new DateTime(2024, 09, 29)},
                new Emprestimo{ Id= 4, IdCliente= 3, NomeCliente=  "Paulo Roberto", LivroTitulo= "Layla", IdLivro= 3, DataRetirada= new DateTime(2022, 11, 30), DataDevolucao= new DateTime(2023, 01, 22)},
                new Emprestimo{ Id= 5, IdCliente= 2, NomeCliente=  "Juliana Oliveira", LivroTitulo= "O cão dos Baskervilles", IdLivro= 5, DataRetirada= new DateTime(2020, 03, 19)}
            };

            modelBuilder.Entity<Livro>().HasData(listaLivros);
            modelBuilder.Entity<Cliente>().HasData(listaClientes);
            modelBuilder.Entity<Emprestimo>().HasData(listaEmprestimos);
        }
    }
}
