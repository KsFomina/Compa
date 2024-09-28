using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Tags.Commands.DelTag
{
    public class DelTagCommand: IRequest
    {
        public Guid TagId { get; set; }
    }
}
