using Compa.App.Entity.Arrangements.Queries.GetArrangementList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Arrangements.Queries.GetArrangementsByCreator
{
    public class GetArrangementByCreatorVM
    {
        public IList<GetArrangementByCreatorDTO> arrangements { get; set; }
    }
}
