package com.WXSys.Service;

import com.WXSys.entity.Composition;
import com.WXSys.entity.Group;
import com.WXSys.entity.Tag;
import com.WXSys.entity.User;

import java.util.List;

public interface UserService {
    User getUserInfo(int UserID);

    List<Group> getUserGroup(int UserId);

    List<Group> getUserMessage(int UserId);

    int NewUser(String UName,int Age,String Gender,String UserName,int[] likeC,int[] dlikeC,int[] likeT,int[] dlikeT);

    int UpdateUser(int Uid,int Age,String Gender,String UserName,int[] likeC,int[] dlikeC,int[] likeT,int[] dlikeT);

    List<Tag> getHotTags();

    List<Composition> getHotComposition();

}
