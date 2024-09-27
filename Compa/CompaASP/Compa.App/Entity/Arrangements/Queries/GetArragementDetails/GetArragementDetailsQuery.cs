using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Arrangements.Queries.GetArragementDetails
{
    public class GetArragementDetailsQuery: IRequest<GetArragementDetailsVM>
    {
        public Guid ArragementId { get; set; }
    }
}
