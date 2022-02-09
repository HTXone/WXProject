package com.WXSys.Service.impl;

import com.WXSys.Service.OrderService;
import com.WXSys.entity.order;
import com.WXSys.mapper.orderHistoryInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    orderHistoryInfoMapper orderDao;

    @Override
    public int UserOrder(int Uid, int Pid, int ifAgree) {
        order order = new order();
        order.setHid(1);
        order.setUid(Uid);
        order.setPid(Pid);
        order.setIfAgree(ifAgree);

        orderDao.newOrder(order);

        return 0;
    }

    public int GroupOrder(int Gid,int Pid,int ifAgree){
        order order = new order();
        order.setHid(2);
        order.setGid(Gid);
        order.setPid(Pid);
        order.setIfAgree(ifAgree);

        orderDao.newOrder(order);

        return 0;
    }
}
