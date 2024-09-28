using AutoMapper;
using Compa.App.Entity.Tags.Commands.CreateTag;
using Compa.App.Entity.Tags.Commands.DelTag;
using Compa.App.Entity.Tags.Commands.UpdateTag;
using Compa.App.Entity.Tags.Queries.GetTagDetails;
using Compa.App.Entity.Tags.Queries.GetTagList;
using Compa.App.Entity.Users.Commands.CreateUser;
using Compa.App.Entity.Users.Commands.DelUser;
using Compa.App.Entity.Users.Commands.UpdateUser;
using Compa.App.Entity.Users.Queries.GetUserDetails;
using Compa.App.Entity.Users.Queries.GetUserList;
using Microsoft.AspNetCore.Mvc;

namespace Compa.WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class TagController : BaseController
    {
        private readonly IMapper _mapper;

        public TagController(IMapper mapper)
        {
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<GetTagListQuery>> GetAll()
        {
            var query = new GetTagListQuery { };
            var vm = await Mediator.Send(query);
            return Ok(vm);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<GetTagDetailsQuery>> GetUniq(Guid id)
        {
            var query = new GetTagDetailsQuery
            {
                TagId = id
            };
            var vm = await Mediator.Send(query);
            return Ok(vm);
        }
        [HttpPost]
        public async Task<ActionResult<Guid>> Create([FromBody] CreateTagCommand body)
        {
            var command = _mapper.Map<CreateTagCommand>(body);
            var id = await Mediator.Send(command);
            return Ok(id);

        }
        [HttpPut]
        public async Task<IActionResult> Update([FromBody] UpdateTagCommand body)
        {
            var command = _mapper.Map<UpdateTagCommand>(body);
            await Mediator.Send(command);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var command = new DelTagCommand { TagId = id };
            await Mediator.Send(command);
            return NoContent();
        }
    }
}
