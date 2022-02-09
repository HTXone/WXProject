package com.WXSys.Service.impl;

import com.WXSys.Service.RecommendService;
import com.WXSys.entity.Recommend;
import com.WXSys.mapper.RecipeInfoMapper;
import com.WXSys.mapper.RecommendInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class RecommendServiceImpl implements RecommendService {

    @Autowired
    RecommendInfoMapper RDao;

    @Autowired
    RecipeInfoMapper PDao;

    @Override
    public List<Recommend> recommendsOfGid(int Gid) {
        List<Recommend> recommendList = RDao.selectRecommendByGidandUid(Gid);
        for(Recommend recommend:recommendList){
            recommend.setAgreeUsers(RDao.agreeRecommendUsers(recommend.getRid()));
            recommend.setDisagreeUsers(RDao.disagreeRecommendUsers(recommend.getRid()));
        }
        return recommendList;
    }

    @Override
    public int OverRecommend(int Rid, int ifOver) {
        return RDao.OverRecommend(Rid,ifOver);
    }

    @Override
    public int agreeRecommend(int Rid, int Uid,int ifAgree) {
        return RDao.agreeRecommend(Rid,Uid,ifAgree);
    }

    @Override
    public int newRecommend(int Gid,int Uid){

        int count = PDao.getRecipeCount()+1;

        ArrayList<Integer> tmp = new ArrayList<>();
        for(int i=0;i<5;i++){
            Random random = new Random();

            Integer Pid = random.nextInt(count);
            while (tmp.indexOf(Pid)>-1&&PDao.recipeInfoGet(Pid)!=null){
                Pid = random.nextInt(count);
            }
            tmp.add(Pid);

            Recommend recommend = new Recommend();
            recommend.setGid(Gid);
            recommend.setUid(Uid);
            recommend.setPid(Pid);
            recommend.setIfOver(0);

            RDao.newRecommend(recommend);
        }
        return 1;
    }


}
