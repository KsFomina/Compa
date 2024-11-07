using Compa.App.Common.Exceptions;
using Compa.App.Interfaces;
using Compa.Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Users.Commands.SetNewUserAvatar
{
    public class SetNewUserAvatarCommandHandler: IRequestHandler<SetNewUserAvatarCommand>
    {
        private readonly IUserDbContext _userDbContext;

        public SetNewUserAvatarCommandHandler(IUserDbContext userDbContext)
        {
            _userDbContext = userDbContext;
        }

        async public Task<Unit> Handle(SetNewUserAvatarCommand request, CancellationToken cancellationToken)
        {
            var userEnt = await _userDbContext.users
                .FirstOrDefaultAsync(ent => ent.userId == request.userId, cancellationToken);
            if(userEnt == null) 
            {
                throw new NotFoundException(nameof(User), request.userId);
            }

            userEnt.avatar = request.avatar;
            await _userDbContext.SaveChangesAsync(cancellationToken);
            return Unit.Value;  
        }
    }
}
