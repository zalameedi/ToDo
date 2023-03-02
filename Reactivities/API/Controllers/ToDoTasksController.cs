using Application.ToDoTasks;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ToDoTasksController : BaseApiController
    {

        //Create endpoints, utilize dependency injection

        [HttpGet] //api/todotasks
        public async Task<ActionResult<List<ToDoTask>>> GetToDoTasks()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")] //api/todotasks/id
        public async Task<ActionResult<ToDoTask>> GetToDoTask(Guid id)
        {
           return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateToDoTask(ToDoTask todotask)
        {
            return Ok(await Mediator.Send(new Create.Command {ToDoTask = todotask}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditToDoTask(Guid id, ToDoTask todotask)
        {
            todotask.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{ToDoTask = todotask}));
        }
    }
}