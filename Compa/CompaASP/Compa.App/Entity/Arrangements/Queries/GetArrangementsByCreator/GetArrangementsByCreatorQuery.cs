﻿using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Arrangements.Queries.GetArrangementsByCreator
{
    public class GetArrangementsByCreatorQuery: IRequest<GetArrangementByCreatorVM>
    {
        public Guid CreatorId { get; set; }
    }
}
