using Compa.App.Interfaces;
using Compa.Domain;
using Compa.Persistance.EntityTypeConfiguration;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.Persistance
{
    public class CompaDbContext : DbContext, IUserDbContext
    {
        public DbSet<User> users { get; set; }

        public CompaDbContext(DbContextOptions<DbContext> options):base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            base.OnModelCreating(modelBuilder);
        }
    }
}
