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

namespace Compa.App.Entity.Arrangements.Queries.GetArragementDetails
{
    public class GetArragementDetailsQueryHandler : IRequestHandler<GetArragementDetailsQuery, GetArragementDetailsVM>
    {
        private readonly IArrangementDbContext _arrangementDbContext;
        private readonly IMapper _mapper;

        public GetArragementDetailsQueryHandler(IArrangementDbContext arrangementDbContext, IMapper mapper)
        {
            _arrangementDbContext = arrangementDbContext;
            _mapper = mapper;
        }

        async public Task<GetArragementDetailsVM> Handle(GetArragementDetailsQuery request, CancellationToken cancellationToken)
        {
            var entity = await _arrangementDbContext.arrangements
                 .FirstOrDefaultAsync(ent => ent.arrangementId == request.ArragementId, cancellationToken);

            if (entity == null || entity.arrangementId != request.ArragementId)
            {
                throw new NotFoundException(nameof(Arrangement), request.ArragementId);
            }

            return _mapper.Map<GetArragementDetailsVM>(entity);
        }
    }
}
