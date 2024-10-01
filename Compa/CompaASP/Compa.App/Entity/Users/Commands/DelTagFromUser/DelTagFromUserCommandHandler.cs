using Compa.App.Common.Exceptions;
using Compa.App.Entity.Users.Commands.AddTag;
using Compa.App.Interfaces;
using Compa.Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Users.Commands.DelTag
{
    public class DelTagFromUserCommandHandler : IRequestHandler<DelTagFromUserCommand>
    {
        private readonly IUserDbContext _userDbContext;
        private readonly ITagDbContext _tagDbContext;

        public DelTagFromUserCommandHandler(IUserDbContext userDbContext, ITagDbContext tagDbContext)
        {
            _userDbContext = userDbContext;
            _tagDbContext = tagDbContext;
        }

        async public Task<Unit> Handle(DelTagFromUserCommand request, CancellationToken cancellationToken)
        {
            var userEntity = await _userDbContext.users
                .FirstOrDefaultAsync(item => item.userId == request.UserId, cancellationToken);

            if (userEntity == null || userEntity.userId != request.UserId)
            {
                throw new NotFoundException(nameof(User), request.UserId);
            }

            var tagEntity = await _tagDbContext.tags
                .FirstOrDefaultAsync(ent => ent.tagId == request.TagId, cancellationToken);

            if (tagEntity == null || tagEntity.tagId != request.TagId)
            {
                throw new NotFoundException(nameof(Tag), request.TagId);
            }

            if (!userEntity.tagList.Contains(tagEntity.tagId))
            {
                throw new Exception("Такого тега нет");
            }

            userEntity.tagList.Remove(tagEntity.tagId);

            await _userDbContext.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
