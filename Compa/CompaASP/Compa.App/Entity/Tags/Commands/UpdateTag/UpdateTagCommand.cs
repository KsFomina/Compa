using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Tags.Commands.UpdateTag
{
    public class UpdateTagCommand: IRequest
    {
        public Guid TagId { get; set; }
        public string TagName { get; set; }
    }
}
