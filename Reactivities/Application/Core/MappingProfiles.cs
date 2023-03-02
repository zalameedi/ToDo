using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<ToDoTask, ToDoTask>(); //take todotask props and put em in other!
        }

    }
}