﻿using AutoMapper;
using Compa.App.Common.Mappings;
using Compa.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Users.Queries.GetUserDetails
{
    public class GetUserDetailsVM: IMapWith<User>
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public int Age { get; set; }
        public Gender Gender { get; set; }
        public List<Tag> TagList { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<User, GetUserDetailsVM>()
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