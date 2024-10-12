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

namespace Compa.App.Entity.Users.Queries.GetUserByLogin
{
    public class GetUserByLoginQueryHandler : IRequestHandler<GetUserByLoginQuery, GetUserByLoginVM>
    {
        private readonly IUserDbContext _userDbContext;
        private readonly IMapper _mapper;

        public GetUserByLoginQueryHandler(IUserDbContext userDbContext, IMapper mapper)
        {
            _userDbContext = userDbContext;
            _mapper = mapper;
        }

        async public Task<GetUserByLoginVM> Handle(GetUserByLoginQuery request, CancellationToken cancellationToken)
        {
            var entity = await _userDbContext.users
                 .FirstOrDefaultAsync(ent => ent.login == request.Login, cancellationToken);

            if (entity == null || entity.login != request.Login)
            {
                throw new NotFoundException(nameof(User), request.Login);
            }
            if (entity.password != request.Password)
            {
                throw new Exception("Неверный пароль");
            }

            return _mapper.Map<GetUserByLoginVM>(entity);

        }
    }
}
