using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Users.Commands.SetNewUserAvatar
{
    public class SetNewUserAvatarCommand: IRequest
    {
        public Guid userId { get; set; }
        public List<byte> avatar { get; set; }
    }
}
