using Compa.App.Common.Exceptions;
using Compa.App.Entity.Users.Commands.UpdateUser;
using Compa.App.Interfaces;
using Compa.Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Users.Commands.DelUser
{
    public class DelUserCommandHandler : IRequestHandler<DelUserCommand>
    {
        private readonly IUserDbContext userDbContext;

        public DelUserCommandHandler(IUserDbContext userDbContext)
        {
            this.userDbContext = userDbContext;

        }

        public async Task<Unit> Handle(DelUserCommand request, CancellationToken cancellationToken)
        {

            var entity =
                await userDbContext.users.FirstOrDefaultAsync(
                    item => item.userId == request.UserId, cancellationToken);

            if (entity == null || entity.userId != request.UserId)
            {
                throw new NotFoundException(nameof(User), request.UserId);
            }


            userDbContext.users.Remove(entity);
            await userDbContext.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
