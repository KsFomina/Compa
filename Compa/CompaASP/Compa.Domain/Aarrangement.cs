using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.Domain
{
    public class Aarrangement
    {
        public Guid arrangementId { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public Gender gender { get; set; }
        public int minAge { get; set; }
        public Tag tag { get; set; }
        public DateTime startTime { get; set; }
        public DateTime endTime { get; set; }
        public string place { get; set; }
        public Guid creatorId { get; set; }
        public List<Guid> membersIds { get; set; }
       
    }
}
