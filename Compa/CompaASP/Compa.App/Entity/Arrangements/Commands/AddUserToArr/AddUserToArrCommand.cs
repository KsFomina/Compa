using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Arrangements.Commands.AddUserToArr
{
    public class AddUserToArrCommand : IRequest
    {
        public Guid ArrangementId { get; set; }
        public Guid UserId { get; set; }
    }
}
