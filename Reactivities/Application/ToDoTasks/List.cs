using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.ToDoTasks
{
    public class List
    {
        public class Query : IRequest<List<ToDoTask>> {}
        public class Handler : IRequestHandler<Query, List<ToDoTask>>
        {
            private readonly ILogger<List> _logger;
            private readonly DataContext _context;
            public Handler(DataContext context, ILogger<List> logger)
            {
                _logger = logger;
                _context = context;
            }
            public async Task<List<ToDoTask>> Handle(Query request, CancellationToken cancellationToken)
            {
                //i should consider handling cancellation requests someday...
                //incase user wants to stop something
                return await _context.ToDoTasks.ToListAsync();
            }
        }
    }
}