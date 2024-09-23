﻿using Compa.App.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;


namespace Compa.Persistance
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddPersistance(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration["DbConnection"];
            services.AddDbContext<CompaDbContext>(opt =>
            {
                opt.UseNpgsql(connectionString);
            });

            services.AddScoped<IUserDbContext>(provider => provider.GetService<CompaDbContext>());

            return services;
        }
    }
}