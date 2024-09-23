using Compa.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Users.Queries.GetUserList
{
    public class GetUserListVM
    {
        public IList<GetUserListDTO> users { get; set; }    
    }


}
