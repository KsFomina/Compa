﻿using AutoMapper;
using Compa.App.Common.Mappings;
using Compa.App.Entity.Users.Queries.GetUserDetails;
using Compa.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compa.App.Entity.Arrangements.Queries.GetArragementDetails
{
    public class GetArragementDetailsVM: IMapWith<Arrangement>
    {
        public Guid arrangementId { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public Gender gender { get; set; }
        public int minAge { get; set; }
        public int maxAge { get; set; }
        public Guid tag { get; set; }
        public string startTime { get; set; }
        public string endTime { get; set; }
        public string place { get; set; }
        public Guid creatorId { get; set; }
        public List<Guid> membersIds { get; set; }
        public void Mapping(Profile profile)
        {
            profile.CreateMap<Arrangement, GetArragementDetailsVM>()
                .ForMember(ent => ent.arrangementId, opt => opt.MapFrom(obj => obj.arrangementId))
                .ForMember(ent => ent.title, opt => opt.MapFrom(obj => obj.title))
                .ForMember(ent => ent.description, opt => opt.MapFrom(obj => obj.description))
                .ForMember(ent => ent.gender, opt => opt.MapFrom(obj => obj.gender))
                .ForMember(ent => ent.minAge, opt => opt.MapFrom(obj => obj.minAge))
                .ForMember(ent => ent.maxAge, opt => opt.MapFrom(obj => obj.maxAge))
                .ForMember(ent => ent.tag, opt => opt.MapFrom(obj => obj.tag))
                .ForMember(ent => ent.startTime, opt => opt.MapFrom(obj => obj.startTime))
                .ForMember(ent => ent.endTime, opt => opt.MapFrom(obj => obj.endTime))
                .ForMember(ent => ent.place, opt => opt.MapFrom(obj => obj.place))
                .ForMember(ent => ent.creatorId, opt => opt.MapFrom(obj => obj.creatorId))
                .ForMember(ent => ent.membersIds, opt => opt.MapFrom(obj => obj.membersIds));

        }
    }
}