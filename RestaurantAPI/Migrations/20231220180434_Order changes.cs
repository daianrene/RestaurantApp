using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RestaurantAPI.Migrations
{
    /// <inheritdoc />
    public partial class Orderchanges : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Total",
                table: "OrderMasters",
                newName: "GTotal");

            migrationBuilder.RenameColumn(
                name: "PayMethod",
                table: "OrderMasters",
                newName: "PMethod");

            migrationBuilder.RenameColumn(
                name: "OrderId",
                table: "OrderMasters",
                newName: "OrderNumber");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "OrderMasters",
                newName: "OrderMasterId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PMethod",
                table: "OrderMasters",
                newName: "PayMethod");

            migrationBuilder.RenameColumn(
                name: "OrderNumber",
                table: "OrderMasters",
                newName: "OrderId");

            migrationBuilder.RenameColumn(
                name: "GTotal",
                table: "OrderMasters",
                newName: "Total");

            migrationBuilder.RenameColumn(
                name: "OrderMasterId",
                table: "OrderMasters",
                newName: "Id");
        }
    }
}
