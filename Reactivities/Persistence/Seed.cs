using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.ToDoTasks.Any()) return;
            
            var ToDoTasks = new List<ToDoTask>
            {
                new ToDoTask
                {
                    Title = "Past ToDoTask 1",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "ToDoTask 2 months ago",
                    Complete = false,
                },
                new ToDoTask
                {
                    Title = "Past ToDoTask 2",
                    Date = DateTime.UtcNow.AddMonths(-1),
                    Description = "ToDoTask 1 month ago",
                    Complete = false,
                },
                new ToDoTask
                {
                    Title = "Future ToDoTask 1",
                    Date = DateTime.UtcNow.AddMonths(1),
                    Description = "ToDoTask 1 month in future",
                    Complete = false,
                },
                new ToDoTask
                {
                    Title = "Future ToDoTask 2",
                    Date = DateTime.UtcNow.AddMonths(2),
                    Description = "ToDoTask 2 months in future",
                    Complete = false,
                },
                new ToDoTask
                {
                    Title = "Future ToDoTask 3",
                    Date = DateTime.UtcNow.AddMonths(3),
                    Description = "ToDoTask 3 months in future",
                    Complete = false,
                },
                new ToDoTask
                {
                    Title = "Future ToDoTask 4",
                    Date = DateTime.UtcNow.AddMonths(4),
                    Description = "ToDoTask 4 months in future",
                    Complete = false,
                },
                new ToDoTask
                {
                    Title = "Future ToDoTask 5",
                    Date = DateTime.UtcNow.AddMonths(5),
                    Description = "ToDoTask 5 months in future",
                    Complete = false,
                },
                new ToDoTask
                {
                    Title = "Future ToDoTask 6",
                    Date = DateTime.UtcNow.AddMonths(6),
                    Description = "ToDoTask 6 months in future",
                    Complete = false,
                },
                new ToDoTask
                {
                    Title = "Future ToDoTask 7",
                    Date = DateTime.UtcNow.AddMonths(7),
                    Description = "ToDoTask 2 months ago",
                    Complete = false,
                },
                new ToDoTask
                {
                    Title = "Future ToDoTask 8",
                    Date = DateTime.UtcNow.AddMonths(8),
                    Description = "ToDoTask 8 months in future",
                    Complete = false,
                }
            };

            await context.ToDoTasks.AddRangeAsync(ToDoTasks);
            await context.SaveChangesAsync();
        }
    }
}