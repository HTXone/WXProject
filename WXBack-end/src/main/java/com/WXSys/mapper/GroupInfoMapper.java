package com.WXSys.mapper;

import com.WXSys.entity.Group;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GroupInfoMapper {

    @Select("select * from `group` where Gid= #{Gid} and ifShow = 1")
    @Results(id = "GroupMap",value ={
            @Result(id = true,column = "Gid",property = "Gid"),
            @Result(column = "GName",property = "Name"),
            @Result(column = "relation",property = "relation"),
            @Result(column = "owner",property = "owner")
    })
    Group selectGroup(int Gid);

    @Insert("insert into group_user (Gid,Uid,ifAdmin) values (#{Gid},#{Uid},#{ifAdmin})")
    int userJoinGroup(@Param("Gid")int Gid,@Param("Uid")int Uid,@Param("ifAdmin")int ifAdmin);

    @Insert("insert into `group` (Gid,owner,GName,relation) values (#{Gid},#{owner},#{Name},#{relation})")
    int newGroup(Group group);

    @Update("Update `group` set ifShow = 0 where Gid = #{Gid}")
    int GroupDelete(int Gid);

    @Delete("delete from group_user where Gid = #{Gid} and Uid = #{Uid}")
    int DeleteGroupUser(@Param("Gid") int Gid,@Param("Uid") int Uid);

    @Select("select * from user_g where Uid = #{Uid} and ifShow = 1")
    @ResultMap(value = "GroupMap")
    List<Group> selectGroupsByUid(int Uid);

    @Select("select distinct Gid,GName from recommend where Uid = #{Uid} ")
    @ResultMap(value = "GroupMap")
    List<Group> selectRecommendGroupsByUid(int Uid);

    @Update("Update group_user set ifAdmin=#{ifAdmin} where Gid = #{Gid} and Uid = #{Uid}")
    int updateAdmin(@Param("Gid") int Gid,@Param("Uid") int Uid,@Param("ifAdmin") int ifAdmin);

}
