using Compa.App.Common.Exceptions;
using Compa.App.Interfaces;
using Compa.Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Arrangements.Commands.DelArragement
{
    public class DelArragementCommandHandler: IRequestHandler<DelArragementCommand>
    {
        private readonly IArrangementDbContext _ctx;
         
        public DelArragementCommandHandler(IArrangementDbContext ctx)
        {
            _ctx = ctx;
        }

        async public Task<Unit> Handle(DelArragementCommand request, CancellationToken cancellationToken)
        {
            var entity =
               await _ctx.arrangements.FirstOrDefaultAsync(
                   item => item.arrangementId == request.ArragementId, cancellationToken);

            if (entity == null || entity.arrangementId != request.ArragementId)
            {
                throw new NotFoundException(nameof(Arrangement), request.ArragementId);
            }


            _ctx.arrangements.Remove(entity);
            await _ctx.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
