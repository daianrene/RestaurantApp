using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RestaurantAPI.Models
{
    public class OrderMaster
    {
        [Key]
        public long Id { get; set; }
        [Column(TypeName = "nvarchar(75)")]
        public string OrderNumberId { get; set; }
        public Customer Customer { get; set; }
        public List<OrderDetail> Details { get; set; } = new List<OrderDetail>();
        [Column(TypeName = "nvarchar(15)")]
        public string PayMethod { get; set; }
        [Precision(18, 2)]
        public decimal Total { get; set; }
    }
}
