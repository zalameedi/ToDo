using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class TasksController : BaseApiController
    {
        private readonly DataContext _context;

        //Create endpoints, utilize dependency injection
        public TasksController(DataContext context)
        {
            _context = context;
        }

        [HttpGet] //api/todotasks
        public async Task<ActionResult<List<ToDoTask>>> GetToDoTasks()
        {
            return await _context.ToDoTasks.ToListAsync();
        }

        [HttpGet("{id}")] //api/todotasks/id
        public async Task<ActionResult<ToDoTask>> GetToDoTask(Guid id)
        {
            return await _context.ToDoTasks.FindAsync(id); //requested id
        }
    }
}