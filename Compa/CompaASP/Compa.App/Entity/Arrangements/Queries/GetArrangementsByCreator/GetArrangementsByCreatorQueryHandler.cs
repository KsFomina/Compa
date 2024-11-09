using AutoMapper;
using AutoMapper.QueryableExtensions;
using Compa.App.Entity.Arrangements.Queries.GetArrangementList;
using Compa.App.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Arrangements.Queries.GetArrangementsByCreator
{
    public class GetArrangementsByCreatorQueryHandler : IRequestHandler<GetArrangementsByCreatorQuery, GetArrangementByCreatorVM>
    {
        private readonly IArrangementDbContext _arrangementDbContext;
        private readonly IMapper _mapper;

        public GetArrangementsByCreatorQueryHandler(IArrangementDbContext arrangementDbContext, IMapper mapper)
        {
            _arrangementDbContext = arrangementDbContext;
            _mapper = mapper;
        }

        async public Task<GetArrangementByCreatorVM> Handle(GetArrangementsByCreatorQuery request, CancellationToken cancellationToken)
        {
            var Arrangements = await _arrangementDbContext.arrangements
                .ProjectTo<GetArrangementByCreatorDTO>(_mapper.ConfigurationProvider)
                .Where(ent => ent.creatorId == request.CreatorId)
                .ToListAsync(cancellationToken);

            return new GetArrangementByCreatorVM { arrangements = Arrangements };
        }
    }
}
