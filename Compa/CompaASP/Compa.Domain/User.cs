using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.Domain
{
    public class User
    {
        public Guid userId { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public int age { get; set; }
        public Gender gender { get; set; }
        public List<Guid> tagList { get; set; }
        public string login { get; set; }
        public string password { get; set; }
        public List<byte> avatar { get; set; }
        public List<Guid> arrangementsIds { get; set; }
    }
}
