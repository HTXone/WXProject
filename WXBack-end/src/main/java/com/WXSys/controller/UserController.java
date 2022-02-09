package com.WXSys.controller;

import com.WXSys.Service.OrderService;
import com.WXSys.Service.RecommendService;
import com.WXSys.Service.UserService;
import com.WXSys.entity.Composition;
import com.WXSys.entity.Group;
import com.WXSys.entity.Tag;
import com.WXSys.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    RecommendService recommendService;

    @Autowired
    OrderService orderService;

    @RequestMapping(value = "/login.do", method = {RequestMethod.POST})
    @ResponseBody
    public Map<String,String> login(@RequestBody Map<String, String> req) throws Exception {
        Map<String,String> map= new HashMap<String,String>();
        System.out.println(req.get("userID"));
        User user = userService.getUserInfo(Integer.parseInt(req.get("userID")));
        map.put("id",String.valueOf(user.getUid()));
        map.put("gender",String.valueOf(user.getGender()));
        map.put("age",String.valueOf(user.getAge()));

        return map;
    }

    @RequestMapping(value = "/taginfo.do")
    @ResponseBody
    public List<Tag> TagsInfo(){
        List<Tag> tags = userService.getHotTags();
        System.out.println("In");
        return tags;
    }

    @RequestMapping(value = "/compsinfo.do")
    @ResponseBody
    public List<Composition> CompsInfo(){
        List<Composition> comps = userService.getHotComposition();
        System.out.println("In");
        return comps;
    }

    @RequestMapping(value = "/userInfo.do")
    @ResponseBody
    public User getUserInfo(@RequestParam int Uid){
        User user = userService.getUserInfo(Uid);
        return user;
    }

    @RequestMapping(value = "/userGroup.do")
    @ResponseBody
    public List<Group> getUsergroup(@RequestParam int Uid){
        return userService.getUserGroup(Uid);
    }

    @RequestMapping(value = "/updateUserInfo.do")
    @ResponseBody
    public int UpdateUser(int Userid,int age,String UName,String Gender,String likeC, String dlikeC, String likeT, String dlikeT){
        System.out.println(Userid);
        System.out.println(age);
        String[] lcs = likeC.split(",");
        int[] lc = new int[lcs.length];
        for(int i = 0;i<lcs.length;i++){
            lc[i] = Integer.parseInt(lcs[i]);
        }
        String[] dcs = dlikeC.split(",");
        int[] dc = new int[dcs.length];
        for(int i = 0;i<dcs.length;i++){
            dc[i] = Integer.parseInt(dcs[i]);
        }
        String[] lts = likeT.split(",");
        int[] lt = new int[lts.length];
        for(int i = 0;i<lts.length;i++){
            lt[i] = Integer.parseInt(lts[i]);
        }
        String[] dts = dlikeT.split(",");
        int[] dt = new int[dts.length];
        for(int i = 0;i<dts.length;i++){
            dt[i] = Integer.parseInt(dts[i]);
        }
        System.out.println(lc[0]);
        return userService.UpdateUser(Userid,age,Gender,UName,lc,dc,lt,dt);
    }

    @RequestMapping(value = "/agreeRecommend.do")
    @ResponseBody
    public int agreeRecommend(int Uid,int Rid,int ifAgree){
        return recommendService.agreeRecommend(Rid,Uid,ifAgree);
    }

    @RequestMapping(value = "/userOrder.do")
    @ResponseBody
    public int UserOrder(int Uid,int Pid,int ifAgree){
        return orderService.UserOrder(Uid,Pid,ifAgree);
    }

}
