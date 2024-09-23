using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Users.Queries.GetUserDetails
{
    public class GetUserDetailsQuery:IRequest<GetUserDetailsVM>
    {
        public Guid UserId { get; set; }
    }
}
