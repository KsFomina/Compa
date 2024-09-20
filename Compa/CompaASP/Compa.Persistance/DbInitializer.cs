using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.Persistance
{
    public class DbInitializer
    {
        public static void Initialize(CompaDbContext context)
        {
            context.Database.EnsureCreated();
        }
    }
}
