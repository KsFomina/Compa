﻿using Compa.Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Interfaces
{
    public interface ITagDbContext
    {
        DbSet<Tag> tags { get; set; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}