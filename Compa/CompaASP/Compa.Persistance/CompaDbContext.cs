using Compa.App.Interfaces;
using Compa.Domain;
using Compa.Persistance.EntityTypeConfiguration;
using Microsoft.EntityFrameworkCore;


namespace Compa.Persistance
{
    public class CompaDbContext : DbContext,
        IUserDbContext
    {
        public DbSet<User> users { get; set; }

        public CompaDbContext(DbContextOptions<CompaDbContext> options):base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            base.OnModelCreating(modelBuilder);
        }
    }
}
