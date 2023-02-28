
namespace Domain
{
    /// OPM Database abstracted using sqlite3, queries are in C#
    public class ToDoTask
    {
        public Guid Id { get; set; }
        public DateTime Date { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool Complete { get; set; }
    }
}