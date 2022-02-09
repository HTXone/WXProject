package com.WXSys.Service.impl;

import com.WXSys.Service.UserService;
import com.WXSys.entity.*;
import com.WXSys.mapper.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sun.nio.cs.US_ASCII;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserInfoMapper UDao;

    @Autowired
    private GroupInfoMapper GDao;

    @Autowired
    private CompositionInfoMapper CDao;

    @Autowired
    private RecommendInfoMapper RDao;

    @Autowired
    private TagInfoMapper TDao;

    private List<Recipe> caft;

    @Override
    public User getUserInfo(int UserID) {
        System.out.println(UserID);
        User user = UDao.userInfoGet(UserID);

        user.setCompositions(CDao.getUserCompositions(UserID));
        user.setTags(TDao.getUserTags(UserID));

        System.out.println(user.toString());
        return user;
    }

    public int setUserInfo(int UserID,int age,String gender,String UserName){
        User user = new User();
        user.setUid(UserID);
        user.setAge(age);
        user.setGender(gender);
        user.setUName(UserName);
        int res = UDao.updateUser(user);
        return res;
    }

    @Override
    public List<Group> getUserGroup(int UserId) {
        List<Group> Groups = GDao.selectGroupsByUid(UserId);
        return Groups;
    }

    @Override
    public List<Group> getUserMessage(int UserId){
        List<Group> Groups = GDao.selectRecommendGroupsByUid(UserId);
        return Groups;
    }

    @Override
    public int NewUser(String UName, int Age, String Gender,String Uname, int[] likeC, int[] dlikeC, int[] likeT, int[] dlikeT) {
        int Uid = 0;

        User user = new User();
        user.setUid(Uid);
        user.setUName(UName);
        user.setAge(Age);
        user.setGender(Gender);
        System.out.println(user.getUName());

        UDao.newUser(user);
        for(int i:likeC) {
            UDao.setUserLikeComps(Uid,i,1);
        }
        for(int i:dlikeC) {
            UDao.setUserLikeComps(Uid,i,2);
        }
        for(int i:likeT) {
            UDao.setUserLikeTags(Uid,i,1);
        }
        for(int i:dlikeT) {
            UDao.setUserLikeTags(Uid,i,2);
        }

        return 1;
    }

    @Override
    public int UpdateUser(int Uid, int Age, String Gender,String Uname, int[] likeC, int[] dlikeC, int[] likeT, int[] dlikeT) {
        try {
            User user = new User();
            user.setUid(Uid);
            user.setAge(Age);
            user.setGender(Gender);
            user.setUName(Uname);
            UDao.updateUser(user);

            UDao.deleteUserLikeComps(Uid);
            UDao.deleteUserLikeTags(Uid);

            for (int i : likeC) {
                UDao.setUserLikeComps(Uid, i, 1);
            }
            for (int i : dlikeC) {
                UDao.setUserLikeComps(Uid, i, 0);
            }
            for (int i : likeT) {
                UDao.setUserLikeTags(Uid, i, 1);
            }
            for (int i : dlikeT) {
                UDao.setUserLikeTags(Uid, i, 0);
            }
            return 1;
        }catch (Exception e){
            System.out.println(e.getMessage());
            return 0;
        }

    }

    @Override
    public List<Tag> getHotTags() {
        return TDao.selectTags();
    }

    @Override
    public List<Composition> getHotComposition() {
        return CDao.getCompositions();
    }

    public void caftAdd(Recipe recipe){
        caft.add(recipe);
    }

    public void caftremove(Recipe recipe){
        caft.remove(recipe);
    }

    public List<Recipe> getcaft(){
        return caft;
    }

}
