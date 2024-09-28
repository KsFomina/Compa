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

namespace Compa.App.Entity.Tags.Commands.DelTag
{
    public class DelTagCommandHandler: IRequestHandler<DelTagCommand>
    {
        private readonly ITagDbContext _tagDbContext;

        public DelTagCommandHandler(ITagDbContext tagDbContext)
        {
            _tagDbContext = tagDbContext;
        }

        public async Task<Unit> Handle(DelTagCommand request, CancellationToken cancellationToken)
        {
            var entity =
                await _tagDbContext.tags.FirstOrDefaultAsync(
                item => item.tagId == request.TagId, cancellationToken);

            if (entity == null || entity.tagId != request.TagId)
            {
                throw new NotFoundException(nameof(Tag), request.TagId);
            }

            _tagDbContext.tags.Remove(entity);
            await _tagDbContext.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
