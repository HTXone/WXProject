package com.WXSys.Service.impl;

import com.WXSys.Service.RecipeService;
import com.WXSys.entity.Recipe;
import com.WXSys.mapper.RecipeInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    RecipeInfoMapper PDao;

    @Override
    public List<Recipe> getRecommendRecipe(int Uid, int Gid, int page) {

        return PDao.getUserRecipeByPage(page);
    }

    @Override
    public List<Recipe> getRecipeByClass(String Class){
        return PDao.selectRecipeByClass(Class);
    }


}
