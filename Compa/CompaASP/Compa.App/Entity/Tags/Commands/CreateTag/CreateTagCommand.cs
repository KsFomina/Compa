﻿using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Tags.Commands.CreateTag
{
    public class CreateTagCommand:  IRequest<Guid>
    {
        public string TagName { get; set; }
    }
}
