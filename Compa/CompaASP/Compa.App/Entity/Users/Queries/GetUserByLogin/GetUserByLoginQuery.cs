using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Users.Queries.GetUserByLogin
{
    public class GetUserByLoginQuery: IRequest<GetUserByLoginVM>
    {
        public string Login { get; set; }
        public string Password { get; set; }
    }
}
