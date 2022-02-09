package com.WXSys.mapper;

import com.WXSys.entity.Recommend;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecommendInfoMapper {

    @Select("select * from recommend_p where Gid = #{Gid} and ifOver = 0")
    @Results(id = "RecipeMap",value = {
            @Result(id = true,column = "Rid",property = "Rid"),
            @Result(column = "Gid",property = "Gid"),
            @Result(column = "Uid",property = "Uid"),
            @Result(column = "Pid",property = "Pid"),
            @Result(column = "ifOver",property = "ifOver"),

            @Result(column = "Name",property = "PName"),
            @Result(column = "UName",property = "UName"),

    })
    List<Recommend> selectRecommendByGidandUid(int Gid);

    @Select("select UName from recommend_u where Rid = #{Rid} and ifAgree = 1")
    List<String> agreeRecommendUsers(int Rid);

    @Select("select UName from recommend_u where Rid = #{Rid} and ifAgree = 0")
    List<String> disagreeRecommendUsers(int Rid);

    @Update("update recommend set ifOver = #{ifOver} where Rid = #{Rid}")
    int OverRecommend(@Param("Rid")int Rid,@Param("ifOver")int ifOver);

    @Insert("insert into recommend_user (Rid,Uid,ifAgree) values (#{Rid},#{Uid},#{ifAgree})")
    int agreeRecommend(@Param("Rid") int Rid,@Param("Uid") int Uid,@Param("ifAgree") int ifAgree);

    @Insert("insert into recommend (Uid,Gid,Pid) values (#{Uid},#{Gid},#{Pid})")
    int newRecommend(Recommend recommend);


}
