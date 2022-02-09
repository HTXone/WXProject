package com.WXSys.Service;

import com.WXSys.entity.Recommend;

import java.util.List;

public interface RecommendService {

    List<Recommend> recommendsOfGid(int Gid);

    int OverRecommend(int Rid,int ifOver);

    int agreeRecommend(int Rid,int Uid,int ifAgree);

    int newRecommend(int Gid,int Uid);

}
