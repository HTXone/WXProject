package com.WXSys.Service.impl;

import com.WXSys.Service.GroupService;
import com.WXSys.entity.Group;
import com.WXSys.entity.Recommend;
import com.WXSys.entity.User;
import com.WXSys.mapper.GroupInfoMapper;
import com.WXSys.mapper.RecommendInfoMapper;
import com.WXSys.mapper.UserInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class GroupServiceImpl implements GroupService {

    @Autowired
    GroupInfoMapper GDAo;

    @Autowired
    RecommendInfoMapper RDao;

    @Autowired
    UserInfoMapper UDao;

    @Override
    public int NewGroup(int Uid,String GName, String relation) {

        Group group = new Group();
        group.setName(GName);
        group.setRelation(relation);
        group.setOwner(Uid);

        Random r = new Random(1);
        boolean k = true;
        int ran1 = r.nextInt(5000);
        while (k) {
            System.out.println(ran1);
            Group grouptmp = GDAo.selectGroup(ran1);
            if(grouptmp!=null){
                ran1 = r.nextInt(5000);
            }else{
                k = false;
            }
        }
        group.setGid(ran1);
        GDAo.newGroup(group);
        GDAo.userJoinGroup(ran1,Uid,1);
        return  1;

    }

    @Override
    public int GroupDelete(int Gid) {
        return GDAo.GroupDelete(Gid);
    }

    @Override
    public int userJoin(int Gid, int Uid, int ifAdmin) {
        return GDAo.userJoinGroup(Gid,Uid,ifAdmin);
    }

    @Override
    public int userRemove(int Gid, int Uid) {
        return GDAo.DeleteGroupUser(Gid,Uid);
    }

    @Override
    public List<Recommend> getGroupRecommends(int Gid) {

        return RDao.selectRecommendByGidandUid(Gid);
    }

    @Override
    public List<User> getGroupUsers(int Gid) {
        return UDao.selectUserByGid(Gid);
    }

    @Override
    public int setAdmin(int Gid, int Uid, int ifAdmin) {
        return GDAo.updateAdmin(Gid, Uid, ifAdmin);
    }


}
