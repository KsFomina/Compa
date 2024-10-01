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

namespace Compa.App.Entity.Users.Commands.AddTag
{
    public class AddTagToUserCommandHandler: IRequestHandler<AddTagToUserCommand>
    {
        private readonly IUserDbContext _userDbContext;
        private readonly ITagDbContext _tagDbContext;

        public AddTagToUserCommandHandler(IUserDbContext userDbContext, ITagDbContext tagDbContext)
        {
            _userDbContext = userDbContext;
            _tagDbContext = tagDbContext;
        }

        async public Task<Unit> Handle(AddTagToUserCommand request, CancellationToken cancellationToken)
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

            if (userEntity.tagList.Contains(tagEntity.tagId))
            {
                throw new Exception("Такой тег уже есть");
            }

            userEntity.tagList.Add(tagEntity.tagId);

            await _userDbContext.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
