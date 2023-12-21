using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RestaurantAPI.Models
{
    public class OrderMaster
    {
        [Key]
        public long OrderMasterId { get; set; }
        [Column(TypeName = "nvarchar(75)")]
        public string OrderNumber { get; set; }
        public int CustomerId { get; set; }
        public Customer? Customer { get; set; }
        public List<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();
        [Column(TypeName = "nvarchar(15)")]
        public string PMethod { get; set; }
        [Precision(18, 2)]
        public decimal GTotal { get; set; }
        [NotMapped]
        public string? deletedOrderItemsIds { get; set; }
    }
}
