using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RestaurantAPI.Models
{
    public class FoodItem
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string FoodItemName { get; set; }
        [Required]
        [Precision(18, 2)]
        public decimal FoodItemPrice { get; set; } = 0;
    }
}
