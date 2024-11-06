﻿using AutoMapper;
using Compa.App.Common.Mappings;
using Compa.App.Entity.Users.Queries.GetUserDetails;
using Compa.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Users.Queries.GetUserByLogin
{
    public class GetUserByLoginVM : IMapWith<User>
    {
        public Guid UserId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int Age { get; set; }
        public Gender Gender { get; set; }
        public List<Guid> TagList { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<User, GetUserByLoginVM>()
                .ForMember(ent => ent.UserId, opt => opt.MapFrom(obj => obj.userId))
                .ForMember(ent => ent.Name, opt => opt.MapFrom(obj => obj.name))
                .ForMember(ent => ent.Surname, opt => opt.MapFrom(obj => obj.surname))
                .ForMember(ent => ent.Age, opt => opt.MapFrom(obj => obj.age))
                .ForMember(ent => ent.Gender, opt => opt.MapFrom(obj => obj.gender))
                .ForMember(ent => ent.TagList, opt => opt.MapFrom(obj => obj.tagList))
                .ForMember(ent => ent.Login, opt => opt.MapFrom(obj => obj.login))
                .ForMember(ent => ent.Password, opt => opt.MapFrom(obj => obj.password));

        }
    }
}