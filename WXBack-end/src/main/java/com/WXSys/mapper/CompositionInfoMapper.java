package com.WXSys.mapper;

import com.WXSys.entity.Composition;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompositionInfoMapper {

    @Select("select * from composition where Cid = #{Cid}")
    @Results(id = "compositionMap",value ={
            @Result(id = true,column = "Cid",property = "Cid"),
            @Result(column = "Name",property = "Name"),
            @Result(column = "ifHot",property = "ifHot")
    })
    Composition CompositionInfoGet(int Cid);

    @Select("select * from composition")
    @ResultMap(value = "compositionMap")
    List<Composition> getCompositions();

    @Select("select * from user_compos where Uid = #{Uid}")
    @Results(id = "compUserMap",value = {
            @Result(id = true,column = "Cid",property = "Cid"),
            @Result(column = "Name",property = "Name"),
            @Result(column = "ifHot",property = "ifHot"),
            @Result(column = "ifLike",property = "ifLike")
    })
    List<Composition> getUserCompositions(int Uid);

    @Select("selct * from composition where Name = #{Name}")
    @ResultMap(value = "compositionMap")
    List<Composition> selectCompositionWithName(String Name);


    int insertCompositions(String Name);



}
