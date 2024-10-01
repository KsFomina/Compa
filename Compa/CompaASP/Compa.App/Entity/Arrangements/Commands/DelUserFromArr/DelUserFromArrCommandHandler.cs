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

namespace Compa.App.Entity.Arrangements.Commands.DelUser
{
    public class DelUserFromArrCommandHandler : IRequestHandler<DelUserFromArrCommand>
    {
        private readonly IArrangementDbContext _arrangementDbContext;
        private readonly IUserDbContext _userDbContext;

        public DelUserFromArrCommandHandler(IArrangementDbContext userDbContext, IUserDbContext tagDbContext)
        {
            _arrangementDbContext = userDbContext;
            _userDbContext = tagDbContext;
        }

        async public Task<Unit> Handle(DelUserFromArrCommand request, CancellationToken cancellationToken)
        {
            var arrEntity = await _arrangementDbContext.arrangements
                .FirstOrDefaultAsync(item => item.arrangementId == request.ArrangementId, cancellationToken);

            if (arrEntity == null || arrEntity.arrangementId != request.ArrangementId)
            {
                throw new NotFoundException(nameof(Arrangement), request.ArrangementId);
            }

            var userEntity = await _userDbContext.users
                .FirstOrDefaultAsync(ent => ent.userId == request.UserId, cancellationToken);

            if (userEntity == null || userEntity.userId != request.UserId)
            {
                throw new NotFoundException(nameof(User), request.UserId);
            }

            if (!arrEntity.membersIds.Contains(userEntity.userId))
            {
                throw new Exception("Такого пользователя нет");
            }

            arrEntity.membersIds.Remove(userEntity.userId);

            await _arrangementDbContext.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
