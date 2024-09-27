using Compa.App.Interfaces;
using Compa.Domain;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Arrangements.Commands.CreateArrangement
{
    public class CreateArrangementCommandHandler: IRequestHandler<CreateArrangementCommand, Guid>
    {
        private readonly IArrangementDbContext _arContext;

        public CreateArrangementCommandHandler(IArrangementDbContext context) { _arContext = context; }

        async public Task<Guid> Handle(CreateArrangementCommand request, CancellationToken cancellationToken)
        {
            var arrangement = new Arrangement
            {
                arrangementId = Guid.NewGuid(),
                title = request.Title,
                description = request.Description,
                gender = request.Gender,
                minAge = request.MinAge,
                maxAge = request.MaxAge,
                tag = request.Tag,
                startTime = request.StartTime,
                endTime = request.EndTime,
                place = request.Place,
                creatorId = request.CreatorId,

            };
            await _arContext.arrangements.AddAsync(arrangement, cancellationToken);
            await _arContext.SaveChangesAsync(cancellationToken);

            return arrangement.arrangementId;
        }
    }
}
