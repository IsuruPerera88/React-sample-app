using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ParcelManagement.Models
{
    public class CustomerDBContext: DbContext
    {
        
            public CustomerDBContext(DbContextOptions<CustomerDBContext> options) : base(options)
            {
            }

            public DbSet<Customer> Customers { get; set; }
        
    }
}
