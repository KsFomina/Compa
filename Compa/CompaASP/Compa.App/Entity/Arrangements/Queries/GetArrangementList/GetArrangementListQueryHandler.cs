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

namespace Compa.App.Entity.Arrangements.Queries.GetArrangementList
{
    public class GetArrangementListQueryHandler: IRequestHandler<GetArrangementListQuery, GetArrangementListVM>
    {
        private readonly IArrangementDbContext _arrangementDbContext;
        private readonly IMapper _mapper;

        public GetArrangementListQueryHandler(IArrangementDbContext arrangementDbContext, IMapper mapper)
        {
            _arrangementDbContext = arrangementDbContext;
            _mapper = mapper;
        }

        async public Task<GetArrangementListVM> Handle(GetArrangementListQuery request, CancellationToken cancellationToken)
        {
            var Arrangements = await _arrangementDbContext.arrangements
                .ProjectTo<GetArrangementListDTO>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);

            return new GetArrangementListVM { arrangements = Arrangements };
        }
    }
}
