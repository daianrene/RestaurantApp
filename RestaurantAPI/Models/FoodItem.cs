﻿using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RestaurantAPI.Models
{
    public class FoodItem
    {
        [Key]
        public int FoodItemId { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string FoodItemName { get; set; }
        [Precision(18, 2)]
        public decimal FoodItemPrice { get; set; } = 0;
    }
}
