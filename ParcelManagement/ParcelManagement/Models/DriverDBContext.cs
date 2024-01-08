using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ParcelManagement.Models
{
    public class DriverDBContext : DbContext
    {
        
            public DriverDBContext(DbContextOptions<DriverDBContext> options) : base(options)
            {
            }

            public DbSet<Driver> Drivers { get; set; }
        
    }
}
