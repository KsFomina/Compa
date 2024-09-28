using AutoMapper;
using Compa.App.Common.Exceptions;
using Compa.App.Entity.Users.Queries.GetUserDetails;
using Compa.App.Interfaces;
using Compa.Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Tags.Queries.GetTagDetails
{
    public class GetTagDetailsQueryHandler: IRequestHandler<GetTagDetailsQuery, GetTagDetailsVM>
    {
        private readonly ITagDbContext _tagDbContext;
        private readonly IMapper _mapper;

        public GetTagDetailsQueryHandler(ITagDbContext tagDbContext, IMapper mapper)
        {
            _tagDbContext = tagDbContext;
            _mapper = mapper;
        }

        async Task<GetTagDetailsVM> IRequestHandler<GetTagDetailsQuery, GetTagDetailsVM>.Handle(GetTagDetailsQuery request, CancellationToken cancellationToken)
        {
            var entity = await _tagDbContext.tags
                .FirstOrDefaultAsync(ent => ent.tagId == request.TagId, cancellationToken);

            if (entity == null || entity.tagId != request.TagId)
            {
                throw new NotFoundException(nameof(Tag), request.TagId);
            }

            return _mapper.Map<GetTagDetailsVM>(entity);
        }
    }
}
