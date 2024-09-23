using Compa.Domain;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Compa.App.Interfaces
{
    public interface IUserDbContext
    {
        DbSet<User> users { get; set; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
