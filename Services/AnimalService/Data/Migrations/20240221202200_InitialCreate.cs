using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace AnimalService.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Animals",
                keyColumn: "Id",
                keyValue: new Guid("c63e530e-33ee-4970-8e87-92df1274a456"));

            migrationBuilder.DeleteData(
                table: "Animals",
                keyColumn: "Id",
                keyValue: new Guid("dea7afd6-c58d-4ac5-985e-66211073cd00"));

            migrationBuilder.InsertData(
                table: "Animals",
                columns: new[] { "Id", "Age", "Breed", "Color", "CoverImageUrl", "CreatedAt", "Description", "Name", "PublicId", "Sex", "Status", "Type", "UpdatedAt", "Weight" },
                values: new object[,]
                {
                    { new Guid("1795fb19-f52a-494d-a7d6-5d14814275d0"), 5, "Bengal cat", "Beige", "https://placekitten.com/200/200", new DateTime(2024, 2, 21, 20, 22, 0, 596, DateTimeKind.Utc).AddTicks(9600), "lorem ipsum", "Buttercup", 2, "Male", 0, "Cat", new DateTime(2024, 2, 21, 20, 22, 0, 596, DateTimeKind.Utc).AddTicks(9600), 5 },
                    { new Guid("8917bcae-e908-4378-a1cf-6a39add1e541"), 2, "Double doodle", "White", "https://placedog.net/500", new DateTime(2024, 2, 21, 20, 22, 0, 596, DateTimeKind.Utc).AddTicks(9580), "lorem ipsum", "Dee Dee", 1, "Female", 0, "Dog", new DateTime(2024, 2, 21, 20, 22, 0, 596, DateTimeKind.Utc).AddTicks(9580), 10 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Animals",
                keyColumn: "Id",
                keyValue: new Guid("1795fb19-f52a-494d-a7d6-5d14814275d0"));

            migrationBuilder.DeleteData(
                table: "Animals",
                keyColumn: "Id",
                keyValue: new Guid("8917bcae-e908-4378-a1cf-6a39add1e541"));

            migrationBuilder.InsertData(
                table: "Animals",
                columns: new[] { "Id", "Age", "Breed", "Color", "CoverImageUrl", "CreatedAt", "Description", "Name", "PublicId", "Sex", "Status", "Type", "UpdatedAt", "Weight" },
                values: new object[,]
                {
                    { new Guid("c63e530e-33ee-4970-8e87-92df1274a456"), 5, "Bengal cat", "Beige", "https://placekitten.com/200/200", new DateTime(2023, 7, 19, 20, 11, 26, 94, DateTimeKind.Utc).AddTicks(1500), "lorem ipsum", "Buttercup", 2, "Male", 0, "Cat", new DateTime(2023, 7, 19, 20, 11, 26, 94, DateTimeKind.Utc).AddTicks(1500), 5 },
                    { new Guid("dea7afd6-c58d-4ac5-985e-66211073cd00"), 2, "Double doodle", "White", "https://placedog.net/500", new DateTime(2023, 7, 19, 20, 11, 26, 94, DateTimeKind.Utc).AddTicks(1480), "lorem ipsum", "Dee Dee", 1, "Female", 0, "Dog", new DateTime(2023, 7, 19, 20, 11, 26, 94, DateTimeKind.Utc).AddTicks(1480), 10 }
                });
        }
    }
}
