using Compa.App.Interfaces;
using Compa.Domain;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Tags.Commands.CreateTag
{
    public class CreateTagCommandHandler: IRequestHandler<CreateTagCommand, Guid>
    {
       private readonly ITagDbContext _tagDbContext;

        public CreateTagCommandHandler(ITagDbContext tagDbContext) { _tagDbContext = tagDbContext; }

        public async Task<Guid> Handle(CreateTagCommand request, CancellationToken cancellationToken)
        {
            var tag = new Tag
            {
                tagId = Guid.NewGuid(),
                name = request.TagName,
            };
            await _tagDbContext.tags.AddAsync(tag, cancellationToken);
            await _tagDbContext.SaveChangesAsync(cancellationToken);

            return tag.tagId;
        }
    }
}
