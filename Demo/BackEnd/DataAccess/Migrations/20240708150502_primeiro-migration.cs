using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    public partial class primeiromigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cliente",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Telefone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Endereco = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cliente", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Emprestimo",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdCliente = table.Column<long>(type: "bigint", nullable: false),
                    NomeCliente = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IdLivro = table.Column<long>(type: "bigint", nullable: false),
                    LivroTitulo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DataRetirada = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DataDevolucao = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Emprestimo", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Livros",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Titulo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Autor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Capa = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Lancamento = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Livros", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Cliente",
                columns: new[] { "Id", "Endereco", "Nome", "Telefone" },
                values: new object[,]
                {
                    { 1L, "Rua Sete de Setembro, 428", "Roberto Marinho", "(16)99987-891" },
                    { 2L, "Rua Tiradentes, 861", "Juliana Oliveira", "(16)99357-5891" },
                    { 3L, "Rua São Sebastião, 8176", "Paulo Roberto", "(16)99927-9136" },
                    { 4L, "Rua Bela Vista, 9948", "Ana Maria", "(16)99741-9481" }
                });

            migrationBuilder.InsertData(
                table: "Emprestimo",
                columns: new[] { "Id", "DataDevolucao", "DataRetirada", "IdCliente", "IdLivro", "LivroTitulo", "NomeCliente" },
                values: new object[,]
                {
                    { 1L, null, new DateTime(2024, 9, 29, 0, 0, 0, 0, DateTimeKind.Unspecified), 1L, 4L, "Verity", "Roberto Marinho" },
                    { 2L, new DateTime(2023, 11, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2023, 10, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), 1L, 6L, "Divergente", "Roberto Marinho" },
                    { 3L, null, new DateTime(2024, 9, 29, 0, 0, 0, 0, DateTimeKind.Unspecified), 4L, 2L, "O nevoeiro", "Ana Maria" },
                    { 4L, new DateTime(2023, 1, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2022, 11, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), 3L, 3L, "Layla", "Paulo Roberto" },
                    { 5L, null, new DateTime(2020, 3, 19, 0, 0, 0, 0, DateTimeKind.Unspecified), 2L, 5L, "O cão dos Baskervilles", "Juliana Oliveira" }
                });

            migrationBuilder.InsertData(
                table: "Livros",
                columns: new[] { "Id", "Autor", "Capa", "Lancamento", "Titulo" },
                values: new object[,]
                {
                    { 1L, "J. K. Rowling", "", new DateTime(2000, 3, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), "Harry Potter e a pedra filosofal" },
                    { 2L, "Stephen King", "", new DateTime(2000, 3, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), "O nevoeiro" },
                    { 3L, "Colleen Hover", "", new DateTime(2000, 3, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), "Layla" },
                    { 4L, "Collen Hover", "", new DateTime(2000, 3, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), "Verity" },
                    { 5L, "Arthur Conan Doyle", "", new DateTime(2000, 3, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), "O cão dos Baskervilles" },
                    { 6L, "Patricia Cornwell", "", new DateTime(2000, 3, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), "Divergente" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cliente");

            migrationBuilder.DropTable(
                name: "Emprestimo");

            migrationBuilder.DropTable(
                name: "Livros");
        }
    }
}
