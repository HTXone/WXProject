package com.WXSys.mapper;

import com.WXSys.entity.User;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserInfoMapper {
    @Select("select * from user where Uid = #{Uid}")
    @Results(id = "UserMap",value = {
            @Result(id = true,column = "Uid",property = "Uid"),
            @Result(column = "Gender",property = "Gender"),
            @Result(column = "Age",property = "Age"),
            @Result(column = "ifAdmin",property = "ifAdmin")
    })
    User userInfoGet(int Uid);


    @Select("select * from group")
    List<Integer>selectGroupWithUid(int Uid);

    @Insert("insert into user (Uid,Gender,Age,UName) values (#{Uid},#{Gender},#{Age},#{UName})")
    int newUser(User user);

    @Insert("insert into user_composition (Uid,Cid,ifLike) values(#{Uid},#{Cid},#{ifLike})")
    int setUserLikeComps(@Param("Uid") int Uid,@Param("Cid") int Cid,@Param("ifLike")int ifLike);

    @Insert("insert into user_tag (Uid,Tid,ifLike) values(#{Uid},#{Tid},#{ifLike})")
    int setUserLikeTags(@Param("Uid") int Uid,@Param("Tid") int Tid,@Param("ifLike")int ifLike);

    @Update("update user set Gender=#{Gender}, Age = #{Age},UName = #{UName} where Uid = #{Uid}")
    int updateUser(User user);

    @Delete("delete from user_composition where Uid =#{Uid}")
    int deleteUserLikeComps(int Uid);

    @Delete("delete from user_tag where Uid =#{Uid}")
    int deleteUserLikeTags(int Uid);

    @Select("select * from group_u where Gid = #{Gid}")
    @ResultMap(value = "UserMap")
    List<User>selectUserByGid(int Gid);
}
