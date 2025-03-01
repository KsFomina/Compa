﻿using AutoMapper;
using Compa.App.Entity.Arrangements.Queries.GetArragementDetails;
using Compa.App.Entity.Users.Commands.AddTag;
using Compa.App.Entity.Users.Commands.CreateUser;
using Compa.App.Entity.Users.Commands.DelTag;
using Compa.App.Entity.Users.Commands.DelUser;
using Compa.App.Entity.Users.Commands.SetNewUserAvatar;
using Compa.App.Entity.Users.Commands.UpdateUser;
using Compa.App.Entity.Users.Queries.GetUserByLogin;
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
        [HttpPut("Authorization")]
        public async Task<ActionResult<GetUserByLoginVM>> GetLogin([FromBody] GetUserByLoginQuery body)
        {
            var command = _mapper.Map<GetUserByLoginQuery>(body);
            var id = await Mediator.Send(command);
            return Ok(id);
        }
        [HttpPut("ChangeAvatar")]
        public async Task<ActionResult<SetNewUserAvatarCommand>> ChangeAvatar([FromBody] SetNewUserAvatarCommand body)
        {
            var command = _mapper.Map<SetNewUserAvatarCommand>(body);
            var id = await Mediator.Send(command);
            return Ok(id);
        }
        [HttpPost]
        public async Task<ActionResult<Guid>> Create([FromBody] CreateUserCommand body)
        {
            var command = _mapper.Map<CreateUserCommand>(body);
            var id = await Mediator.Send(command);
            return Ok(id);

        }
        [HttpPost("AddTag")]
        public async Task<IActionResult> AddTag([FromBody] AddTagToUserCommand body)
        {
            var command = _mapper.Map<AddTagToUserCommand>(body);
            await Mediator.Send(command);
            return NoContent();
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
        [HttpDelete("DelTag")]
        public async Task<IActionResult> DelTag([FromBody] DelTagFromUserCommand body)
        {
            var command = _mapper.Map<DelTagFromUserCommand>(body);
            await Mediator.Send(command);
            return NoContent();
        }
    }
}
