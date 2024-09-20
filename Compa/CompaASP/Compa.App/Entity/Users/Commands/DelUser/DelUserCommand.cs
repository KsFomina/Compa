using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Users.Commands.DelUser
{
    public class DelUserCommand: IRequest
    {
        public Guid UserId { get; set; }
    }
}
