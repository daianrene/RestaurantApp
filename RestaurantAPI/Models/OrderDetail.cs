using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace RestaurantAPI.Models
{
    public class OrderDetail
    {
        [Key]
        public long Id { get; set; }
        public OrderMaster OrderMaster { get; set; }
        public FoodItem FoodItem { get; set; }
        [Precision(18, 2)]
        public decimal FoodItemPrice { get; set; }
        public int FoodItemQuantity { get; set; }

    }
}
