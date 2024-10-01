using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Users.Commands.DelTag
{
    public class DelTagFromUserCommand : IRequest
    {
        public Guid UserId { get; set; }
        public Guid TagId { get; set; }
    }
}
