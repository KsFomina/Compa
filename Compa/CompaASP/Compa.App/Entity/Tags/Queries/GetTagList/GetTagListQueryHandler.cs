using AutoMapper;
using AutoMapper.QueryableExtensions;
using Compa.App.Entity.Users.Queries.GetUserList;
using Compa.App.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Tags.Queries.GetTagList
{
    public class GetTagListQueryHandler: IRequestHandler<GetTagListQuery, GetTagListVM>
    {
        private readonly ITagDbContext _tagDbContext;
        private readonly IMapper _mapper;

        public GetTagListQueryHandler(ITagDbContext tagDbContext, IMapper mapper)
        {
            _tagDbContext = tagDbContext;
            _mapper = mapper;
        }

        public async Task<GetTagListVM> Handle(GetTagListQuery request, CancellationToken cancellationToken)
        {
            var Entity = await _tagDbContext.tags
                .ProjectTo<GetTagListDTO>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);

            return new GetTagListVM { tags = Entity };
        }
    }
}
