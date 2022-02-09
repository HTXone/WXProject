package com.WXSys.mapper;

import com.WXSys.entity.Recipe;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeInfoMapper {

    @Select("select * from recipe where Pid = #{Pid}")
    @Results(id = "RecipeMap",value = {
            @Result(id = true,column = "Pid",property = "Pid"),
            @Result(column = "Class",property = "Classes"),
            @Result(column = "Name",property = "Name"),
            @Result(column = "TimeCost",property = "TimeCost"),
    })
    Recipe recipeInfoGet(int Pid);

    @Select("select * from recipe where Class = #{Class}")
    @ResultMap(value = "RecipeMap")
    List<Recipe> selectRecipeByClass(String Class);

    @Select("select * from recipe limit #{page},5")
    @ResultMap(value = "RecipeMap")
    List<Recipe> getUserRecipeByPage(int Page);

    @Select("select count(Pid) as num from recipe")
    int getRecipeCount();

}
