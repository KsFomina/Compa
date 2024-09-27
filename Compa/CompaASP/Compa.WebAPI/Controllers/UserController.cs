using AutoMapper;
using Compa.App.Entity.Users.Commands.CreateUser;
using Compa.App.Entity.Users.Commands.DelUser;
using Compa.App.Entity.Users.Commands.UpdateUser;
using Compa.App.Entity.Users.Queries.GetUserDetails;
using Compa.App.Entity.Users.Queries.GetUserList;
using Microsoft.AspNetCore.Mvc;

namespace Compa.WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class UserController: BaseController
    {
        private readonly IMapper _mapper;

        public UserController(IMapper mapper)
        {
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<GetUserListVM>> GetAll()
        {
            var query = new GetUserListQuery { };
            var vm = await Mediator.Send(query);
            return Ok(vm);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<GetUserDetailsVM>>GetUniq(Guid id)
        {
            var query = new GetUserDetailsQuery {
                UserId = id
            };
            var vm = await Mediator.Send(query);
            return Ok(vm);
        }
        [HttpPost]
        public async Task<ActionResult<Guid>> Create([FromBody] CreateUserCommand body)
        {
            var  command = _mapper.Map<CreateUserCommand>(body);
            var id = await Mediator.Send(command);
            return Ok(id);

        }
        [HttpPut]
        public async Task<IActionResult> Update([FromBody] UpdateUserCommand body)
        {
            var command = _mapper.Map<UpdateUserCommand>(body);
            await Mediator.Send(command);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var command = new DelUserCommand { UserId = id};
            await Mediator.Send(command);
            return NoContent();
        }
    }
}
