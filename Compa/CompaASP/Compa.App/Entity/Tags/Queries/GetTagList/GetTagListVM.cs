using Compa.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Tags.Queries.GetTagList
{
    public class GetTagListVM
    {
        public IList<GetTagListDTO> tags { get; set; }
    }
}
