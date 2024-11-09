using Compa.App.Common.Exceptions;
using Compa.App.Entity.Users.Commands.CreateUser;
using Compa.App.Interfaces;
using Compa.Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Compa.App.Entity.Users.Commands.UpdateUser
{
    public class UpdateUserCommandHandler: IRequestHandler<UpdateUserCommand>
    {
        private readonly IUserDbContext userDbContext;

        public UpdateUserCommandHandler(IUserDbContext userDbContext)
        {
            this.userDbContext = userDbContext;

        }

        async public Task<Unit> Handle(UpdateUserCommand request, CancellationToken cancellationToken)
        {

            var entity =
                await userDbContext.users.FirstOrDefaultAsync(
                    item => item.userId == request.UserId, cancellationToken);

            if (entity == null || entity.userId!=request.UserId) {
                throw new NotFoundException(nameof(User), request.UserId);
            }

            entity.name = request.Name;
            entity.description = request.Description;
            entity.surname = request.Surname;
            entity.age = request.Age;
            entity.gender = request.Gender;
            entity.tagList = request.TagList;
            entity.login = request.Login;
            entity.password = request.Password;

            await userDbContext.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
