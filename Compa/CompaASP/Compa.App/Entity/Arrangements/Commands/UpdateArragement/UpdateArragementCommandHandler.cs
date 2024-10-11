using Compa.App.Common.Exceptions;
using Compa.App.Interfaces;
using Compa.Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace Compa.App.Entity.Arrangements.Commands.UpdateArragement
{
    public class UpdateArragementCommandHandler: IRequestHandler<UpdateArragementCommand>
    {
        private readonly IArrangementDbContext _arContext;

        public UpdateArragementCommandHandler(IArrangementDbContext context) { _arContext = context; }

        async public Task<Unit> Handle(UpdateArragementCommand request, CancellationToken cancellationToken)
        {
            var entity =
                await _arContext.arrangements.FirstOrDefaultAsync(
                item => item.arrangementId == request.ArragementId, cancellationToken);

            if (entity == null || entity.arrangementId != request.ArragementId)
            {
                throw new NotFoundException(nameof(Arrangement), request.ArragementId);
            }

            entity.arrangementId = request.ArragementId;
            entity.title = request.Title;
            entity.description = request.Description;
            entity.gender = request.Gender;
            entity.minAge = request.MinAge;
            entity.maxAge = request.MaxAge;
            entity.tag = request.Tag;
            entity.startTime = request.StartTime;
            entity.endTime = request.EndTime;
            entity.place = request.Place;
            entity.city = request.City;
            entity.maxMembers  = request.MaxMembers;
            entity.date = request.Date; 

            await _arContext.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
