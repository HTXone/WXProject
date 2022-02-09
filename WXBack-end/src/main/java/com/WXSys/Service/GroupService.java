package com.WXSys.Service;

import com.WXSys.entity.Recommend;
import com.WXSys.entity.User;

import java.util.List;

public interface GroupService {

    int NewGroup(int Uid,String GName,String relation);

    int GroupDelete(int Gid);

    int userJoin(int Gid,int Uid,int ifAdmin);

    int userRemove(int Gid,int Uid);

    List<Recommend> getGroupRecommends(int Gid);

    List<User> getGroupUsers(int Gid);

    int setAdmin(int Gid,int Uid,int ifAdmin);

}
