package com.WXSys.mapper;

import com.WXSys.entity.order;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface orderHistoryInfoMapper {

    @Select("select * from orderHistory")
    List<Integer> selectOrderHistoryofUser(int Uid);

    @Insert("insert into orderhistory (Uid,Gid,Pid,ifAgree) values (#{Uid},#{Gid},#{Pid},#{ifAgree})")
    int newOrder(order order);
}
