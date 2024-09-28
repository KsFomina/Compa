
using Compa.App.Interfaces;
using Compa.Domain;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Users.Commands.CreateUser
{
    public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, Guid>
    {
        private readonly IUserDbContext userDbContext;

        public CreateUserCommandHandler(IUserDbContext userDbContext)
        {
            this.userDbContext = userDbContext;

        }

        async public Task<Guid> Handle(CreateUserCommand request, CancellationToken cancellationToken)
        {

            var user = new User
            {
                userId = Guid.NewGuid(),
                name = request.Name,
                surname = request.Surname,
                age = request.Age,
                gender = request.Gender,
                tagList = request.TagList,
                login = request.Login,
                password = request.Password

            };
            await userDbContext.users.AddAsync(user, cancellationToken);
            await userDbContext.SaveChangesAsync(cancellationToken);

            return user.userId;
        }
    }
}
