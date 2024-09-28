using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Tags.Queries.GetTagDetails
{
    public class GetTagDetailsQuery: IRequest<GetTagDetailsVM>
    {
        public Guid TagId { get; set; }
    }
}
