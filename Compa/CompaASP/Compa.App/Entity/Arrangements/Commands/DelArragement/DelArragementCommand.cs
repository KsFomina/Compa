using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Arrangements.Commands.DelArragement
{
    public class DelArragementCommand: IRequest
    {
        public Guid ArragementId { get; set; }
    }
}
