package com.WXSys.controller;

import com.WXSys.Service.GroupService;
import com.WXSys.Service.OrderService;
import com.WXSys.Service.RecommendService;
import com.WXSys.entity.Recommend;
import com.WXSys.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class GroupController {
    @Autowired
    RecommendService recommendService;

    @Autowired
    GroupService groupService;

    @Autowired
    OrderService orderService;

    @RequestMapping(value = "/recommendofGroup.do")
    @ResponseBody
    List<Recommend> getGroupRecommedns(int Gid){
        return recommendService.recommendsOfGid(Gid);
    }

    @RequestMapping(value = "/usersofGroup.do")
    @ResponseBody
    List<User> getGroupUsers(int Gid){
        return groupService.getGroupUsers(Gid);
    }

    @RequestMapping(value = "/groupOrder.do")
    @ResponseBody
    int GroupOrder(int Gid,int Pid,int ifAgree,int Rid){
        orderService.GroupOrder(Gid,Pid,ifAgree);
        return recommendService.OverRecommend(Rid,1);
    }

    @RequestMapping(value = "/newRecommend.do")
    @ResponseBody
    int newGroupRecommends(int Gid,int Uid){
        return recommendService.newRecommend(Gid,Uid);
    }

    @RequestMapping(value = "/newGroup.do")
    @ResponseBody
    int CreateGroup(int Uid,String GName,String relationship){
        return groupService.NewGroup(Uid, GName, relationship);
    }

    @RequestMapping(value = "/GroupDelete.do")
    @ResponseBody
    int GroupDelete(int Gid){
        return groupService.GroupDelete(Gid);
    }

    @RequestMapping(value = "/userJoin.do")
    @ResponseBody
    int UserJoin(int Gid,int Uid){
        return groupService.userJoin(Gid,Uid,0);
    }

    @RequestMapping(value = "/setAdmin.do")
    @ResponseBody
    int setAdmin(int Gid,int Uid,int ifAdmin){
        return groupService.setAdmin(Gid, Uid, ifAdmin);
    }

    @RequestMapping(value = "/userRemove.do")
    @ResponseBody
    int UserRemove(int Gid,int Uid){
        return groupService.userRemove(Gid,Uid);
    }

}
