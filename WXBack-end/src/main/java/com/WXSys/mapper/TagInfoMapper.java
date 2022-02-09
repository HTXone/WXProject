package com.WXSys.mapper;

import com.WXSys.entity.Composition;
import com.WXSys.entity.Tag;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagInfoMapper {

    @Select("select * from tag where Tid = #{Tid}")
    @Results(id = "TagMap",value = {
            @Result(id = true,column = "Tid",property = "Tid"),
            @Result(column = "Name",property = "Name"),
            @Result(column = "ifHot",property = "ifHot"),
    })
    Tag selectTagInfo(int Tid);

    @Select("select * from tag")
    @ResultMap(value = "TagMap")
    List<Tag>selectTags();

    @Select("select * from user_t")
    @Results(id = "userTagMap",value= {
            @Result(id = true,column = "Tid",property = "Tid"),
            @Result(column = "Name",property = "Name"),
            @Result(column = "ifHot",property = "ifHot"),
            @Result(column = "ifLike",property = "ifLike")
    })
    List<Tag> getUserTags(int Uid);

    @Select("selct * from tag where Name = #{Name}")
    @ResultMap(value = "TagMap")
    List<Tag> selectTagWithName(String Name);

}
