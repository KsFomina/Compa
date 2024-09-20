using Compa.Domain;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Users.Commands.UpdateUser
{
    public class UpdateUserCommand: IRequest
    {
        public Guid UserId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int Age { get; set; }
        public Gender Gender { get; set; }
        public List<Tag> TagList { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
    }
}
