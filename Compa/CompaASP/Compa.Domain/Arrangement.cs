using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.Domain
{
    public class Arrangement
    {
        public Guid arrangementId { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public Gender gender { get; set; }
        public int minAge { get; set; }
        public int maxAge { get; set; }
        public Guid tag { get; set; }
        public string startTime { get; set; }
        public string endTime { get; set; }
        public string place { get; set; }
        public Guid creatorId { get; set; }
        public List<Guid> membersIds { get; set; }
       
    }
}
