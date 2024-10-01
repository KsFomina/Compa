using AutoMapper;
using Compa.App.Entity.Arrangements.Commands.AddUserToArr;
using Compa.App.Entity.Arrangements.Commands.CreateArrangement;
using Compa.App.Entity.Arrangements.Commands.DelArragement;
using Compa.App.Entity.Arrangements.Commands.DelUser;
using Compa.App.Entity.Arrangements.Commands.UpdateArragement;
using Compa.App.Entity.Arrangements.Queries.GetArragementDetails;
using Compa.App.Entity.Arrangements.Queries.GetArrangementList;
using Compa.App.Entity.Users.Commands.AddTag;
using Compa.App.Entity.Users.Commands.CreateUser;
using Compa.App.Entity.Users.Commands.DelTag;
using Compa.App.Entity.Users.Commands.UpdateUser;
using Compa.App.Entity.Users.Queries.GetUserDetails;
using Compa.App.Entity.Users.Queries.GetUserList;
using Microsoft.AspNetCore.Mvc;

namespace Compa.WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class ArrangementController: BaseController
    {
        private readonly IMapper _mapper;

        public ArrangementController(IMapper mapper)
        {
            _mapper = mapper;

        }
        [HttpGet]
        public async Task<ActionResult<GetArrangementListQuery>> GetAll()
        {
            var query = new GetArrangementListQuery { };
            var vm = await Mediator.Send(query);
            return Ok(vm);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<GetArragementDetailsQuery>> GetUniq(Guid id)
        {
            var query = new GetArragementDetailsQuery
            {
                ArragementId = id
            };
            var vm = await Mediator.Send(query);
            return Ok(vm);
        }
        [HttpPost]
        public async Task<ActionResult<Guid>> Create([FromBody] CreateArrangementCommand body)
        {
            var command = _mapper.Map<CreateArrangementCommand>(body);
            var id = await Mediator.Send(command);
            return Ok(id);

        }
        [HttpPost("AddUser")]
        public async Task<IActionResult> AddUser([FromBody] AddUserToArrCommand body)
        {
            var command = _mapper.Map<AddUserToArrCommand>(body);
            await Mediator.Send(command);
            return NoContent();
        }
        [HttpPut]
        public async Task<IActionResult> Update([FromBody] UpdateArragementCommand body)
        {
            var command = _mapper.Map<UpdateArragementCommand>(body);
            await Mediator.Send(command);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var command = new DelArragementCommand { ArragementId = id };
            await Mediator.Send(command);
            return NoContent();
        }
        [HttpDelete("DelUser")]
        public async Task<IActionResult> DelUser([FromBody] DelUserFromArrCommand body)
        {
            var command = _mapper.Map<DelUserFromArrCommand>(body);
            await Mediator.Send(command);
            return NoContent();
        }
    }
}
