using Compa.Domain;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Arrangements.Commands.CreateArrangement
{
    public class CreateArrangementCommand: IRequest<Guid>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public Gender Gender { get; set; }
        public int MinAge { get; set; }
        public int MaxAge { get; set; }
        public int MaxMembers { get; set; }
        public string Date { get; set; }
        public Guid Tag { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public string Place { get; set; }
        public string City { get; set; }
        public Guid CreatorId { get; set; }
    }
}
