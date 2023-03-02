using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ToDoTasks
{
    public class List
    {
        public class Query : IRequest<List<ToDoTask>> {}
        public class Handler : IRequestHandler<Query, List<ToDoTask>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<ToDoTask>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.ToDoTasks.ToListAsync();
            }
        }
    }
}