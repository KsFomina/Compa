using AutoMapper;
using AutoMapper.QueryableExtensions;
using Compa.App.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Compa.App.Entity.Users.Queries.GetUserList
{
    public class GetUserListQueryHandler: IRequestHandler<GetUserListQuery, GetUserListVM>
    {
        private readonly IUserDbContext _userDbContext;
        private readonly IMapper _mapper;

        public GetUserListQueryHandler(IUserDbContext userDbContext, IMapper mapper)
        {
            _userDbContext = userDbContext;
            _mapper = mapper;
        }

        async public Task<GetUserListVM> Handle(GetUserListQuery request, CancellationToken cancellationToken)
        {
            var Users = await _userDbContext.users
                .ProjectTo<GetUserListDTO>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);

            return new GetUserListVM { users = Users };
        }
    }
}
