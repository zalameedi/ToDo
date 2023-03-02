using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.ToDoTasks
{
    public class Edit
    {
        public class Command : IRequest
        {
            public ToDoTask ToDoTask {get; set;}
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var todotask = await _context.ToDoTasks.FindAsync(request.ToDoTask.Id);
                todotask.Title = request.ToDoTask.Title;
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}