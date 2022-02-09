package com.WXSys.Service;

public interface OrderService {

    int UserOrder(int Uid,int Pid,int ifAgree);

    int GroupOrder(int Gid,int Pid,int ifAgree);
}
