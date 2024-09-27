using AutoMapper;
using Compa.App.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Compa.App.Common.Exceptions;
using Compa.Domain;

namespace Compa.App.Entity.Users.Queries.GetUserDetails
{
    public class GetUserDetailsQueryHandler: IRequestHandler<GetUserDetailsQuery, GetUserDetailsVM>
    {
        private readonly IUserDbContext _userDbContext;
        private readonly IMapper _mapper;

        public GetUserDetailsQueryHandler(IUserDbContext userDbContext, IMapper mapper)
        {
            _userDbContext = userDbContext;
            _mapper = mapper;
        }

        async public Task<GetUserDetailsVM> Handle(GetUserDetailsQuery request, CancellationToken cancellationToken)
        {
            var entity = await _userDbContext.users
                 .FirstOrDefaultAsync(ent => ent.userId == request.UserId, cancellationToken);

            if (entity == null || entity.userId!= request.UserId)
            {
                throw new NotFoundException(nameof(User), request.UserId );
            }

            return _mapper.Map<GetUserDetailsVM>(entity);

        }
    }
}
