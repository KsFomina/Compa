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

namespace Compa.App.Entity.Tags.Commands.UpdateTag
{
    public class UpdateTagCommandHandler: IRequestHandler<UpdateTagCommand>
    {
        private readonly ITagDbContext _tagDbContext;
        public UpdateTagCommandHandler(ITagDbContext tagDbContext)
        {
            _tagDbContext = tagDbContext;
        }

        public async Task<Unit> Handle(UpdateTagCommand request, CancellationToken cancellationToken)
        {
            var entity =
                await _tagDbContext.tags.FirstOrDefaultAsync(
                    item => item.tagId == request.TagId, cancellationToken);

            if (entity == null || entity.tagId != request.TagId)
            {
                throw new NotFoundException(nameof(Tag), request.TagId);
            }

            entity.name = request.TagName;

            await _tagDbContext.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
