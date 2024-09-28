﻿using AutoMapper;
using Compa.App.Common.Mappings;
using Compa.App.Entity.Users.Queries.GetUserList;
using Compa.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Tags.Queries.GetTagList
{
    public class GetTagListDTO: IMapWith<Tag>
    {
        public Guid TagId { get; set; }
        public string TagName { get; set; }
        public void Mapping(Profile profile)
        {
            profile.CreateMap<Tag, GetTagListDTO>()
                .ForMember(ent => ent.TagName, opt => opt.MapFrom(obj => obj.name))
                .ForMember(ent => ent.TagId, opt => opt.MapFrom(obj => obj.tagId));
        }
    }
}
