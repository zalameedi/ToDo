using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.ToDoTasks
{
    public class Create
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
                _context.ToDoTasks.Add(request.ToDoTask); //just tracking a new todotask
                await _context.SaveChangesAsync();
                return Unit.Value; //I guess??
            }
        }
    }
}